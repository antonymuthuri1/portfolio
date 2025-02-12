"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { messagesCollection } from "@/lib/firebase";
import LoadingSpinner from "@/components/loadingSpinner3";

export default function WorkWithUs() {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      await addDoc(messagesCollection, {
        ...formData,
        createdAt: serverTimestamp(),
        read: false,
      });
      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex justify-center bg-[#030624] p-8">
       {loading && <LoadingSpinner />}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl min-h-180 w-full bg-slate-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl text-orange-400 font-bold mb-6 text-center">Work With Us</h1>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          At Swifniq Solutions, we specialize in building <strong>custom AI-driven</strong> and <strong>automation solutions</strong> to streamline your business operations allowing you and your team to focus on what truly matters: <strong className="text-orange-400">growing your business </strong>. Whether you're looking for <strong>AI-powered customer support</strong>, <strong>automated workflows</strong>, or <strong>smarter lead management</strong>, we’re here to help.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          <h2 className="text-xl text-blue-6 font-semibold mb-2">How We Can Help</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Automate repetitive tasks to save time and reduce costs.</li>
            <li>Enhance customer engagement with AI-powered chatbots.</li>
            <li>Streamline workflows for improved efficiency.</li>
            <li>Develop custom AI solutions tailored to your business needs.</li>
          </ul>
        </motion.div>

        <h2 className="text-2xl text-blue-6 font-semibold mt-8 text-center">Let's Discuss Your Project</h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-center mt-4"
          >
            ✅ Thank you! Your message has been sent.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 focus:border-solid focus:border focus:border-transparent focus:outline focus:outline-1 focus:outline-blue-6 border rounded-md dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
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
                className="w-full p-2 border focus:border-solid focus:border focus:border-transparent focus:outline focus:outline-1 focus:outline-blue-6 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
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
                className="w-full p-2 border focus:border-solid focus:border focus:border-transparent focus:outline focus:outline-1 focus:outline-blue-6 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
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
