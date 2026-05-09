import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Calendar, Award, Briefcase, Zap, Star, Hexagon } from 'lucide-react';
import { useRef, useState } from 'react';
import meImg from '../img/profile/Me_transparent.png';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -20 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

export default function About() {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.2, 1.5]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.2, 0.5]);

  const timeline = [
    { year: '2018', title: 'Started Design Journey', description: 'Began exploring graphic design and digital art.' },
    { year: '2019', title: 'First Game Project', description: 'Developed first indie game with custom artwork.' },
    { year: '2021', title: 'UI/UX Specialization', description: 'Expanded into professional UI/UX design.' },
    { year: '2023', title: 'Full-Stack Creative', description: 'Mastered end-to-end game and design development.' },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen pt-32 pb-24 px-4 overflow-hidden">
      {/* Immersive Blurred Background */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY, scale: scaleBg, opacity: opacityBg }}
      >
        <img 
          src={meImg} 
          alt="Background" 
          className="w-full h-full object-cover blur-[80px] saturate-200 transform-gpu"
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-black/80 via-black/60 to-black/90' : 'bg-gradient-to-b from-white/80 via-white/60 to-white/90'}`} />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-24 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#A6FF00]/10 rounded-full blur-[2px] -z-10"
          />
          <h1 className={`text-7xl md:text-9xl font-black mb-6 uppercase tracking-tighter ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20' : 'text-gray-900'} drop-shadow-2xl`}>
            About Me
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className={`h-2 w-48 mx-auto rounded-full ${isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'} shadow-[0_0_20px_rgba(166,255,0,0.8)]`}
          />
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32 perspective-[2000px]">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, z: 50 }}
            className={`p-10 md:p-14 rounded-[3rem] ${isDark ? 'bg-black/40 border border-[#A6FF00]/30 shadow-[0_0_50px_rgba(166,255,0,0.1)]' : 'bg-white/60 border border-gray-900/20 shadow-2xl'} backdrop-blur-2xl transform-style-3d`}
          >
            <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center ${isDark ? 'bg-[#A6FF00]/20 text-[#A6FF00]' : 'bg-gray-900 text-white'}`}>
              <Zap size={32} />
            </div>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'} drop-shadow-lg`}>
              Who I Am
            </h2>
            <p className={`text-xl md:text-2xl leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm Sesath Wikramasinghe, known in the digital realm as <span className={isDark ? "text-[#A6FF00] drop-shadow-[0_0_10px_rgba(166,255,0,0.5)]" : "font-black"}>RaZZeR_X10</span>.
              As a multidisciplinary creative, I blend the worlds of graphic design, game development, and UI/UX to craft immersive digital experiences. My passion lies in pushing the boundaries of visual storytelling and interactive design.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5, z: 50 }}
            className={`p-10 md:p-14 rounded-[3rem] ${isDark ? 'bg-black/40 border border-[#A6FF00]/30 shadow-[0_0_50px_rgba(166,255,0,0.1)]' : 'bg-white/60 border border-gray-900/20 shadow-2xl'} backdrop-blur-2xl transform-style-3d`}
          >
            <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center ${isDark ? 'bg-[#A6FF00]/20 text-[#A6FF00]' : 'bg-gray-900 text-white'}`}>
              <Star size={32} />
            </div>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'} drop-shadow-lg`}>
              My Mission
            </h2>
            <p className={`text-xl md:text-2xl leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              To create visually stunning and functionally exceptional digital products that resonate with users. I believe in the power of design to transform ideas into reality, and I'm committed to delivering work that exceeds expectations and drives results.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div variants={itemVariants} className="mb-32 relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#A6FF00]/50 to-transparent blur-[1px] hidden md:block" />
          
          <h2 className={`text-5xl md:text-6xl font-black mb-16 text-center ${isDark ? 'text-white' : 'text-gray-900'} drop-shadow-2xl`}>
            The Journey
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 20 }}
                className={`relative p-8 md:p-10 rounded-[2rem] ${isDark ? 'bg-gradient-to-r from-black/80 to-black/40 border border-[#A6FF00]/20' : 'bg-white/80 border border-gray-900/10'} backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center gap-8 group overflow-hidden`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A6FF00]/0 via-[#A6FF00]/10 to-[#A6FF00]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                
                <div className={`p-5 rounded-2xl shrink-0 ${isDark ? 'bg-[#A6FF00]/10 shadow-[0_0_30px_rgba(166,255,0,0.2)]' : 'bg-gray-900 text-white shadow-xl'}`}>
                  <Calendar size={32} className={isDark ? 'text-[#A6FF00]' : ''} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-end gap-4 mb-3">
                    <span className={`text-5xl font-black ${isDark ? 'text-[#A6FF00]' : 'text-gray-900'} tracking-tighter`}>
                      {item.year}
                    </span>
                    <div className={`h-1 flex-1 mb-2 rounded-full ${isDark ? 'bg-gradient-to-r from-[#A6FF00]/50 to-transparent' : 'bg-gradient-to-r from-gray-900/50 to-transparent'}`} />
                  </div>
                  <h3 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: 'Recognition', desc: 'Multiple industry awards and nominations' },
            { icon: Briefcase, title: 'Professional', desc: 'Collaborated with leading brands and studios' },
            { icon: Hexagon, title: 'Dedicated', desc: 'Continuous learning and skill development' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.1, y: -15, rotateZ: index % 2 === 0 ? 2 : -2 }}
              className={`p-10 rounded-[2.5rem] ${isDark ? 'bg-white/5 border border-[#A6FF00]/20 hover:border-[#A6FF00]/60 hover:bg-[#A6FF00]/5 hover:shadow-[0_0_50px_rgba(166,255,0,0.2)]' : 'bg-white/80 border border-gray-900/20 hover:shadow-2xl'} backdrop-blur-xl text-center transition-all duration-300 group`}
            >
              <div className={`inline-flex p-6 rounded-3xl ${isDark ? 'bg-[#A6FF00]/10 group-hover:bg-[#A6FF00]/20' : 'bg-gray-900/10'} mb-6 transition-colors`}>
                <item.icon size={48} className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'} />
              </div>
              <h3 className={`text-3xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={`text-lg font-medium ${isDark ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600'}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
