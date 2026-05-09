import { motion } from 'framer-motion';
import React from 'react';

interface CartoonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'green' | 'yellow' | 'brown';
}

export default function CartoonButton({ children, onClick, className = '', variant = 'green' }: CartoonButtonProps) {
  const baseColors = {
    green: 'bg-gradient-to-b from-[#6cb041] to-[#3a7c1b] border-[#224b0f]',
    yellow: 'bg-gradient-to-b from-[#ffb822] to-[#c27c00] border-[#7a4800]',
    brown: 'bg-gradient-to-b from-[#8b5a2b] to-[#5c3a21] border-[#3d2314]',
  };

  const textColors = {
    green: 'text-white',
    yellow: 'text-white',
    brown: 'text-[#fcebd5]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, y: 4, boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-2xl font-bold text-xl uppercase tracking-wider
        shadow-[0_8px_0_rgba(0,0,0,0.5),0_15px_20px_rgba(0,0,0,0.4)]
        border-[4px] transition-all duration-100 ease-in-out
        flex items-center justify-center gap-2
        ${baseColors[variant]} ${textColors[variant]} ${className}
      `}
      style={{
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
      }}
    >
      {/* Glossy overlay */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-white opacity-20 rounded-t-xl pointer-events-none" />
      {children}
    </motion.button>
  );
}
