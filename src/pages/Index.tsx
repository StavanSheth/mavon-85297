import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FloatingMascot from '@/components/FloatingMascot';
import MagneticCursor from '@/components/MagneticCursor';
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
      {/* Magnetic cursor effect */}
      {!liteModeEnabled && <MagneticCursor />}

      {/* Floating Mascot */}
      {!liteModeEnabled && <FloatingMascot />}

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <Hero onScrollToServices={() => scrollToSection('services')} liteMode={liteModeEnabled} />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <Services liteMode={liteModeEnabled} />
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <Solutions liteMode={liteModeEnabled} />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About liteMode={liteModeEnabled} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
        className="py-12 border-t border-border/50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest-deep/50" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={!liteModeEnabled ? {
              textShadow: [
                '0 0 10px rgba(255,211,105,0.3)',
                '0 0 20px rgba(255,211,105,0.5)',
                '0 0 10px rgba(255,211,105,0.3)',
              ],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl">🌿</span>
            <p className="text-golden-glow font-medium">&copy; 2025 Mavon</p>
            <span className="text-2xl">🌿</span>
          </motion.div>
          <p className="text-muted-foreground">Moving Innovation Forward Sustainably</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
