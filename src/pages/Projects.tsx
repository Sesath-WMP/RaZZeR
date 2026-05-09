import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'Cyber Legends',
      category: 'Game Development',
      description:
        'A futuristic multiplayer battle arena game with stunning visual effects and immersive gameplay',
      tags: ['Unity', 'C#', '3D Modeling'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Neon UI Kit',
      category: 'UI Design',
      description:
        'Complete design system with cyberpunk-inspired components for modern web applications',
      tags: ['Figma', 'Design System', 'React'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Fantasy Realm',
      category: 'Concept Art',
      description:
        'Environmental concept art for an open-world fantasy RPG featuring diverse biomes',
      tags: ['Digital Painting', 'Photoshop', 'Concept Design'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Tech Dashboard',
      category: 'UI/UX Design',
      description:
        'Analytics dashboard with real-time data visualization and intuitive controls',
      tags: ['Figma', 'Prototyping', 'Data Viz'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Character Portfolio',
      category: 'Graphic Design',
      description:
        'Collection of character designs for various game genres and animation projects',
      tags: ['Illustration', 'Character Design', 'Adobe Suite'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Space Shooter',
      category: 'Game Development',
      description:
        '2D space shooter with procedurally generated levels and boss battles',
      tags: ['Unity', 'Game Design', 'Pixel Art'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
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
            Projects
          </h1>
          <div
            className={`h-1 w-32 rounded-full mb-12 ${
              isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'
            } shadow-[0_0_10px_rgba(166,255,0,0.5)]`}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`group rounded-2xl overflow-hidden ${
                isDark
                  ? 'bg-white/5 border border-[#A6FF00]/20'
                  : 'bg-gray-900/5 border border-gray-900/20'
              } backdrop-blur-xl hover:border-[#A6FF00]/50 transition-all duration-300`}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="flex space-x-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg ${
                        isDark ? 'bg-[#A6FF00]/90' : 'bg-gray-900/90'
                      } ${
                        isDark ? 'text-black' : 'text-white'
                      } backdrop-blur-xl`}
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg ${
                        isDark
                          ? 'bg-white/10 text-white'
                          : 'bg-gray-900/10 text-gray-900'
                      } backdrop-blur-xl border ${
                        isDark ? 'border-white/20' : 'border-gray-900/20'
                      }`}
                    >
                      <Code size={20} />
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <div
                  className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                  }`}
                >
                  {project.category}
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDark
                          ? 'bg-white/10 text-gray-300'
                          : 'bg-gray-900/10 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
