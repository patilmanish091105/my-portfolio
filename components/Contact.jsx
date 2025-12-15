'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    setFormStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '082fd55d-54cd-4594-940e-cbeb91c0544a',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Contact Message',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      setFormStatus('error');
    } finally {
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 py-16 md:py-50 scroll-mt-50"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center
                         bg-gradient-to-r from-purple-400 to-pink-600
                         bg-clip-text text-transparent">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8
                            border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let’s Connect
              </h3>

              <p className="text-gray-300 mb-8">
                Feel free to reach out for collaborations, opportunities,
                or just a friendly chat about web development.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <Mail className="text-purple-400" />
                  <span>patilmanish8886@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Phone className="text-purple-400" />
                  <span>+91 8055639896</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin className="text-purple-400" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8
                            border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-3">
                Response Time
              </h3>
              <p className="text-gray-300">
                I usually reply within 24–48 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8
                       border border-purple-500/20"
          >
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-700/50
                           border border-purple-500/30 rounded-lg text-white"
              />

              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-700/50
                           border border-purple-500/30 rounded-lg text-white"
              />

              <textarea
                rows="5"
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-700/50
                           border border-purple-500/30 rounded-lg
                           text-white resize-none"
              />

              <button
                onClick={handleSubmit}
                disabled={formStatus === 'sending'}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600
                           text-white px-8 py-3 rounded-lg font-semibold
                           hover:shadow-lg hover:shadow-purple-500/40
                           transition disabled:opacity-50"
              >
                {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="text-green-400 text-center font-semibold">
                  ✓ Message sent successfully!
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-400 text-center font-semibold">
                  ✗ Something went wrong. Try again.
                </p>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
