import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // 1 is normal, < 1 is slower, > 1 is faster (inverse parallax)
  className?: string;
}

export default function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // A speed of 0.5 means it moves at half the scroll speed.
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
