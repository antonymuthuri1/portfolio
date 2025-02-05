"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { messagesCollection } from "@/lib/firebase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(messagesCollection, {
        ...formData,
        createdAt: serverTimestamp(),
        read: false,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg w-full"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-center"
          >
            ✅ Thank you! Your message has been sent.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
