import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { X, ZoomIn, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImg from '../img/Logo/RaZZeR Graphics Logo.png';

// Import all artwork images dynamically from subfolders
const imageModules = import.meta.glob('../img/arts/*/*.{png,jpg,jpeg,svg,webp}', { eager: true, import: 'default' });

const categoriesMap: Record<string, { title: string, url: string }[]> = {};
Object.entries(imageModules).forEach(([path, url]) => {
  const parts = path.split('/');
  const categoryName = parts[3]; 
  const filename = parts.pop() || 'Artwork';
  const title = filename.replace(/\.[^/.]+$/, "");

  if (!categoriesMap[categoryName]) {
    categoriesMap[categoryName] = [];
  }
  categoriesMap[categoryName].push({ title, url: url as string });
});

const categories = Object.keys(categoriesMap).map(name => ({
  name,
  artworks: categoriesMap[name]
}));

const AccordionGallery = ({ categories, onSelect, isDark }: { categories: any[], onSelect: (name: string) => void, isDark: boolean }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row h-[80vh] w-full gap-2 md:gap-4 px-2 md:px-0 mt-8 mb-24">
      {categories.map((category, index) => {
        const isHovered = hoveredIndex === index;
        const coverImage = category.artworks[0]?.url;
        const floatingImages = category.artworks.slice(1, 4); // Get next 3 images
        
        // Dynamic name fix for Manipulations
        const displayName = category.name === 'Manipulations' ? 'Photo Manipulations' : category.name;
        const words = displayName.split(' ');

        return (
          <motion.div
            key={category.name}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => onSelect(category.name)}
            animate={{
              flex: isHovered ? 5 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative overflow-hidden rounded-[2rem] cursor-pointer group ${
              isDark ? 'bg-black border border-white/10' : 'bg-gray-200 border border-gray-900/10'
            } transform-gpu`}
          >
            {/* Massive Cover Background (No CSS Filter for better perf) */}
            <motion.img 
              src={coverImage} 
              alt={category.name}
              animate={{ 
                scale: isHovered ? 1.05 : 1.0,
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover transform-gpu"
              loading="lazy"
            />
            
            {/* Perf-Optimized Dark Overlay instead of filter:brightness */}
            <motion.div 
              animate={{ opacity: isHovered ? 0.3 : 0.6 }}
              className="absolute inset-0 bg-black transition-opacity duration-500" 
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

            {/* Floating Artworks (Only visible when hovered) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 hidden md:block pointer-events-none"
                >
                  {floatingImages.map((img: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 100, x: i === 0 ? -50 : i === 1 ? 50 : 0, rotate: i === 0 ? -10 : i === 1 ? 10 : 5 }}
                      animate={{ opacity: 1, y: 0, x: i === 0 ? -80 : i === 1 ? 120 : 20, rotate: i === 0 ? -5 : i === 1 ? 8 : -3 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.05 + i * 0.05 }}
                      className="absolute top-1/4 rounded-xl overflow-hidden border-2 border-white/10 transform-gpu"
                      style={{
                        left: '50%',
                        width: '220px',
                        aspectRatio: '3/4',
                        marginLeft: '-110px', 
                        zIndex: 10 - i,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)' // Reduced shadow blur for perf
                      }}
                    >
                      <img src={img.url} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Title Container */}
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <motion.div
                animate={{
                  rotate: isHovered ? 0 : -90,
                  transformOrigin: 'left bottom',
                  x: isHovered ? 0 : 20,
                  y: isHovered ? 0 : -20
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={isHovered ? "" : "whitespace-nowrap"}
              >
                {/* Break the title into 2 lines if hovered, otherwise keep inline */}
                {words.map((word, idx) => (
                  <span 
                    key={idx} 
                    className={`${isHovered ? 'block text-4xl lg:text-7xl mb-[-5px]' : 'inline-block text-2xl lg:text-3xl mr-3'} font-black uppercase tracking-tighter ${
                      isDark ? 'text-white' : 'text-gray-900'
                    } drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] transition-all duration-300`}
                    style={{ textShadow: isHovered ? '0 0 20px rgba(166,255,0,0.4)' : 'none' }}
                  >
                    {word}
                  </span>
                ))}
                
                {isHovered && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#A6FF00] font-bold tracking-widest uppercase mt-4 drop-shadow-md hidden md:block"
                  >
                    View {category.artworks.length} Artworks
                  </motion.p>
                )}
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default function Gallery() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{title: string, url: string} | null>(null);

  const activeCategory = categories.find(c => c.name === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <img 
              src={logoImg} 
              alt="RaZZeR Graphics Logo" 
              className={`h-24 md:h-32 object-contain ${
                isDark ? 'drop-shadow-[0_0_20px_rgba(166,255,0,0.4)]' : 'drop-shadow-xl'
              }`} 
            />
          </motion.div>

          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 text-center ${
              isDark ? 'text-[#A6FF00]' : 'text-gray-900'
            }`}
          >
            {selectedCategory ? selectedCategory : 'Artwork Categories'}
          </h1>
          <div
            className={`h-1 w-24 rounded-full ${
              isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'
            } shadow-[0_0_10px_rgba(166,255,0,0.5)]`}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div 
              key="categories"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <AccordionGallery 
                categories={categories} 
                onSelect={(name) => setSelectedCategory(name)} 
                isDark={isDark} 
              />
            </motion.div>
          ) : (
            <motion.div 
              key="artworks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`mb-8 flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
                  isDark ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-black/5 hover:bg-black/10 text-gray-900'
                }`}
              >
                <ArrowLeft size={20} /> Back to Categories
              </button>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {activeCategory?.artworks.map((artwork, index) => (
                  <motion.div
                    key={artwork.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index % 10) * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => setSelectedImage(artwork)}
                    className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer ${
                      isDark
                        ? 'border border-[#A6FF00]/20 bg-black/40 shadow-[0_0_15px_rgba(166,255,0,0.1)]'
                        : 'border border-gray-900/20 bg-white/40 shadow-lg'
                    } hover:border-[#A6FF00]/50 hover:shadow-[0_0_25px_rgba(166,255,0,0.3)] transition-all duration-300`}
                  >
                    <img 
                      src={artwork.url} 
                      alt={artwork.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-black/0' : 'bg-white/0'} backdrop-blur-none group-hover:bg-black/60 group-hover:backdrop-blur-sm transition-all duration-300`} />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className={`mb-4 p-4 rounded-full ${
                          isDark ? 'bg-[#A6FF00]/20' : 'bg-white/20'
                        } backdrop-blur-xl`}
                      >
                        <ZoomIn
                          size={32}
                          className={isDark ? 'text-[#A6FF00]' : 'text-white'}
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                        {artwork.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className={`absolute top-4 right-4 md:top-8 md:right-8 p-3 md:p-4 rounded-full ${
                isDark ? 'bg-[#A6FF00]/20' : 'bg-white/20'
              } backdrop-blur-xl border ${
                isDark ? 'border-[#A6FF00]/30' : 'border-white/30'
              } z-[60]`}
            >
              <X
                size={24}
                className={isDark ? 'text-[#A6FF00]' : 'text-white'}
              />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="max-w-7xl w-full h-[90vh] flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              />
              <div className="absolute bottom-[-2rem] md:bottom-4 text-center w-full px-4">
                <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg bg-black/40 inline-block px-6 py-2 rounded-full backdrop-blur-md">
                  {selectedImage.title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
