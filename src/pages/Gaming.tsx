import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Trophy, Target, Zap, Award, Gamepad2, Clock, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function Gaming() {
  const { isDark } = useTheme();

  const achievements = [
    {
      icon: Trophy,
      title: 'Tournament Champion',
      description: 'Won 15+ competitive gaming tournaments',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Precision Master',
      description: 'Top 1% in competitive FPS rankings',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Speed Runner',
      description: 'Multiple world records in speedrunning',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Award,
      title: 'Content Creator',
      description: 'Gaming content with 100K+ followers',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const stats = [
    { label: 'Games Played', value: '250+' },
    { label: 'Hours Streamed', value: '2000+' },
    { label: 'Tournament Wins', value: '15' },
    { label: 'Peak Rank', value: 'Top 100' },
  ];

  const steamGames = [
    {
      id: 271590,
      name: "Grand Theft Auto V Legacy",
      playtime: "397.5 hrs",
      recentPlaytime: "6 min",
      achievements: { total: 77, unlocked: 40 },
      cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
      subtext: ""
    },
    {
      id: 1172620,
      name: "Sea of Thieves",
      playtime: "211.1 hrs",
      recentPlaytime: "37 min",
      achievements: { total: 254, unlocked: 120 },
      cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg",
      subtext: "From your library and the library of Skyplacer"
    },
    {
      id: 1517290,
      name: "Battlefield™ 6",
      playtime: "83.1 hrs",
      recentPlaytime: "25 min",
      achievements: { total: 43, unlocked: 25 },
      cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg",
      subtext: ""
    },
    {
      id: 859580,
      name: "Secret Neighbor",
      playtime: "35.2 hrs",
      recentPlaytime: "0 min",
      achievements: { total: 15, unlocked: 15 },
      cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/859580/header.jpg",
      subtext: "3 copies in your Steam Family library"
    },
    {
      id: 1326470,
      name: "Sons Of The Forest",
      playtime: "7.4 hrs",
      recentPlaytime: "0 min",
      achievements: { total: 28, unlocked: 10 },
      cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg",
      subtext: "2 copies in your Steam Family library"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <Gamepad2
              size={64}
              className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
            />
            <h1
              className={`text-5xl md:text-7xl font-bold ${
                isDark ? 'text-[#A6FF00]' : 'text-gray-900'
              }`}
            >
              RaZZeR_X10
            </h1>
          </div>
          <div
            className={`h-1 w-32 rounded-full mb-6 ${
              isDark ? 'bg-[#A6FF00]' : 'bg-gray-900'
            } shadow-[0_0_10px_rgba(166,255,0,0.5)]`}
          />
          <p
            className={`text-xl mb-12 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Professional gamer, content creator, and competitive esports athlete
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative rounded-2xl overflow-hidden ${
                isDark
                  ? 'border border-[#A6FF00]/20'
                  : 'border border-gray-900/20'
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-20`}
              />
              <div
                className={`relative p-8 ${
                  isDark ? 'bg-white/5' : 'bg-gray-900/5'
                } backdrop-blur-xl`}
              >
                <div
                  className={`inline-flex p-4 rounded-xl ${
                    isDark ? 'bg-[#A6FF00]/10' : 'bg-gray-900/10'
                  } mb-4`}
                >
                  <achievement.icon
                    size={32}
                    className={isDark ? 'text-[#A6FF00]' : 'text-gray-900'}
                  />
                </div>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {achievement.title}
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2
            className={`text-3xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Gaming Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`p-6 rounded-xl ${
                  isDark
                    ? 'bg-white/5 border border-[#A6FF00]/20'
                    : 'bg-gray-900/5 border border-gray-900/20'
                } backdrop-blur-xl text-center`}
              >
                <div
                  className={`text-4xl font-bold mb-2 ${
                    isDark ? 'text-[#A6FF00]' : 'text-gray-900'
                  }`}
                >
                  {stat.value}
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-16 relative"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${isDark ? 'bg-blue-500/10' : 'bg-blue-500/10'} border border-blue-500/30`}>
                <Activity size={24} className="text-blue-500" />
              </div>
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Steam Integration
              </h2>
            </div>
            
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Online</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steamGames.map((game, index) => {
              const achievementPercentage = Math.round((game.achievements.unlocked / game.achievements.total) * 100);
              return (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                    isDark ? 'bg-black border border-white/10' : 'bg-white border border-gray-200'
                  } shadow-xl`}
                >
                  {/* Game Cover Background */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={game.cover} 
                      alt={game.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg z-10">
                      {game.name}
                    </h3>
                  </div>

                  {/* Stats Content */}
                  <div className={`p-5 ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    
                    {/* Playtime */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <span className={`text-xs uppercase tracking-wider mb-1 font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Total Playtime</span>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className={isDark ? 'text-[#A6FF00]' : 'text-blue-500'} />
                          <span className={`text-lg font-bold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{game.playtime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <span className={`text-xs uppercase tracking-wider mb-1 font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Past 2 Weeks</span>
                        <span className={`text-md font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{game.recentPlaytime}</span>
                      </div>
                    </div>

                    {/* Subtext for Library/Family */}
                    {game.subtext && (
                      <div className={`text-xs font-semibold mb-4 ${isDark ? 'text-[#A6FF00]/80' : 'text-blue-600'} bg-black/20 p-2 rounded-lg inline-block`}>
                        {game.subtext}
                      </div>
                    )}

                    {/* Achievements */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-yellow-500" />
                          <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Achievements</span>
                        </div>
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{game.achievements.unlocked} / {game.achievements.total}</span>
                      </div>
                      
                      <div className={`h-2.5 w-full rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${achievementPercentage}%` }}
                          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                          className={`h-full rounded-full relative overflow-hidden ${
                            achievementPercentage === 100 
                              ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' 
                              : isDark ? 'bg-gradient-to-r from-[#A6FF00] to-green-500' : 'bg-gradient-to-r from-blue-400 to-blue-600'
                          }`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] translate-x-[-100%] skew-x-[-15deg]" />
                        </motion.div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
