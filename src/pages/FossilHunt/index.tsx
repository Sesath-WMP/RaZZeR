import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Pickaxe, Brush, Map, Trophy, ChevronDown, Skull } from 'lucide-react';
import './styles.css';
import CartoonButton from './components/CartoonButton';
import ParallaxSection from './components/ParallaxSection';

// Floating dust particles generator
const DustParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="dust-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            animationDuration: `${Math.random() * 4 + 3}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function FossilHunt() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="fossil-hunt-container">
      <DustParticles />

      {/* Navigation Bar (Thematic) */}
      <nav className="fixed top-0 w-full z-50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center cartoon-panel py-3 px-6 !border-4 !rounded-xl">
          <div className="flex items-center gap-2">
            <Skull size={32} className="text-white drop-shadow-md" />
            <span className="text-2xl font-bold text-3d title-font">Fossil Hunt AR</span>
          </div>
          <CartoonButton variant="brown" className="!text-sm !py-2 !px-4">
            Play Now
          </CartoonButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a100a] z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeUpVariant}
          >
            <h1 className="text-6xl md:text-8xl title-font text-3d mb-6 leading-tight">
              Bring Dinosaurs <br/> Back to Life!
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-[#f4dcb9] drop-shadow-lg max-w-3xl mx-auto font-bold">
              An immersive Augmented Reality educational museum game. Transform passive learning into an active, treasure-map style discovery adventure!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <CartoonButton variant="green" className="!px-10 !py-4 !text-2xl">
                Start Exploring
              </CartoonButton>
              <CartoonButton variant="yellow" className="!px-10 !py-4 !text-2xl">
                Watch Trailer
              </CartoonButton>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-80"
        >
          <ChevronDown size={48} className="drop-shadow-lg" />
        </motion.div>
      </section>

      {/* Feature Section 1: The AR Gameplay System */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <ParallaxSection className="w-full lg:w-1/2" speed={0.2}>
              <div className="cartoon-panel p-4 aspect-[9/16] md:aspect-video lg:aspect-[4/5] flex items-center justify-center relative ar-ring mx-auto max-w-sm lg:max-w-none">
                {/* Placeholder for Screenshot 2 (AR Glowing Dirt) */}
                <div className="text-center p-6">
                  <Map size={64} className="mx-auto mb-4 text-[#0ff] cyan-glow" />
                  <p className="text-2xl title-font text-white drop-shadow-md">
                    [Insert Glowing Excavation Screenshot Here]
                  </p>
                </div>
              </div>
            </ParallaxSection>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-5xl title-font text-3d mb-6">Excavate & Discover</h2>
              <p className="text-xl mb-6 text-[#f4dcb9] leading-relaxed font-semibold drop-shadow-sm">
                Follow the AR markers to locate hidden fossils. Use your virtual shovel to uncover the bones, and carefully brush away the ancient dust to reveal the treasure beneath!
              </p>
              <ul className="space-y-4 text-lg font-bold text-white drop-shadow-md">
                <li className="flex items-center gap-3">
                  <div className="bg-[#5c3a21] p-2 rounded-lg border-2 border-[#3d2314]">
                    <Map className="text-[#ffb822]" size={24} />
                  </div>
                  Treasure-map style discovery
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-[#5c3a21] p-2 rounded-lg border-2 border-[#3d2314]">
                    <Pickaxe className="text-[#ffb822]" size={24} />
                  </div>
                  Interactive excavation mechanics
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Quiz & Education */}
      <section className="py-24 px-4 relative z-10 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <ParallaxSection className="w-full lg:w-1/2" speed={0.2}>
              <div className="cartoon-panel p-4 aspect-[9/16] md:aspect-video lg:aspect-[4/5] flex items-center justify-center mx-auto max-w-sm lg:max-w-none transform rotate-3">
                {/* Placeholder for Screenshot 3 (Quiz UI) */}
                <div className="text-center p-6">
                  <Trophy size={64} className="mx-auto mb-4 text-[#ffb822] drop-shadow-[0_0_15px_rgba(255,184,34,0.6)]" />
                  <p className="text-2xl title-font text-white drop-shadow-md">
                    [Insert Quiz UI Screenshot Here]
                  </p>
                </div>
              </div>
            </ParallaxSection>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-5xl title-font text-3d mb-6">Learn as you Play</h2>
              <p className="text-xl mb-6 text-[#f4dcb9] leading-relaxed font-semibold drop-shadow-sm">
                Fossil Hunt AR isn't just about digging—it's about learning! Answer challenging questions about Sri Lankan paleontology and general dinosaur facts to collect all the pieces.
              </p>
              <CartoonButton variant="brown" className="!px-8 !py-3">
                Try a Demo Quiz
              </CartoonButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Reconstruction & AR Viewer */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mb-16"
          >
            <h2 className="text-5xl title-font text-3d mb-6">Skeleton Reconstruction</h2>
            <p className="text-xl text-[#f4dcb9] max-w-3xl mx-auto font-semibold drop-shadow-sm">
              Once you've collected all the pieces, bring the dinosaur into your living room! Walk around the fully reconstructed 3D skeleton in Augmented Reality.
            </p>
          </motion.div>

          <ParallaxSection speed={0.1}>
            <div className="cartoon-panel w-full max-w-4xl mx-auto aspect-video flex items-center justify-center cyan-box-shadow">
                {/* Placeholder for Screenshot 4 (T-Rex in Room) */}
                <div className="text-center p-6">
                  <Skull size={80} className="mx-auto mb-4 text-[#0ff] cyan-glow" />
                  <p className="text-3xl title-font text-white drop-shadow-md">
                    [Insert T-Rex AR Screenshot Here]
                  </p>
                </div>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Footer / Research Banner */}
      <footer className="bg-[#1a100a] py-12 px-4 border-t-4 border-[#3d2314] relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl title-font text-3d mb-4">Research & Commercialization</h3>
          <p className="text-lg text-[#f4dcb9] max-w-2xl mx-auto mb-8 font-semibold">
            Designed for educational deployment in Sri Lankan museums, integrating gamified state-persistent gameplay to revolutionize modern learning.
          </p>
          <p className="text-sm text-[#8b5a2b] font-bold">
            © 2026 Fossil Hunt AR Research Project. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
