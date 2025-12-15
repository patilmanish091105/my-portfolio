'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="px-25 py-50 md:py-50">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-center
                       bg-gradient-to-r from-purple-400 to-pink-500
                       bg-clip-text text-transparent"
          >
            About Me
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="bg-slate-800/60 backdrop-blur-md rounded-2xl
                     p-8 md:p-12 border border-purple-500/20
                     shadow-lg shadow-purple-500/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Paragraphs */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m{' '}
              <span className="text-purple-400 font-semibold">
                Manish Patil
              </span>
              , a Diploma in Information Technology student living hostel life
              in Mumbai. I’m passionate about web development and focused on
              building real-world, user-friendly web applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I mainly work with{' '}
              <span className="text-purple-400 font-medium">
                HTML, CSS, JavaScript, React, Next.js, Tailwind CSS
              </span>
              . I enjoy converting ideas into clean, responsive interfaces
              while continuously improving my problem-solving skills.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My goal is to grow as a skilled software engineer, gain strong
              industry experience through internships, and build products that
              actually solve problems. I believe in consistency, learning, and
              improving every single day 🚀
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '3+', label: 'Projects Built' },
              { value: '1+', label: 'Year Learning' },
              { value: '5+', label: 'Technologies' },
              { value: '100%', label: 'Dedication' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="hover:-translate-y-1 transition-transform"
              >
                <p className="text-3xl font-bold text-purple-400">
                  {item.value}
                </p>
                <p className="text-gray-400 text-sm tracking-wide">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
