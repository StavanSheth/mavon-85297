import { motion, useReducedMotion } from 'framer-motion';
import { Monitor, Smartphone, Database, Cog, Palette, TrendingUp, Settings } from 'lucide-react';
import { useState } from 'react';

interface ServicesOrbitProps {
  liteMode: boolean;
  onServiceClick: (serviceId: string) => void;
}

const ServicesOrbit = ({ liteMode, onServiceClick }: ServicesOrbitProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  const services = [
    { icon: Monitor, label: 'Web & Retail', emoji: '🌐', id: 'software-web-retail', color: 'from-orange-400 to-amber-500' },
    { icon: Smartphone, label: 'Mobile & AI', emoji: '📱', id: 'software-mobile-ai', color: 'from-blue-400 to-cyan-500' },
    { icon: Database, label: 'DBMS', emoji: '🧮', id: 'software-dbms', color: 'from-purple-400 to-pink-500' },
    { icon: Cog, label: 'Automation', emoji: '⚙️', id: 'software-automation', color: 'from-teal-400 to-emerald-500' },
    { icon: Palette, label: 'Digital Products', emoji: '🎆', id: 'digital', color: 'from-green-400 to-lime-500' },
    { icon: TrendingUp, label: 'Branding', emoji: '✏️', id: 'branding', color: 'from-amber-400 to-golden-glow' },
  ];

  const angleStep = 360 / services.length;

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-square">
      {/* Central Gear */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: 1,
          rotate: !liteMode && !shouldReduceMotion ? 360 : 0,
        }}
        transition={{ 
          scale: { duration: 0.6, ease: 'easeOut' },
          rotate: { duration: 60, repeat: Infinity, ease: 'linear' }
        }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-leaf-green to-golden-glow 
                        flex items-center justify-center shadow-[0_0_40px_rgba(108,161,111,0.5)]
                        border-4 border-white/10">
          <Settings className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={2.5} />
        </div>
      </motion.div>

      {/* Service Icons in Orbit */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const angle = (index * angleStep + rotation) * (Math.PI / 180);
        const radius = 180; // Base radius
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={service.id}
            className="absolute left-1/2 top-1/2 cursor-pointer group"
            style={{
              x,
              y,
              marginLeft: '-40px',
              marginTop: '-40px',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              onServiceClick(service.id);
              // Rotate to this service
              setRotation(-index * angleStep);
            }}
            onHoverStart={() => setHoveredService(index)}
            onHoverEnd={() => setHoveredService(null)}
          >
            <motion.div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${service.color}
                         flex items-center justify-center shadow-lg backdrop-blur-sm
                         border-2 border-white/30 transition-all duration-300`}
              animate={
                hoveredService === index && !liteMode
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
              <span className="text-4xl md:text-5xl">{service.emoji}</span>
            </motion.div>

            {/* Label below icon */}
            <motion.div
              className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-xs md:text-sm font-semibold text-golden-glow">
                {service.label}
              </div>
            </motion.div>

            {/* Tooltip on hover */}
            {hoveredService === index && (
              <motion.div
                className="absolute top-full mt-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-30"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="px-4 py-2 rounded-lg glass-card text-sm text-foreground/90 
                               shadow-lg border border-golden-glow/30">
                  Click to explore
                </div>
              </motion.div>
            )}

            {/* Connection line to center */}
            {!liteMode && hoveredService === index && (
              <motion.div
                className="absolute left-1/2 top-1/2 w-0.5 bg-gradient-to-r from-golden-glow to-transparent"
                style={{
                  height: Math.sqrt(x * x + y * y),
                  transformOrigin: 'top center',
                  rotate: Math.atan2(-y, -x) * (180 / Math.PI) + 90,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
              />
            )}

            {/* Ripple effect on hover */}
            {!liteMode && hoveredService === index && (
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-golden-glow"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.div>
        );
      })}

      {/* Orbit ring */}
      {!liteMode && (
        <>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-[360px] h-[360px] md:w-[440px] md:h-[440px] 
                          rounded-full border border-leaf-green/20" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-[364px] h-[364px] md:w-[444px] md:h-[444px] 
                          rounded-full border border-golden-glow/10 animate-pulse"
               style={{ animationDuration: '3s' }} />
        </>
      )}
    </div>
  );
};

export default ServicesOrbit;
