import { motion } from 'framer-motion';
import { useState } from 'react';
import mavonLogo from '@/assets/mavon-logo.jpg';

interface RevolvingIconProps {
  emoji: string;
  label: string;
  angle: number;
  onClick: () => void;
}

const RevolvingIcon = ({ emoji, label, angle, onClick }: RevolvingIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const radius = 180; // Distance from center

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
      }}
      animate={{
        x: Math.cos((angle * Math.PI) / 180) * radius - 40,
        y: Math.sin((angle * Math.PI) / 180) * radius - 40,
        rotate: 360,
      }}
      transition={{
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        },
        x: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        },
        y: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-4xl hover:glow-strong transition-all"
          animate={isHovered ? { boxShadow: '0 0 40px hsl(127, 53%, 51% / 0.6)' } : {}}
        >
          {emoji}
        </motion.div>
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-leaf-light"
          animate={{ rotate: -360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
};

interface RevolvingHeroProps {
  onNavigate: (section: string) => void;
}

const RevolvingHero = ({ onNavigate }: RevolvingHeroProps) => {
  const icons = [
    { emoji: '💡', label: 'Solutions', section: 'solutions', angle: 0 },
    { emoji: '🧰', label: 'Services', section: 'services', angle: 90 },
    { emoji: '👥', label: 'About', section: 'about', angle: 180 },
    { emoji: '📞', label: 'Contact', section: 'contact', angle: 270 },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-forest-deep via-background to-forest-canopy">
      {/* Animated background glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(127, 53%, 51% / 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Center Logo */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary glow-strong">
          <img src={mavonLogo} alt="Mavon Logo" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Revolving Icons */}
      <div className="absolute inset-0">
        {icons.map((icon, index) => (
          <RevolvingIcon
            key={icon.section}
            emoji={icon.emoji}
            label={icon.label}
            angle={icon.angle}
            onClick={() => onNavigate(icon.section)}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-holographic mb-4">
          Moving Innovation Forward
        </h1>
        <p className="text-xl text-muted-foreground">
          Click any icon to explore our services
        </p>
      </motion.div>
    </div>
  );
};

export default RevolvingHero;