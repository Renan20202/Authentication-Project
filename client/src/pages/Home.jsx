import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-slate-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6 mt-24"
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white m-2">
        <span className="bg-gradient-to-r from-[#4e7b72] via-[#77a49b] to-[#1a4b42] text-transparent bg-clip-text">
          Welcome to my Auth App!
        </span>
      </h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        This is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It includes authentication features that
        allow users to sign up, log in, and log out, and provides access to
        protected routes only for authenticated users.
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        This application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack. 
      </p>
    </motion.div>
  );
}
