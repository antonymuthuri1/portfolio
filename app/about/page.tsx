"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-3xl w-full"
      >
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Hey! I&apos;m a self-taught full-stack developer passionate about building
          scalable, AI-powered web applications. With expertise in **Next.js, Firebase, and AI integrations**, 
          I specialize in automating workflows and crafting user-friendly digital experiences.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Skills & Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mt-2">
          {[
            "Next.js",
            "TypeScript",
            "Firebase",
            "TailwindCSS",
            "Node.js",
            "AI Integrations",
          ].map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-gray-200 dark:bg-gray-800 text-sm px-3 py-1 rounded-lg"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-6">Why AI?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I leverage **AI tools** to streamline workflows, automate processes, and 
          build smart applications that solve real-world problems efficiently.
        </p>

        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  );
}
