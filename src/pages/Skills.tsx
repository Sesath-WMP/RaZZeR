import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Palette, Gamepad2, Layers, LayoutGrid as Layout, PenTool, Paintbrush, Wand2, MonitorSmartphone } from 'lucide-react';

export default function Skills() {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      icon: Palette,
      title: 'Graphic Design',
      role: 'Senior Graphic Designer',
      experience: '6+ Years',
      description: 'Expert in photo manipulation, branding, and advanced digital composition. Crafting high-end visual solutions and marketing materials.',
      tools: [
        { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg' },
        { name: 'Illustrator', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' },
        { name: 'After Effects', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-plain.svg' },
        { name: 'Premiere Pro', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg' },
      ],
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      role: 'Game Developer & Designer',
      experience: '3+ Years',
      description: 'Developing immersive AR/VR experiences, interactive gameplay mechanics, and persistent game logic architectures.',
      tools: [
        { name: 'Unity 3D', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg' },
        { name: 'C#', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg' },
        { name: 'Unreal Engine', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg' },
        { name: 'Blender', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg' },
      ],
    },
    {
      icon: Layers,
      title: 'Concept Art',
      role: 'Game Concept Designer',
      experience: '2+ Years',
      description: 'Visualizing immersive environments, diverse biomes, character designs, and detailed storyboarding for gaming worlds.',
      tools: [
        { name: 'Digital Painting', LucideIcon: Paintbrush },
        { name: 'Procreate', LucideIcon: PenTool }, 
        { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg' },
        { name: 'Environment Art', LucideIcon: Wand2 },
      ],
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      role: 'UI/UX Designer',
      experience: '2+ Years',
      description: 'Designing intuitive, player-centric interfaces, rapid prototyping, and wireframing for games and modern web applications.',
      tools: [
        { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'Adobe XD', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg' },
        { name: 'Web Interfaces', LucideIcon: MonitorSmartphone },
        { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
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

        <div className="grid xl:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-3xl ${
                isDark
                  ? 'bg-white/5 border border-[#A6FF00]/20 shadow-[0_0_30px_rgba(166,255,0,0.05)]'
                  : 'bg-gray-900/5 border border-gray-900/20 shadow-xl'
              } backdrop-blur-xl relative overflow-hidden group`}
            >
              {/* Background Glow */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none ${isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'}`} />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 rounded-2xl ${
                        isDark ? 'bg-[#A6FF00]/10' : 'bg-gray-900/10'
                      }`}
                    >
                      <category.icon
                        size={32}
                        className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
                      />
                    </div>
                    <div>
                      <h2
                        className={`text-2xl md:text-3xl font-bold mb-1 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {category.title}
                      </h2>
                      <div className={`text-sm md:text-base font-semibold tracking-wide uppercase ${isDark ? 'text-[#A6FF00]' : 'text-gray-700'}`}>
                        {category.role}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap self-start ${
                    isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-black/5 text-gray-900 border border-black/10'
                  }`}>
                    {category.experience}
                  </div>
                </div>

                <p className={`mb-8 text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {category.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {category.tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-colors ${
                        isDark ? 'bg-black/30 hover:bg-[#A6FF00]/10 border border-white/5' : 'bg-white/50 hover:bg-white border border-gray-200'
                      }`}
                    >
                      {tool.iconUrl ? (
                        <img 
                          src={tool.iconUrl} 
                          alt={tool.name} 
                          className="w-10 h-10 mb-3 object-contain drop-shadow-md"
                        />
                      ) : tool.LucideIcon ? (
                        <tool.LucideIcon 
                          size={36} 
                          strokeWidth={1.5}
                          className={`mb-3 drop-shadow-md ${isDark ? 'text-gray-300' : 'text-gray-700'}`} 
                        />
                      ) : null}
                      <span className={`text-xs font-semibold text-center ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
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
              className={`p-8 rounded-2xl ${
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
                className={`text-lg font-medium tracking-wide ${
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
