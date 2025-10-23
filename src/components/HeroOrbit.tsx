import { motion, useReducedMotion } from 'framer-motion';
import { Lightbulb, Brain, Palette } from 'lucide-react';
import OrbitAnimation from './OrbitAnimation';
import mavonLogo from '@/assets/mavon-logo.jpg';
import { useState } from 'react';

interface HeroOrbitProps {
  liteMode: boolean;
}

const HeroOrbit = ({ liteMode }: HeroOrbitProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredOrb, setHoveredOrb] = useState<number | null>(null);

  const orbs = [
    {
      icon: Lightbulb,
      label: 'Innovation',
      color: 'from-amber-400 to-yellow-500',
      shadowColor: 'shadow-amber-500/50',
    },
    {
      icon: Brain,
      label: 'Excellence',
      color: 'from-teal-400 to-cyan-500',
      shadowColor: 'shadow-teal-500/50',
    },
    {
      icon: Palette,
      label: 'Creativity',
      color: 'from-amber-400 to-golden-glow',
      shadowColor: 'shadow-golden-glow/50',
    },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Central Logo Sphere */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full glass-card p-2 shadow-[0_0_40px_rgba(255,211,105,0.3)]"
          animate={
            !liteMode && !shouldReduceMotion
              ? {
                  boxShadow: [
                    '0 0 40px rgba(255,211,105,0.3)',
                    '0 0 60px rgba(255,211,105,0.5)',
                    '0 0 40px rgba(255,211,105,0.3)',
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src={mavonLogo}
            alt="Mavon Logo"
            className="w-full h-full object-cover rounded-full"
          />
          
          {/* Glow ring */}
          {!liteMode && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-golden-glow/20 to-leaf-green/20 animate-spin-slow" 
                 style={{ animationDuration: '20s' }} />
          )}
        </motion.div>
      </motion.div>

      {/* Orbiting Elements */}
      {!liteMode && !shouldReduceMotion && orbs.map((orb, index) => {
        const Icon = orb.icon;
        const radius = 140; // Base radius for laptop
        
        return (
          <OrbitAnimation
            key={index}
            radius={radius}
            duration={15}
            delay={index * 5}
          >
            <motion.div
              className="relative group cursor-pointer"
              onHoverStart={() => setHoveredOrb(index)}
              onHoverEnd={() => setHoveredOrb(null)}
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${orb.color} 
                           flex items-center justify-center shadow-lg ${orb.shadowColor}
                           backdrop-blur-sm border border-white/20`}
                animate={
                  hoveredOrb === index
                    ? {
                        boxShadow: [
                          '0 0 20px currentColor',
                          '0 0 40px currentColor',
                          '0 0 20px currentColor',
                        ],
                      }
                    : {}
                }
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
              </motion.div>

              {/* Tooltip */}
              {hoveredOrb === index && (
                <motion.div
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-3 py-1 rounded-lg glass-card text-sm text-golden-glow font-medium">
                    {orb.label}
                  </div>
                </motion.div>
              )}

              {/* Particle trail */}
              {!liteMode && (
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${orb.color} blur-xl opacity-30`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </motion.div>
          </OrbitAnimation>
        );
      })}

      {/* Orbit ring guide (subtle) */}
      {!liteMode && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[280px] h-[280px] md:w-[360px] md:h-[360px] 
                        rounded-full border border-leaf-green/10 animate-pulse"
             style={{ animationDuration: '4s' }} />
      )}
    </div>
  );
};

export default HeroOrbit;
