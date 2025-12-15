'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express'],
    },
    {
      title: 'Database',
      items: ['MongoDB', 'Firebase'],
    },
    {
      title: 'Tools & Others',
      items: ['Git', 'GitHub', 'VS Code', 'Vercel'],
    },
  ];

  return (
    <section
      id="skills"
      className="px-4 py-16 md:py-50 scroll-mt-50"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Animated Heading */}
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
            Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8
                         border border-purple-500/20
                         hover:border-purple-400
                         hover:shadow-lg hover:shadow-purple-500/10
                         transition-all"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm
                               bg-purple-500/10 text-purple-300
                               border border-purple-500/20
                               hover:bg-purple-500/20
                               transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
