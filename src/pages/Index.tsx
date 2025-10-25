import { useState } from 'react';
import { ChevronDown, Linkedin, Github, Instagram } from 'lucide-react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FloatingMascot from '@/components/FloatingMascot';
import MagneticCursor from '@/components/MagneticCursor';
import ParticleBackground from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';

const Index = () => {
  const [liteModeEnabled, setLiteModeEnabled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground liteMode={liteModeEnabled} />

      {/* Magnetic cursor effect */}
      {!liteModeEnabled && <MagneticCursor />}

      {/* Floating Mascot */}
      {!liteModeEnabled && <FloatingMascot />}

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-background to-background -z-10" />
        <Hero onScrollToServices={() => scrollToSection('services')} liteMode={liteModeEnabled} />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-forest-deep/40 to-background -z-10" />
        <Services liteMode={liteModeEnabled} />
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-leaf-green/5 to-background -z-10" />
        <Solutions liteMode={liteModeEnabled} />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-golden-glow/5 to-background -z-10" />
        <About liteMode={liteModeEnabled} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-forest-deep/30 to-forest-deep/60 -z-10" />
        <Contact liteMode={liteModeEnabled} />
      </section>

      {/* Scroll to Top Indicator */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-strong transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ChevronDown className="rotate-180 text-primary" size={20} />
      </button>

      {/* Footer */}
      <motion.footer 
        className="py-16 border-t border-border/50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest-deep/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Floating Social Icons */}
          <div className="relative w-full max-w-md mx-auto h-40 mb-8">
            {[
              { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', color: 'from-blue-400 to-cyan-500', angle: 0 },
              { icon: Github, label: 'GitHub', url: 'https://github.com', color: 'from-gray-400 to-gray-600', angle: 120 },
              { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/_mavon_', color: 'from-pink-400 to-rose-500', angle: 240 },
            ].map((social, index) => {
              const Icon = social.icon;
              const radius = 80;
              const x = Math.cos((social.angle * Math.PI) / 180) * radius;
              const y = Math.sin((social.angle * Math.PI) / 180) * radius;

              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 top-1/2"
                  style={{
                    marginLeft: `${x - 32}px`,
                    marginTop: `${y - 32}px`,
                  }}
                  animate={
                    !liteModeEnabled
                      ? {
                          y: [0, -10, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${social.color}
                               flex items-center justify-center shadow-lg cursor-pointer`}
                    animate={
                      !liteModeEnabled
                        ? {
                            boxShadow: [
                              '0 0 20px currentColor',
                              '0 0 30px currentColor',
                              '0 0 20px currentColor',
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs text-golden-glow font-medium">{social.label}</span>
                  </div>
                </motion.a>
              );
            })}

            {/* Central eco-glow element */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={
                !liteModeEnabled
                  ? {
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }
                  : {}
              }
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-4xl">🌿</span>
            </motion.div>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              animate={
                !liteModeEnabled
                  ? {
                      textShadow: [
                        '0 0 10px rgba(255,211,105,0.3)',
                        '0 0 20px rgba(255,211,105,0.5)',
                        '0 0 10px rgba(255,211,105,0.3)',
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-xl text-golden-glow font-bold">&copy; 2025 Mavon</p>
            </motion.div>
            <p className="text-muted-foreground text-lg">
              Moving Innovation Forward Sustainably
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
