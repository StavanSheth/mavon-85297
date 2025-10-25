import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface OrbitAnimationProps {
  children: ReactNode;
  radius: number;
  duration: number;
  delay?: number;
  className?: string;
}

export const OrbitAnimation = ({ 
  children, 
  radius, 
  duration, 
  delay = 0,
  className = ''
}: OrbitAnimationProps) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{
        width: radius * 2,
        height: radius * 2,
        left: '50%',
        top: '50%',
        marginLeft: -radius,
        marginTop: -radius,
      }}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default OrbitAnimation;
