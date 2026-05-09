import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import logoMain from '../img/Logo/logo main.png';

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/gaming', label: 'Gaming' },
    { path: '/resume', label: 'Resume' },
    { path: '/ppw-portfolio', label: 'PPW Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDark ? 'bg-black/40' : 'bg-white/40'
      } backdrop-blur-xl border-b ${
        isDark ? 'border-[#A6FF00]/20' : 'border-gray-300/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img src={logoMain} alt="RaZZeR_X10 Logo" className="h-14 md:h-20 w-auto object-contain drop-shadow-[0_0_10px_rgba(166,255,0,0.5)] transform -translate-y-1" />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? `${
                          isDark
                            ? 'bg-[#A6FF00]/10 text-[#A6FF00]'
                            : 'bg-gray-900/10 text-gray-900'
                        } shadow-[0_0_15px_rgba(166,255,0,0.3)]`
                      : isDark
                      ? 'text-gray-300 hover:text-[#A6FF00]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark
                  ? 'bg-[#A6FF00]/10 text-[#A6FF00] hover:bg-[#A6FF00]/20'
                  : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20'
              } transition-all`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isDark
                  ? 'bg-[#A6FF00]/10 text-[#A6FF00]'
                  : 'bg-gray-900/10 text-gray-900'
              }`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${
            isDark ? 'bg-black/60' : 'bg-white/60'
          } backdrop-blur-xl border-t ${
            isDark ? 'border-[#A6FF00]/20' : 'border-gray-300/20'
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`px-4 py-3 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? `${
                          isDark
                            ? 'bg-[#A6FF00]/10 text-[#A6FF00]'
                            : 'bg-gray-900/10 text-gray-900'
                        } shadow-[0_0_15px_rgba(166,255,0,0.3)]`
                      : isDark
                      ? 'text-gray-300 hover:text-[#A6FF00] hover:bg-[#A6FF00]/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/5'
                  }`}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
