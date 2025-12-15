'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Sports Buddy',
      description:
        'A sports event discovery and participation website where users can explore nearby sports events and connect with players.',
      problem:
        'People struggle to find local sports events and like-minded players easily.',
      solution:
        'Built a centralized platform to discover events, view details, and join activities.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      github: 'https://github.com/patilmanish091105/Sports-Buddy',
      live: '#',
    },
    {
      title: 'LocalFix (Service Booking Platform)',
      description:
        'A full-stack platform to find and book verified local service providers like electricians and plumbers.',
      problem:
        'Users often find unverified service providers with unclear pricing.',
      solution:
        'Designed a booking system with provider verification, service details, and booking status tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#',
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'My personal portfolio to showcase projects, skills, and contact information in a professional manner.',
      problem:
        'Needed a strong online presence to apply for internships and showcase work.',
      solution:
        'Built a responsive portfolio using modern UI and deployed it using GitHub & Vercel.',
      tech: ['Next.js', 'Tailwind CSS', 'Web3Forms'],
      github: 'https://github.com/patilmanish091105/my-portfolio',
      live: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="px-4 py-16 md:py-50 scroll-mt-50"
    >
      <div className="max-w-6xl mx-auto w-full">

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
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6
                         border border-purple-500/20
                         hover:border-purple-400
                         hover:shadow-lg hover:shadow-purple-500/10
                         transition-all flex flex-col"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Problem */}
              <p className="text-sm text-gray-400 mb-2">
                <span className="text-purple-400 font-semibold">
                  Problem:
                </span>{' '}
                {project.problem}
              </p>

              {/* Solution */}
              <p className="text-sm text-gray-400 mb-4">
                <span className="text-purple-400 font-semibold">
                  Solution:
                </span>{' '}
                {project.solution}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full
                               bg-purple-500/10 text-purple-300
                               border border-purple-500/20
                               hover:bg-purple-500/20
                               transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300
                             hover:text-purple-400 transition"
                >
                  <Github size={18} />
                  Code
                </a>

                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300
                               hover:text-purple-400 transition"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
