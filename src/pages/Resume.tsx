import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  const { isDark } = useTheme();

  const experience = [
    {
      title: 'Senior Game Developer',
      company: 'Pixel Dreams Studio',
      period: '2022 - Present',
      description:
        'Leading game development projects and managing a team of designers and developers',
    },
    {
      title: 'UI/UX Designer',
      company: 'Digital Innovators',
      period: '2020 - 2022',
      description:
        'Designed user interfaces for web and mobile applications with focus on user experience',
    },
    {
      title: 'Graphic Designer',
      company: 'Creative Agency Pro',
      period: '2018 - 2020',
      description:
        'Created visual content for marketing campaigns and brand identities',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Arts in Game Design',
      institution: 'Digital Arts University',
      period: '2014 - 2018',
    },
    {
      degree: 'Certificate in 3D Animation',
      institution: 'Animation Academy',
      period: '2017',
    },
  ];

  const awards = [
    'Best Indie Game Award 2023',
    'Excellence in UI Design 2022',
    'Creative Vision Award 2021',
    'Outstanding Portfolio 2020',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 ${
                  isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                }`}
              >
                Resume
              </h1>
              <div
                className={`h-1 w-32 rounded-full ${
                  isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'
                } shadow-[0_0_10px_rgba(166,255,0,0.5)]`}
              />
            </div>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(166, 255, 0, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className={`mt-6 md:mt-0 px-8 py-4 rounded-lg font-semibold ${
                isDark
                  ? 'bg-[#A6FF00] text-black hover:bg-[#A6FF00]/90'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              } shadow-[0_0_20px_rgba(166,255,0,0.3)] transition-all flex items-center space-x-2`}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase
              size={32}
              className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
            />
            <h2
              className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Professional Experience
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`p-6 rounded-xl ${
                  isDark
                    ? 'bg-white/5 border border-[#A6FF00]/20'
                    : 'bg-gray-900/5 border border-gray-900/20'
                } backdrop-blur-xl`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {job.title}
                    </h3>
                    <p
                      className={`font-semibold ${
                        isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                      }`}
                    >
                      {job.company}
                    </p>
                  </div>
                  <span
                    className={`mt-2 md:mt-0 px-4 py-2 rounded-full text-sm ${
                      isDark
                        ? 'bg-white/10 text-gray-300'
                        : 'bg-gray-900/10 text-gray-700'
                    }`}
                  >
                    {job.period}
                  </span>
                </div>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap
              size={32}
              className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
            />
            <h2
              className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Education
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`p-6 rounded-xl ${
                  isDark
                    ? 'bg-white/5 border border-[#A6FF00]/20'
                    : 'bg-gray-900/5 border border-gray-900/20'
                } backdrop-blur-xl`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className={`font-semibold ${
                        isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                      }`}
                    >
                      {edu.institution}
                    </p>
                  </div>
                  <span
                    className={`mt-2 md:mt-0 px-4 py-2 rounded-full text-sm ${
                      isDark
                        ? 'bg-white/10 text-gray-300'
                        : 'bg-gray-900/10 text-gray-700'
                    }`}
                  >
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Award
              size={32}
              className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
            />
            <h2
              className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Awards & Recognition
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl ${
                  isDark
                    ? 'bg-white/5 border border-[#A6FF00]/20'
                    : 'bg-gray-900/5 border border-gray-900/20'
                } backdrop-blur-xl text-center`}
              >
                <p
                  className={`font-semibold ${
                    isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                  }`}
                >
                  {award}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
