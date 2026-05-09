import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDark ? 'text-[#A6FF00]' : 'text-gray-900'
            }`}
          >
            Get in Touch
          </h1>
          <div
            className={`h-1 w-32 rounded-full mb-12 ${
              isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'
            } shadow-[0_0_10px_rgba(166,255,0,0.5)]`}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2
              className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Let's Create Something Amazing
            </h2>
            <p
              className={`text-lg mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Have a project in mind? Want to collaborate? Or just want to say
              hi? I'd love to hear from you. Drop me a message and I'll get back
              to you as soon as possible.
            </p>

            <div className="space-y-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className={`p-4 rounded-xl ${
                  isDark
                    ? 'bg-white/5 border border-[#A6FF00]/20'
                    : 'bg-gray-900/5 border border-gray-900/20'
                } backdrop-blur-xl flex items-center space-x-4`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    isDark ? 'bg-[#A6FF00]/10' : 'bg-gray-900/10'
                  }`}
                >
                  <Mail
                    size={24}
                    className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Email
                  </p>
                  <p
                    className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    razzer.x10@email.com
                  </p>
                </div>
              </motion.div>
            </div>

            <div>
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: '0 0 20px rgba(166, 255, 0, 0.5)',
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-[#A6FF00]/20 hover:bg-[#A6FF00]/10'
                        : 'bg-gray-900/5 border border-gray-900/20 hover:bg-gray-900/10'
                    } backdrop-blur-xl transition-all`}
                  >
                    <social.icon
                      size={24}
                      className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`p-8 rounded-2xl ${
              isDark
                ? 'bg-white/5 border border-[#A6FF00]/20'
                : 'bg-gray-900/5 border border-gray-900/20'
            } backdrop-blur-xl`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? 'bg-white/5 border border-[#A6FF00]/20 text-white focus:border-[#A6FF00]/50'
                      : 'bg-gray-900/5 border border-gray-900/20 text-gray-900 focus:border-gray-900/50'
                  } backdrop-blur-xl outline-none transition-all focus:shadow-[0_0_15px_rgba(166,255,0,0.3)]`}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? 'bg-white/5 border border-[#A6FF00]/20 text-white focus:border-[#A6FF00]/50'
                      : 'bg-gray-900/5 border border-gray-900/20 text-gray-900 focus:border-gray-900/50'
                  } backdrop-blur-xl outline-none transition-all focus:shadow-[0_0_15px_rgba(166,255,0,0.3)]`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? 'bg-white/5 border border-[#A6FF00]/20 text-white focus:border-[#A6FF00]/50'
                      : 'bg-gray-900/5 border border-gray-900/20 text-gray-900 focus:border-gray-900/50'
                  } backdrop-blur-xl outline-none transition-all focus:shadow-[0_0_15px_rgba(166,255,0,0.3)] resize-none`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(166, 255, 0, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold ${
                  isDark
                    ? 'bg-[#A6FF00] text-black hover:bg-[#A6FF00]/90'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                } shadow-[0_0_20px_rgba(166,255,0,0.3)] transition-all flex items-center justify-center space-x-2`}
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
