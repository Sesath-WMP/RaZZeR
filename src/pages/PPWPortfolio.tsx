import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  MessageSquare, Users, Briefcase, FileText, Clock, MonitorPlay, 
  Gamepad2, Lightbulb, Code2, Download, Linkedin, Github, 
  Dribbble, X, ExternalLink, File, ChevronRight, Award, BookOpen
} from 'lucide-react';
import { useState } from 'react';
import profileImg from '../img/profile/profile.png';

// Load certificates
const certModules = import.meta.glob('../img/certificates/*.{png,jpg,jpeg,pdf}', { eager: true, import: 'default' });
const certificates = Object.entries(certModules).map(([path, url]) => {
  const filename = path.split('/').pop() || 'Certificate';
  const title = filename.replace(/\.[^/.]+$/, "");
  const isPdf = filename.toLowerCase().endsWith('.pdf');
  return { title, url: url as string, isPdf };
});

export default function PPWPortfolio() {
  const { isDark } = useTheme();
  const [selectedCert, setSelectedCert] = useState<{title: string, url: string, isPdf: boolean} | null>(null);

  // Print-safe container class
  const printSafeClass = "print-avoid-break";

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className={`absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-[#A6FF00]' : 'bg-gray-300'}`} />
        <div className={`absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 ${isDark ? 'bg-[#A6FF00]' : 'bg-gray-400'}`} />
      </div>

      <div className="max-w-7xl mx-auto space-y-32 print:space-y-12">
        
        {/* HERO SECTION */}
        <section className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${printSafeClass}`}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${isDark ? 'border-[#A6FF00]/30 bg-[#A6FF00]/10 text-[#A6FF00]' : 'border-gray-900/30 bg-gray-900/10 text-gray-900'} backdrop-blur-md`}>
              <Award size={16} />
              <span className="text-sm font-medium tracking-wider uppercase">Professional Practice Portfolio</span>
            </div>
            
            <h1 className={`text-6xl md:text-7xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Sesath<br/>Wickramasinghe
            </h1>
            
            <div className="flex flex-wrap gap-3">
              {['Senior Graphic Designer', 'Game Concept Artist', 'Interactive Media Undergraduate', 'UI/UX Designer', 'Creative Technologist'].map(tag => (
                <span key={tag} className={`px-4 py-1.5 text-sm rounded-md border ${isDark ? 'border-[#A6FF00]/20 bg-black/40 text-gray-300' : 'border-gray-300 bg-white/60 text-gray-700'} backdrop-blur-sm`}>
                  {tag}
                </span>
              ))}
            </div>

            <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I am an Interactive Media undergraduate passionate about immersive digital experiences, game development, UI/UX systems, and creative technology. My work combines technical development with artistic design to create engaging and meaningful interactive experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex-1 flex justify-center relative"
          >
            {/* Holographic Frame */}
            <div className={`relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full p-2 ${isDark ? 'bg-gradient-to-tr from-[#A6FF00]/40 to-transparent' : 'bg-gradient-to-tr from-gray-400 to-transparent'}`}>
              <div className={`absolute inset-0 rounded-full border border-dashed animate-[spin_20s_linear_infinite] ${isDark ? 'border-[#A6FF00]/50' : 'border-gray-400'}`} />
              <div className={`absolute inset-[-20px] rounded-full border border-dotted animate-[spin_30s_linear_infinite_reverse] opacity-50 ${isDark ? 'border-[#A6FF00]' : 'border-gray-600'}`} />
              
              <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-black">
                <img src={profileImg} alt="Sesath Wickramasinghe" className="w-full h-full object-cover object-top scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/60 via-transparent' : 'from-black/20 via-transparent'}`} />
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 1 - INTRODUCTION */}
        <section className={`space-y-12 ${printSafeClass}`}>
          <div className="text-center space-y-4">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>About My Journey</h2>
            <div className={`h-1 w-24 mx-auto rounded-full ${isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'}`} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`col-span-2 p-8 rounded-2xl border backdrop-blur-xl ${isDark ? 'border-[#A6FF00]/20 bg-white/5' : 'border-gray-200 bg-white/60 shadow-lg'}`}>
              <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-[#A6FF00]' : 'text-gray-900'}`}>Personal Profile</h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                As a creative technologist, my focus is on bridging the gap between aesthetic design and functional programming. I thrive in environments where I can conceptualize and build interactive systems, whether that's through crafting intuitive UI/UX flows, developing robust game mechanics, or designing compelling digital art. My academic background has equipped me with a strong foundation in professional practice, preparing me for the dynamic challenges of the interactive media industry.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Game Dev", desc: "Unity & Unreal Engine", icon: Gamepad2 },
                { title: "UI/UX", desc: "Figma & Adobe XD", icon: MonitorPlay },
                { title: "Programming", desc: "C#, React, TypeScript", icon: Code2 }
              ].map((stat, i) => (
                <div key={i} className={`flex items-center p-4 rounded-xl border backdrop-blur-md ${isDark ? 'border-[#A6FF00]/20 bg-white/5 hover:border-[#A6FF00]/50' : 'border-gray-200 bg-white/60'} transition-all`}>
                  <div className={`p-3 rounded-lg mr-4 ${isDark ? 'bg-[#A6FF00]/10 text-[#A6FF00]' : 'bg-gray-100 text-gray-900'}`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.title}</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 - REFLECTIVE JOURNAL */}
        <section className={`space-y-12 ${printSafeClass}`}>
          <div className="text-center space-y-4">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Reflective Journal</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Key takeaways and professional skills developed during the PPW module.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: "Communication Skills", text: "Learned to articulate technical concepts to non-technical stakeholders clearly and effectively." },
              { icon: Users, title: "Presentation Skills", text: "Enhanced my ability to present projects confidently, using visual aids to support complex ideas." },
              { icon: Briefcase, title: "Professional Etiquette", text: "Developed an understanding of workplace norms, ethics, and professional correspondence." },
              { icon: Users, title: "Team Collaboration", text: "Practiced Agile methodologies and collaborative problem-solving in multidisciplinary teams." },
              { icon: FileText, title: "Report Writing", text: "Mastered the structure and tone required for professional technical documentation and reports." },
              { icon: Clock, title: "Time Management", text: "Implemented prioritization techniques to balance multiple project deadlines efficiently." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, boxShadow: isDark ? '0 10px 30px -10px rgba(166,255,0,0.2)' : '0 10px 30px -10px rgba(0,0,0,0.1)' }}
                className={`p-6 rounded-2xl border backdrop-blur-xl ${isDark ? 'border-[#A6FF00]/20 bg-white/5' : 'border-gray-200 bg-white/60 shadow-sm'} flex flex-col relative overflow-hidden group`}
              >
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${isDark ? 'text-[#A6FF00]' : 'text-gray-900'}`}>
                  <item.icon size={80} />
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isDark ? 'bg-[#A6FF00]/10 text-[#A6FF00]' : 'bg-gray-100 text-gray-900'}`}>
                  <item.icon size={24} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3 - CAREER DEVELOPMENT PLAN */}
        <section className={`space-y-16 ${printSafeClass}`}>
          <div className="text-center space-y-4">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Career Development Plan</h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -ml-px ${isDark ? 'bg-gradient-to-b from-[#A6FF00] via-[#A6FF00]/50 to-transparent' : 'bg-gray-300'}`} />
            
            {[
              { year: "2026", title: "Short Term: Junior Developer / Intern", desc: "Secure an internship in a game studio or creative agency to gain hands-on industry experience and refine technical skills." },
              { year: "2027", title: "Mid Term: Professional Game Developer", desc: "Transition into a full-time role as a Game Developer or UI/UX Designer, contributing to shipped commercial titles." },
              { year: "2028", title: "Long Term: Independent Studio", desc: "Establish an independent interactive studio focused on creating innovative, meaningful digital experiences and games." }
            ].map((milestone, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 mt-1.5 md:mt-0 ${isDark ? 'bg-[#A6FF00] shadow-[0_0_15px_#A6FF00]' : 'bg-gray-900 border-4 border-white'}`} />
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${isDark ? 'bg-[#A6FF00]/20 text-[#A6FF00]' : 'bg-gray-200 text-gray-800'}`}>{milestone.year}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{milestone.title}</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Plan */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {[
              { title: "Learning Goals", icon: Lightbulb, items: ["Master Unreal Engine Blueprints & C++", "Deepen understanding of Advanced UI patterns", "Study rendering optimization techniques"] },
              { title: "Career Growth", icon: Briefcase, items: ["Attend major industry networking events", "Find an industry mentor for guidance", "Contribute to open-source game tools"] },
              { title: "Portfolio Goals", icon: MonitorPlay, items: ["Publish two polished indie prototypes", "Create a comprehensive UI design system", "Participate in regular game jams"] }
            ].map((col, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${isDark ? 'border-[#A6FF00]/20 bg-white/5' : 'border-gray-200 bg-white/60'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isDark ? 'bg-[#A6FF00]/10 text-[#A6FF00]' : 'bg-gray-100 text-gray-900'}`}>
                  <col.icon size={24} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <ChevronRight size={18} className={`mr-2 mt-0.5 shrink-0 ${isDark ? 'text-[#A6FF00]' : 'text-gray-500'}`} />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 - CV SECTION */}
        <section className={`space-y-12 ${printSafeClass}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Curriculum Vitae</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-10">
              <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-[#A6FF00]/10 text-[#A6FF00]' : 'bg-gray-100 text-gray-900'}`}><BookOpen size={20} /></div> Education
                </h3>
                <div className="space-y-6">
                  <div className={`pl-6 border-l-2 ${isDark ? 'border-[#A6FF00]/30' : 'border-gray-300'}`}>
                    <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>BSc (Hons) in Interactive Media</h4>
                    <p className={`text-sm mb-2 ${isDark ? 'text-[#A6FF00]' : 'text-gray-600 font-medium'}`}>Sri Lanka Institute of Information Technology (2022 - Present)</p>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Focus on game development, UI/UX design, 3D modeling, and interactive storytelling.</p>
                  </div>
                  <div className={`pl-6 border-l-2 ${isDark ? 'border-[#A6FF00]/30' : 'border-gray-300'}`}>
                    <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>GCE Advanced Level</h4>
                    <p className={`text-sm mb-2 ${isDark ? 'text-[#A6FF00]' : 'text-gray-600 font-medium'}`}>Bandaranayake College Gampaha (2018 - 2020)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-[#A6FF00]/10 text-[#A6FF00]' : 'bg-gray-100 text-gray-900'}`}><Code2 size={20} /></div> Software Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Unity 3D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg' },
                    { name: 'Unreal Engine', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg' },
                    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
                    { name: 'Adobe Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
                    { name: 'Adobe Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' },
                    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                    { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg' }
                  ].map(skill => (
                    <span key={skill.name} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border ${isDark ? 'border-[#A6FF00]/20 bg-white/5 text-gray-300' : 'border-gray-200 bg-white text-gray-700'}`}>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className={`w-5 h-5 ${(skill.name === 'Unity 3D' || skill.name === 'Unreal Engine') && isDark ? 'invert opacity-90' : ''}`} 
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-[#A6FF00]/10 text-[#A6FF00]' : 'bg-gray-100 text-gray-900'}`}><Briefcase size={20} /></div> Experience
                </h3>
                <div className="space-y-6">
                  <div className={`pl-6 border-l-2 ${isDark ? 'border-[#A6FF00]/30' : 'border-gray-300'}`}>
                    <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Freelance UI/UX Designer</h4>
                    <p className={`text-sm mb-2 ${isDark ? 'text-[#A6FF00]' : 'text-gray-600 font-medium'}`}>Self-Employed (2023 - Present)</p>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Designed user interfaces for web applications and mobile apps, focusing on user-centered design principles.</p>
                  </div>
                  <div className={`pl-6 border-l-2 ${isDark ? 'border-[#A6FF00]/30' : 'border-gray-300'}`}>
                    <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Senior Graphic Designer & Game Concept Artist</h4>
                    <p className={`text-sm mb-2 ${isDark ? 'text-[#A6FF00]' : 'text-gray-600 font-medium'}`}>Creative Agency / Freelance (2021 - 2022)</p>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Created brand identities, marketing materials, digital assets, and early game concept art.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-[#A6FF00]/10 text-[#A6FF00]' : 'bg-gray-100 text-gray-900'}`}><Users size={20} /></div> Contact
                </h3>
                <div className={`p-6 rounded-2xl border ${isDark ? 'border-[#A6FF00]/20 bg-white/5' : 'border-gray-200 bg-gray-50'} space-y-4`}>
                  <div className="flex gap-4">
                    <a href="#" className={`p-3 rounded-xl transition-colors ${isDark ? 'bg-black border border-gray-800 hover:border-[#A6FF00] text-gray-300 hover:text-[#A6FF00]' : 'bg-white border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900'}`}><Linkedin size={20} /></a>
                    <a href="#" className={`p-3 rounded-xl transition-colors ${isDark ? 'bg-black border border-gray-800 hover:border-[#A6FF00] text-gray-300 hover:text-[#A6FF00]' : 'bg-white border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900'}`}><Github size={20} /></a>
                    <a href="#" className={`p-3 rounded-xl transition-colors ${isDark ? 'bg-black border border-gray-800 hover:border-[#A6FF00] text-gray-300 hover:text-[#A6FF00]' : 'bg-white border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900'}`}><Dribbble size={20} /></a>
                  </div>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>sesath.work@gmail.com</p>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>+94 7X XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - CERTIFICATES */}
        <section className={`space-y-12 ${printSafeClass}`}>
          <div className="text-center space-y-4">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Evidence of Skill Development</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Professional certifications and course completions.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCert(cert)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border ${isDark ? 'border-[#A6FF00]/20 bg-white/5' : 'border-gray-200 bg-white/60'} backdrop-blur-md relative h-64 flex flex-col`}
              >
                {cert.isPdf ? (
                  <div className="flex-1 relative overflow-hidden bg-white">
                    <div className="absolute inset-0 pointer-events-none">
                      <iframe 
                        src={`${cert.url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                        className="w-[140%] h-[140%] -mt-[20%] -ml-[20%] scale-[0.7] origin-center border-none" 
                        title={cert.title}
                        scrolling="no"
                      />
                    </div>
                    <div className={`absolute inset-0 ${isDark ? 'bg-black/20 group-hover:bg-transparent' : 'bg-black/5 group-hover:bg-transparent'} transition-colors`} />
                  </div>
                ) : (
                  <div className="flex-1 relative overflow-hidden">
                    <img src={cert.url} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                )}
                <div className={`p-4 border-t ${isDark ? 'border-[#A6FF00]/20 bg-black/60' : 'border-gray-100 bg-white'}`}>
                  <h3 className={`font-semibold truncate ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{cert.title}</h3>
                </div>
                
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 ${isDark ? 'bg-[#A6FF00] text-black' : 'bg-gray-900 text-white'}`}>
                  <ExternalLink size={18} />
                </div>
              </motion.div>
            ))}
            
            {certificates.length === 0 && (
              <div className={`col-span-full py-12 text-center rounded-2xl border border-dashed ${isDark ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-400'}`}>
                No certificates found in src/img/certificates
              </div>
            )}
          </div>
        </section>

        {/* SECTION 6 - FINAL REFLECTION */}
        <section className={`relative py-16 px-8 md:px-16 rounded-3xl overflow-hidden border ${isDark ? 'border-[#A6FF00]/30 bg-[#A6FF00]/5' : 'border-gray-200 bg-gray-50'} ${printSafeClass}`}>
          <div className={`absolute inset-0 opacity-20 ${isDark ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A6FF00]/40 via-transparent to-transparent' : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 via-transparent to-transparent'}`} />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Looking Forward</h2>
            <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              This professional practice journey has significantly matured my approach to creative development. I feel far more prepared to integrate into professional workflows, collaborate effectively within cross-functional teams, and communicate my creative vision clearly. As I move toward graduation, my focus remains on pushing the boundaries of interactive media while maintaining the rigorous professional standards I have developed.
            </p>
          </div>
        </section>

      </div>

      {/* MODAL FOR CERTIFICATES */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm print:hidden"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-5xl max-h-full rounded-2xl overflow-hidden shadow-2xl flex flex-col ${isDark ? 'bg-gray-900 border border-[#A6FF00]/30' : 'bg-white border border-gray-200'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`p-4 flex justify-between items-center border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <h3 className={`font-semibold text-lg truncate pr-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedCert.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'}`}
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 overflow-auto flex-1 flex justify-center items-center bg-black/5 dark:bg-black/40 min-h-[50vh]">
                {selectedCert.isPdf ? (
                  <iframe 
                    src={selectedCert.url} 
                    className="w-full h-[70vh] rounded-lg shadow-inner bg-white" 
                    title={selectedCert.title}
                  />
                ) : (
                  <img 
                    src={selectedCert.url} 
                    alt={selectedCert.title} 
                    className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg" 
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
