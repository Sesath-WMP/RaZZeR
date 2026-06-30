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
    <div className="mt-24 pb-24 px-4 flex flex-col justify-center border-t-2 border-brand/20 pt-20 relative overflow-hidden">
      {/* Background glitch grids/lines for texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-20 md:flex-row justify-between items-end gap-6"
        >
          <div>
            <div className={`mb-4 font-mono tracking-[0.3em] text-xs uppercase ${isDark ? 'text-brand' : 'text-gray-900'} font-bold`}>
              // System.Pricing
            </div>
            <h1 className={`text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Select<br />Your <span className="text-brand">Protocol</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className={`h-2 w-32 ${isDark ? 'bg-brand' : 'bg-gray-900'}`} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              whileHover={{ y: -8, x: -8 }}
              className={`relative p-8 md:p-10 flex flex-col h-full border-2 transition-all duration-300 ${
                isDark 
                  ? 'bg-black border-white/20 hover:border-brand hover:shadow-neo' 
                  : 'bg-white border-gray-900 hover:shadow-neo-dark'
              } ${pkg.popular ? (isDark ? 'border-brand' : 'border-gray-900 border-4') : ''}`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)'
              }}
            >
              {pkg.popular && (
                <div className={`absolute top-0 right-0 ${isDark ? 'bg-brand text-black' : 'bg-gray-900 text-white'} px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2`}>
                  <Star size={12} fill="currentColor" /> POPULAR
                </div>
              )}
              
              <div className="mb-12">
                <div className={`font-mono text-xs mb-2 tracking-widest uppercase ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  PKG_{index + 1}.0
                </div>
                <h3 className={`text-3xl font-display font-black tracking-tight mb-6 uppercase ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                
                <div className="flex items-start gap-2">
                  <span className={`text-sm font-mono mt-2 font-bold ${isDark ? 'text-brand' : 'text-gray-900'}`}>LKR</span>
                  <span className={`text-6xl font-display font-black tracking-tighter ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.price}
                  </span>
                </div>
              </div>

              <div className="flex-grow">
                <div className={`h-[1px] w-full mb-8 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className={`mt-1 flex-shrink-0 ${isDark ? 'text-brand' : 'text-gray-900'}`}>
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <span className={`font-sans text-lg font-medium leading-tight ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-12 w-full py-5 font-display text-xl font-bold uppercase tracking-wide transition-all duration-300 relative group overflow-hidden ${
                  isDark
                    ? 'bg-white text-black hover:bg-brand'
                    : 'bg-gray-900 text-white hover:bg-black'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Initiate Order
                  <motion.span
                    initial={{ x: 0 }}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  >
                    →
                  </motion.span>
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`flex items-center justify-center gap-4 py-6 border-y ${
            isDark ? 'border-white/10 text-gray-400' : 'border-gray-200 text-gray-600'
          }`}
        >
          <ShieldCheck className={isDark ? 'text-brand' : 'text-gray-900'} size={28} />
          <span className="font-mono text-sm uppercase tracking-widest font-bold">
            100% guarantee & full copyright ownership of final design
          </span>
        </motion.div>
      </div>
    </div>
  );
}
