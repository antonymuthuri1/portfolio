'use client';

import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { db, messagesCollection } from "@/lib/firebase";

// Define the type for a message
interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: { seconds: number }; // Firestore timestamp
  read: boolean;
}

export default function AdminMessages() {
  const {user} = useAuth();
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [expandedMessage, setExpandedMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);


  // // Always call useEffect, but redirect inside it
  // useEffect(() => {
  //   if (!user) {
  //     router.push('/login'); // Redirect to login page if not authenticated
  //   }
  // }, [user, router]);

  // If no user, return loading message until the effect completes
  if (!user) {
    router.push('/login');
    // return <p>Redirecting...</p>;
  }

  // Fetch messages from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(
      messagesCollection,
      (snapshot) => {
        try {
          const data = snapshot.docs.map((doc) => {
            const messageData = doc.data();
            return {
              id: doc.id,
              name: messageData.name,
              email: messageData.email,
              message: messageData.message,
              createdAt: messageData.createdAt, // assuming `createdAt` is a timestamp
              read: messageData.read || false, // assuming `read` is a boolean
            };
          });

          data.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
          setMessages(data);
          setUnreadCount(data.filter((msg) => !msg.read).length);
        } catch (err) {
          setError("Error fetching messages");
          console.error(err);
        }
      },
      (err) => {
        setError("Error fetching messages");
        console.error(err);
      }
    );

    return () => unsubscribe();
  }, []); // Effect runs once on component mount

  const markAsRead = async (id: string) => {
    try {
      await updateDoc(doc(db, "messages", id), { read: true });
      setMessages((prev) => {
        const updatedMessages = prev.map((msg) =>
          msg.id === id ? { ...msg, read: true } : msg
        );
        setUnreadCount(updatedMessages.filter((msg) => !msg.read).length);
        return updatedMessages;
      });
    } catch (err) {
      setError("Error marking message as read");
      console.error(err);
    }
  };

  const toggleMessage = (id: string) => {
    setExpandedMessage(expandedMessage === id ? null : id);
    // If the message is unread, mark it as read
    const message = messages.find((msg) => msg.id === id);
    if (message && !message.read) {
      markAsRead(id);
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Admin Panel <span className="text-red-500">({unreadCount} unread)</span>
      </h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-4 border rounded-lg shadow-md transition-all ${
              msg.read ? "bg-gray-100" : "bg-red-100 hover:bg-red-200"
            }`}
          >
            <div
              className="cursor-pointer flex justify-between"
              onClick={() => toggleMessage(msg.id)}
            >
              <h2 className="font-semibold">{msg.name}</h2>
              <span className="text-sm text-gray-500">
                {new Date(msg.createdAt?.seconds * 1000).toLocaleString()}
              </span>
            </div>
            {expandedMessage === msg.id && (
              <div className="mt-2">
                <p className="text-gray-700">{msg.message}</p>
                <p className="text-blue-500">{msg.email}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
