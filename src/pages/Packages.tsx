import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Check, Star, ShieldCheck } from 'lucide-react';

const packages = [
  {
    name: 'Starter Package',
    price: '100,000',
    features: [
      'Main artwork',
      'Ticket Design',
      '2 size Banner Design',
      'x Banner',
      'Facebook Cover',
      'Fb Event Cover'
    ],
    popular: false
  },
  {
    name: 'Top Selling Package',
    price: '140,000',
    features: [
      'Main artwork',
      'Ticket Design',
      '3 Flyer Design',
      '2 Banner Design',
      'x Banner',
      'Facebook Cover',
      'Fb Event Cover',
      'Count Down (5 day)'
    ],
    popular: true
  },
  {
    name: 'Premium Package',
    price: '180,000',
    features: [
      'Unlimited Post',
      'Unlimited Banner',
      '*For 1 Month',
      '*Conditions applied'
    ],
    popular: false
  }
];

export default function Packages() {
  const { isDark } = useTheme();

  return (
    <div className="mt-24 pb-16 px-4 flex flex-col justify-center border-t border-white/10 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className={`mb-4 font-bold tracking-widest text-sm md:text-base uppercase ${isDark ? 'text-[#A6FF00]' : 'text-gray-900'}`}>
            Events Art Work Packages
          </div>
          <h1 className={`text-4xl md:text-6xl font-black mb-6 text-center uppercase tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Plan
          </h1>
          <div className={`h-1 w-24 rounded-full ${isDark ? 'bg-[#A6FF00] shadow-[0_0_10px_rgba(166,255,0,0.5)]' : 'bg-gray-900'}`} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[2rem] backdrop-blur-xl border ${
                pkg.popular 
                  ? isDark 
                    ? 'bg-[#A6FF00]/10 border-[#A6FF00]/50 shadow-[0_0_30px_rgba(166,255,0,0.2)]' 
                    : 'bg-gray-900/10 border-gray-900/50 shadow-2xl'
                  : isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-black/5 border-black/10'
              } flex flex-col h-full overflow-hidden`}
            >
              {pkg.popular && (
                <div className={`absolute top-0 right-0 ${isDark ? 'bg-[#A6FF00] text-black' : 'bg-gray-900 text-white'} px-4 py-1.5 rounded-bl-xl font-bold text-sm flex items-center gap-1`}>
                  <Star size={14} fill="currentColor" /> POPULAR
                </div>
              )}
              
              <div className="text-center mb-10 pt-4 relative">
                {/* Floating price circle effect from image */}
                <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center rounded-full w-24 h-24 ${
                  isDark ? 'bg-black border-2 border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.5)]' : 'bg-white border-2 border-gray-200 shadow-lg'
                }`}>
                  <span className={`text-xs font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>LKR</span>
                  <span className={`text-lg font-black tracking-tighter ${isDark ? 'text-[#A6FF00]' : 'text-gray-900'}`}>
                    {pkg.price}
                  </span>
                </div>
                
                <div className="mt-12">
                  <h3 className={`text-3xl font-black tracking-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name.split(' ')[0]} {pkg.name.split(' ')[1] && pkg.name.split(' ')[1] !== 'Package' ? pkg.name.split(' ')[1] : ''}
                  </h3>
                  <div className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Package
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1 p-1 rounded-full flex-shrink-0 ${isDark ? 'bg-[#A6FF00]/20 text-[#A6FF00]' : 'bg-gray-900/20 text-gray-900'}`}>
                        <Check size={14} />
                      </div>
                      <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-10 w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  isDark
                    ? 'bg-[#A6FF00] text-black hover:bg-[#A6FF00]/90 shadow-[0_0_20px_rgba(166,255,0,0.3)] hover:shadow-[0_0_30px_rgba(166,255,0,0.5)]'
                    : 'bg-gray-900 text-white hover:bg-gray-800 shadow-xl hover:shadow-2xl'
                }`}
              >
                ORDER NOW
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`flex items-center justify-center gap-3 text-center text-xs md:text-sm font-bold tracking-widest uppercase ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          <ShieldCheck className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'} size={24} />
          All packages with a 100% guarantee and full copyright ownership of final design
        </motion.div>
      </div>
    </div>
  );
}
