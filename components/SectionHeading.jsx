'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ title }) {
  return (
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-12 text-center
                 bg-gradient-to-r from-purple-400 to-pink-600
                 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
}
