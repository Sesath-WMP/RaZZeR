import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Palette, Gamepad2, Lightbulb, Layout } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import meImg from '../img/profile/Me.png';
import meTransparentImg from '../img/profile/Me_transparent.png';

const PremiumName = ({ text, isDark }: { text: string; isDark: boolean }) => {
  return (
    <div className="flex overflow-visible pb-4">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 80, rotateY: 90, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            type: "spring",
            stiffness: 120,
            damping: 10
          }}
          whileHover={{ 
            y: -15, 
            scale: 1.25, 
            rotateZ: Math.random() > 0.5 ? 6 : -6,
            textShadow: isDark ? "0px 10px 40px rgba(166,255,0,0.9)" : "0px 10px 20px rgba(0,0,0,0.5)",
            color: isDark ? "#A6FF00" : "#000"
          }}
          className={`inline-block transition-colors duration-300 cursor-pointer ${
            isDark ? 'text-white drop-shadow-[0_0_15px_rgba(166,255,0,0.3)]' : 'text-gray-900 drop-shadow-xl'
          }`}
        >
          {letter === "_" ? "\u00A0_\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default function Home() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [isZooming, setIsZooming] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleNavigateAbout = () => {
    setIsZooming(true);
    setTimeout(() => {
      navigate('/about');
    }, 800); // Wait for the zoom animation to finish
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 pt-24 pb-16 overflow-hidden perspective-[2000px]">
      <motion.div 
        className="max-w-7xl mx-auto w-full"
        animate={isZooming ? {
          scale: 12,
          z: 1000,
          opacity: 0,
          filter: "blur(20px)"
        } : {}}
        transition={{ duration: 0.8, ease: [0.11, 0, 0.5, 0] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                isDark
                  ? 'bg-[#A6FF00]/10 border border-[#A6FF00]/30'
                  : 'bg-gray-900/10 border border-gray-900/30'
              } backdrop-blur-xl mb-6`}
            >
              <Sparkles
                size={18}
                className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
              />
              <span
                className={`text-sm ${
                  isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                }`}
              >
                Welcome to my digital realm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={handleNavigateAbout}
              className={`text-5xl md:text-7xl xl:text-8xl font-bold mb-4 flex flex-wrap justify-center lg:justify-start cursor-pointer ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              <PremiumName text="RaZZeR_X10" isDark={isDark} />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={`text-3xl md:text-4xl font-light mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Sesath Wikramasinghe
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {[
                { name: 'Graphic Designer', icon: Palette, color: 'text-pink-500', glowHover: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]', borderHover: 'group-hover:border-pink-500/50' },
                { name: 'Game Developer', icon: Gamepad2, color: 'text-purple-500', glowHover: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]', borderHover: 'group-hover:border-purple-500/50' },
                { name: 'Concept Designer', icon: Lightbulb, color: 'text-yellow-400', glowHover: 'group-hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]', borderHover: 'group-hover:border-yellow-400/50' },
                { name: 'UI Designer', icon: Layout, color: 'text-cyan-400', glowHover: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]', borderHover: 'group-hover:border-cyan-400/50' },
              ].map((role, index) => (
                <motion.div
                  key={role.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.15, type: 'spring', bounce: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`relative group flex items-center gap-4 px-5 py-2.5 rounded-2xl ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                  } backdrop-blur-xl border cursor-pointer overflow-hidden transition-all duration-300 ${role.borderHover} ${role.glowHover}`}
                >
                  {/* Sweep animation on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ transform: "skewX(-15deg)" }} />
                  
                  {/* Icon Container */}
                  <div className="p-2 rounded-xl bg-black/40 border border-white/10 group-hover:scale-110 transition-transform duration-300 z-10">
                    <role.icon size={20} className={role.color} />
                  </div>
                  
                  <span className={`font-medium tracking-wide ${isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-black'} transition-colors duration-300 z-10`}>
                    {role.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Crafting immersive digital experiences through innovative design and
              cutting-edge game development. Let's build the future together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(166, 255, 0, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 w-full sm:w-auto rounded-lg font-semibold ${
                    isDark
                      ? 'bg-[#A6FF00] text-black hover:bg-[#A6FF00]/90'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  } shadow-[0_0_20px_rgba(166,255,0,0.3)] transition-all flex items-center space-x-2 justify-center`}
                >
                  <span>View Projects</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 w-full sm:w-auto rounded-lg font-semibold ${
                    isDark
                      ? 'bg-white/5 text-[#A6FF00] border-2 border-[#A6FF00]/30 hover:bg-white/10'
                      : 'bg-gray-900/5 text-gray-900 border-2 border-gray-900/30 hover:bg-gray-900/10'
                  } backdrop-blur-xl transition-all`}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.4 }}
            className="flex justify-center relative order-1 lg:order-2 mt-16 lg:mt-24"
            style={{ perspective: 1000 }}
          >
            {/* Animating Background Squares */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 xl:w-[28rem] xl:h-[28rem] pointer-events-none">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className={`absolute inset-0 border-2 ${isDark ? 'border-[#A6FF00]/40' : 'border-gray-900/40'} rounded-[3rem]`}
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className={`absolute inset-0 border-2 ${isDark ? 'border-[#A6FF00]/20' : 'border-gray-900/20'} rounded-[3rem] scale-105`}
               />
            </div>

            {/* Glowing background orb */}
            <div 
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full blur-[100px] ${
                isDark ? 'bg-[#A6FF00]/30' : 'bg-blue-400/20'
              } z-0 pointer-events-none`}
            />
            
            {/* Image container */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleNavigateAbout}
              whileHover="hover"
              initial="rest"
              animate="rest"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 xl:w-[28rem] xl:h-[28rem] cursor-pointer"
            >
               {/* Background Glass Panel (Acts as the frame) */}
               <motion.div 
                 className={`absolute inset-0 rounded-[3rem] overflow-hidden ${
                   isDark 
                     ? 'border border-white/10 bg-black/40 shadow-[0_0_40px_rgba(166,255,0,0.15)]' 
                     : 'border border-black/10 bg-white/40 shadow-2xl'
                 } backdrop-blur-md`}
                 style={{ transform: "translateZ(0px)" }}
               >
                 {/* Background Image */}
                 <motion.div 
                   variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                   transition={{ duration: 0.4 }}
                   className="absolute inset-x-0 bottom-0 flex justify-center items-end"
                   style={{ transform: "translateZ(-20px)" }}
                 >
                    <img 
                      src={meImg} 
                      alt="Sesath Background" 
                      className="w-full h-auto max-w-[120%] object-bottom"
                    />
                    {/* Dark overlay on hover */}
                    <motion.div 
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 0.4 } }}
                      className="absolute inset-0 bg-black pointer-events-none" 
                    />
                 </motion.div>
               </motion.div>

               {/* Foreground image (Transparent Me) popping out of the top */}
               <motion.div 
                 variants={{
                   rest: { z: 30, scale: 1 },
                   hover: { z: 60, scale: 1.05, y: -10 }
                 }}
                 transition={{ duration: 0.4, ease: "easeOut" }}
                 className="absolute inset-x-0 bottom-0 flex justify-center items-end z-10 pointer-events-none"
                 style={{ transformOrigin: "bottom center" }}
               >
                 <img 
                   src={meTransparentImg} 
                   alt="Sesath Foreground" 
                   className="w-full h-auto max-w-[120%] object-bottom filter drop-shadow-2xl"
                 />
               </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '20+', label: 'Awards Won' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-xl ${
                isDark
                  ? 'bg-white/5 border border-[#A6FF00]/20'
                  : 'bg-gray-900/5 border border-gray-900/20'
              } backdrop-blur-xl text-center`}
            >
              <div
                className={`text-3xl md:text-4xl font-bold mb-2 ${
                  isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                }`}
              >
                {stat.number}
              </div>
              <div
                className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
