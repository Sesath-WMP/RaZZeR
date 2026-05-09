import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Gaming from './pages/Gaming';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import PPWPortfolio from './pages/PPWPortfolio';
import FossilHunt from './pages/FossilHunt';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -40, scale: 1.02, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

function AppContent() {
  const { isDark } = useTheme();
  const location = useLocation();
  const isFossilHunt = location.pathname === '/fossil-hunt';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isFossilHunt 
          ? 'bg-[#2a1b12] text-[#f4dcb9]' 
          : isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
      }`}
    >
      {!isFossilHunt && <ParticleBackground />}
      {!isFossilHunt && <Navigation />}
      <div className={isFossilHunt ? '' : 'relative z-10'}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/gaming" element={<PageWrapper><Gaming /></PageWrapper>} />
            <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
            <Route path="/ppw-portfolio" element={<PageWrapper><PPWPortfolio /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/fossil-hunt" element={<PageWrapper><FossilHunt /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
