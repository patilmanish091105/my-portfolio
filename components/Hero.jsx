'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-24"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Heading */}
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m{' '}
            <span className="text-purple-400">Manish Patil</span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
            Aspiring Full Stack Web Developer
          </h2>
        </motion.div>

        {/* One-liner */}
        <motion.div
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            I build clean, responsive, and user-friendly web applications using
            modern technologies like HTML, CSS, JavaScript, React, Next.js, and
            Tailwind CSS.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg
                       bg-gradient-to-r from-purple-500 to-pink-600
                       text-white font-semibold
                       hover:shadow-lg hover:shadow-purple-500/40
                       transition"
          >
            View Projects
          </a>

          <a
            href="/resume/Manish_Patil_Resume.pdf"
            download
            className="px-6 py-3 rounded-lg
                       border border-purple-500
                       text-purple-400 font-semibold
                       hover:bg-purple-500/10
                       transition"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
