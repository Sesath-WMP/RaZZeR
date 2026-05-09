import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Palette, Gamepad2, Layers, LayoutGrid as Layout } from 'lucide-react';

export default function Skills() {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      icon: Palette,
      title: 'Graphic Design',
      skills: [
        { name: 'Adobe Photoshop', level: 95 },
        { name: 'Adobe Illustrator', level: 90 },
        { name: 'Figma', level: 92 },
        { name: 'After Effects', level: 85 },
      ],
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      skills: [
        { name: 'Unity 3D', level: 88 },
        { name: 'Unreal Engine', level: 82 },
        { name: 'C#', level: 85 },
        { name: 'Game Design', level: 90 },
      ],
    },
    {
      icon: Layers,
      title: 'Concept Art',
      skills: [
        { name: 'Digital Painting', level: 93 },
        { name: 'Character Design', level: 88 },
        { name: 'Environment Art', level: 86 },
        { name: 'Storyboarding', level: 84 },
      ],
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      skills: [
        { name: 'User Research', level: 87 },
        { name: 'Wireframing', level: 92 },
        { name: 'Prototyping', level: 90 },
        { name: 'Interface Design', level: 94 },
      ],
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
            Skills & Expertise
          </h1>
          <div
            className={`h-1 w-32 rounded-full mb-12 ${
              isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'
            } shadow-[0_0_10px_rgba(166,255,0,0.5)]`}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-2xl ${
                isDark
                  ? 'bg-white/5 border border-[#A6FF00]/20'
                  : 'bg-gray-900/5 border border-gray-900/20'
              } backdrop-blur-xl`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`p-4 rounded-xl ${
                    isDark ? 'bg-[#A6FF00]/10' : 'bg-gray-900/10'
                  }`}
                >
                  <category.icon
                    size={32}
                    className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
                  />
                </div>
                <h2
                  className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {category.title}
                </h2>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span
                        className={`font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`font-bold ${
                          isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full ${
                        isDark ? 'bg-white/10' : 'bg-gray-900/10'
                      } overflow-hidden`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        className={`h-full rounded-full ${
                          isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'
                        } shadow-[0_0_10px_rgba(166,255,0,0.5)]`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { number: '10+', label: 'Design Tools Mastered' },
            { number: '5+', label: 'Programming Languages' },
            { number: '15+', label: 'Certifications' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-8 rounded-xl ${
                isDark
                  ? 'bg-white/5 border border-[#A6FF00]/20'
                  : 'bg-gray-900/5 border border-gray-900/20'
              } backdrop-blur-xl text-center`}
            >
              <div
                className={`text-4xl font-bold mb-2 ${
                  isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                }`}
              >
                {stat.number}
              </div>
              <div
                className={`text-lg ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
