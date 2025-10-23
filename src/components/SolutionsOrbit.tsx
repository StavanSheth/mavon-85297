import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Package, Zap, Lock, TrendingUp, BarChart, Rocket } from 'lucide-react';
import { useState } from 'react';

interface SolutionsOrbitProps {
  liteMode: boolean;
}

const SolutionsOrbit = ({ liteMode }: SolutionsOrbitProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const orbitLayers = [
    {
      name: 'Enterprise',
      radius: 100,
      duration: 20,
      direction: 1, // clockwise
      items: [
        { icon: Package, emoji: '🏢', label: 'ERP', description: 'Custom ERP Systems for seamless operations' },
        { icon: BarChart, emoji: '📊', label: 'BI', description: 'Business Intelligence & Analytics' },
        { icon: Zap, emoji: '🔁', label: 'Process', description: 'Automated Process Management' },
      ],
      color: 'from-amber-400 to-orange-500',
    },
    {
      name: 'Security',
      radius: 160,
      duration: 25,
      direction: -1, // counter-clockwise
      items: [
        { icon: Lock, emoji: '🔒', label: 'Encryption', description: 'End-to-end data encryption' },
        { icon: Shield, emoji: '🛡️', label: 'Compliance', description: 'Regulatory compliance management' },
        { icon: Shield, emoji: '🧾', label: 'Audits', description: 'Security audit & monitoring' },
      ],
      color: 'from-emerald-400 to-teal-500',
    },
    {
      name: 'Growth',
      radius: 220,
      duration: 30,
      direction: 1,
      items: [
        { icon: TrendingUp, emoji: '📈', label: 'Analytics', description: 'Growth analytics dashboard' },
        { icon: Rocket, emoji: '⚡', label: 'Performance', description: 'Performance optimization tools' },
        { icon: TrendingUp, emoji: '🌱', label: 'Strategy', description: 'Business growth strategy' },
      ],
      color: 'from-violet-400 to-purple-500',
    },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-square">
      {/* Central Shield Icon */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-leaf-green via-forest-deep to-golden-glow
                     flex items-center justify-center shadow-[0_0_50px_rgba(108,161,111,0.5)]
                     border-4 border-white/20"
          animate={
            !liteMode && !shouldReduceMotion
              ? {
                  boxShadow: [
                    '0 0 50px rgba(108,161,111,0.5)',
                    '0 0 70px rgba(255,211,105,0.6)',
                    '0 0 50px rgba(108,161,111,0.5)',
                  ],
                }
              : {}
          }
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Shield className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={2.5} />
          
          {/* Network pattern overlay */}
          {!liteMode && (
            <div className="absolute inset-0 rounded-full opacity-30">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <circle cx="50" cy="50" r="48" fill="url(#grid)" />
              </svg>
            </div>
          )}
        </motion.div>

        {/* Label */}
        <motion.div
          className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm md:text-base font-bold text-golden-glow">
            Solutions
          </div>
        </motion.div>
      </motion.div>

      {/* Multi-Orbit Layers */}
      {!shouldReduceMotion && orbitLayers.map((layer, layerIndex) => (
        <div key={layerIndex}>
          {layer.items.map((item, itemIndex) => {
            const Icon = item.icon;
            const angle = (itemIndex * (360 / layer.items.length)) * (Math.PI / 180);
            const globalIndex = layerIndex * 10 + itemIndex;
            
            return (
              <motion.div
                key={globalIndex}
                className="absolute left-1/2 top-1/2"
                style={{
                  marginLeft: `-${layer.radius}px`,
                  marginTop: `-${layer.radius}px`,
                }}
                animate={
                  !liteMode
                    ? {
                        rotate: layer.direction * 360,
                      }
                    : {}
                }
                transition={{
                  duration: layer.duration,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <motion.div
                  className="absolute cursor-pointer"
                  style={{
                    left: layer.radius + Math.cos(angle) * layer.radius,
                    top: layer.radius + Math.sin(angle) * layer.radius,
                  }}
                  animate={
                    !liteMode
                      ? {
                          rotate: -layer.direction * 360,
                        }
                      : {}
                  }
                  transition={{
                    duration: layer.duration,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredSolution(globalIndex)}
                  onHoverEnd={() => setHoveredSolution(null)}
                  onClick={() => setFlippedCard(flippedCard === globalIndex ? null : globalIndex)}
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Flip Card */}
                  <motion.div
                    className="relative w-16 h-16 md:w-20 md:h-20"
                    animate={
                      flippedCard === globalIndex
                        ? { rotateY: 180 }
                        : { rotateY: 0 }
                    }
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Face */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${layer.color}
                                 flex items-center justify-center shadow-lg backdrop-blur-sm
                                 border-2 border-white/30`}
                      style={{ backfaceVisibility: 'hidden' }}
                      animate={
                        hoveredSolution === globalIndex && !liteMode
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
                      <span className="text-2xl md:text-3xl">{item.emoji}</span>
                    </motion.div>

                    {/* Back Face with description */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-forest-deep/95 backdrop-blur-md
                                 flex items-center justify-center shadow-lg border-2 border-golden-glow/50
                                 p-2"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <p className="text-[8px] md:text-xs text-center text-golden-glow font-medium leading-tight">
                        {item.label}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredSolution === globalIndex ? 1 : 0.7 }}
                  >
                    <div className="text-[10px] md:text-xs font-semibold text-golden-glow">
                      {item.label}
                    </div>
                  </motion.div>

                  {/* Tooltip */}
                  {hoveredSolution === globalIndex && (
                    <motion.div
                      className="absolute top-full mt-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-3 py-2 rounded-lg glass-card text-xs text-foreground/90 
                                     border border-golden-glow/30 max-w-[180px] text-center">
                        {item.description}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Orbit ring */}
          {!liteMode && (
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                         rounded-full border border-leaf-green/10"
              style={{
                width: layer.radius * 2,
                height: layer.radius * 2,
              }}
            />
          )}
        </div>
      ))}

      {/* Hint text */}
      {!liteMode && (
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-muted-foreground">
            Click to flip • Hover to see details
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SolutionsOrbit;
