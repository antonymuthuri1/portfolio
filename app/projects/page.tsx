"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Lead Manager",
      description: "A tool that automates lead management using AI and Firebase.",
      tech: ["Next.js", "TypeScript", "Firebase", "TailwindCSS"],
      github: "https://github.com/yourusername/ai-lead-manager",
      demo: "https://yourprojectdemo.com",
    },
    {
      title: "Custom Chatbot Assistant",
      description: "An AI chatbot that integrates with business workflows.",
      tech: ["React", "Node.js", "OpenAI API"],
      github: "https://github.com/yourusername/chatbot-assistant",
      demo: "https://yourchatbotdemo.com",
    },
  ];

  return (
    <div className="flex justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl w-full"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Solutions We’ve Built</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-200 dark:bg-gray-800 text-sm px-3 py-1 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-500"
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-green-500"
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
