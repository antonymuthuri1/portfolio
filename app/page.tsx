"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

declare global {
  interface Window {
    chatWidget?: {
      init: (config: { verify: { userId: string; userSecret: string } }) => void;
    };
  }
}

export default function Solutions() {

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://swifniq-suite-ai-agent.web.app/embed.js";
    script.async = true;

    script.onload = () => {
      if (window.chatWidget) {
        window.chatWidget.init({
          verify: {
            userId: 'kMjiKQsyI4QUB7TX6Tz1POBRMVU2',
            userSecret: "c509933b-5e15-4b4c-b90e-2c99fb612040",
          },
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const solutions = [
    {
      title: "AI-Powered Lead Nurturing System",
      problem: "Businesses struggle to follow up with leads consistently, leading to lost conversions.",
      solution: "An AI-driven system automates personalized follow-ups, ensuring no lead is forgotten.",
      impact: "Increases conversion rates and saves time for sales teams.",
    },
    {
      title: "Custom AI Chatbot for Customer Support",
      problem: "Customer support teams are overwhelmed with repetitive inquiries, slowing response times.",
      solution: "A chatbot that handles FAQs, bookings, and inquiries, reducing manual workload.",
      impact: "Enhances customer satisfaction and allows support staff to focus on complex issues.",
    },
    {
      title: "Automated Inventory Management System",
      problem: "Manual inventory tracking is time-consuming and prone to errors.",
      solution: "A smart system that monitors stock levels in real-time and automates reordering.",
      impact: "Reduces stock shortages and excess inventory, optimizing costs.",
    },
    {
      title: "Smart Appointment Booking System",
      problem: "Businesses spend too much time coordinating appointments manually.",
      solution: "An automated booking system that integrates with calendars and sends reminders.",
      impact: "Minimizes scheduling conflicts and improves customer experience.",
    },
    {
      title: "Automated Data Extraction & Reporting",
      problem: "Employees waste hours collecting and analyzing data for reports.",
      solution: "An automation tool that extracts, processes, and generates reports instantly.",
      impact: "Saves time, reduces human errors, and enables data-driven decision-making.",
    },
  ];

  return (
    <div className="flex justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl bg-slate-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full"
      >
        <h1 className="text-3xl text-orange-400 font-bold mb-6 text-center">Solutions We&apos;ve Built</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="bg-white hover:outline hover:outline-1 hover:outline-orange-400 dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold">{solution.title}</h2>
              <p className="text-red-500 font-medium mt-2">Problem:</p>
              <p className="text-gray-600 dark:text-gray-300">{solution.problem}</p>
              <p className="text-blue-500 font-medium mt-2">Solution:</p>
              <p className="text-gray-600 dark:text-gray-300">{solution.solution}</p>
              <p className="text-green-500 font-medium mt-2">Impact:</p>
              <p className="text-gray-600 dark:text-gray-300">{solution.impact}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
