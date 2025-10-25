import { useRef } from 'react';
import RevolvingHero from '@/components/RevolvingHero';
import { motion } from 'framer-motion';

const Index = () => {
  const solutionsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      solutions: solutionsRef,
      services: servicesRef,
      about: aboutRef,
      contact: contactRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Revolving Icons */}
      <RevolvingHero onNavigate={scrollToSection} />

      {/* Solutions Section - Orange Theme */}
      <motion.section
        ref={solutionsRef}
        id="solutions"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(25, 95%, 53% / 0.1) 0%, hsl(25, 95%, 30% / 0.05) 100%)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            className="text-7xl mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            💡
          </motion.div>
          <h2 className="text-5xl font-bold mb-6" style={{ color: 'hsl(25, 95%, 53%)' }}>
            Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions tailored to your business needs. 
            From enterprise applications to innovative digital products, we transform your 
            vision into reality with precision and creativity.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(25, 95%, 53% / 0.2) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(25, 95%, 53% / 0.2) 0%, transparent 70%)' }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </motion.section>

      {/* Services Section - Blue Theme */}
      <motion.section
        ref={servicesRef}
        id="services"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(217, 91%, 60% / 0.1) 0%, hsl(217, 91%, 30% / 0.05) 100%)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            className="text-7xl mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            🧰
          </motion.div>
          <h2 className="text-5xl font-bold mb-6" style={{ color: 'hsl(217, 91%, 60%)' }}>
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our comprehensive suite of services includes web development, mobile applications, 
            AI integration, automation, and digital branding. We bring expertise across the 
            entire technology stack to elevate your business.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-40 right-40 w-36 h-36 rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(217, 91%, 60% / 0.2) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-40 w-28 h-28 rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(217, 91%, 60% / 0.2) 0%, transparent 70%)' }}
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          />
        </div>
      </motion.section>

      {/* About Section - Purple Theme */}
      <motion.section
        ref={aboutRef}
        id="about"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(271, 76%, 53% / 0.1) 0%, hsl(271, 76%, 30% / 0.05) 100%)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            className="text-7xl mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            👥
          </motion.div>
          <h2 className="text-5xl font-bold mb-6" style={{ color: 'hsl(271, 76%, 53%)' }}>
            About
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mavon is a forward-thinking technology company dedicated to moving innovation forward. 
            We combine cutting-edge technology with sustainable practices to create solutions 
            that not only meet today's needs but anticipate tomorrow's challenges.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-32 left-32 w-44 h-44 rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(271, 76%, 53% / 0.2) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 right-32 w-32 h-32 rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(271, 76%, 53% / 0.2) 0%, transparent 70%)' }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.section>

      {/* Contact Section - Orange Theme */}
      <motion.section
        ref={contactRef}
        id="contact"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(25, 95%, 53% / 0.1) 0%, hsl(25, 95%, 30% / 0.05) 100%)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            className="text-7xl mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            📞
          </motion.div>
          <h2 className="text-5xl font-bold mb-6" style={{ color: 'hsl(25, 95%, 53%)' }}>
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Ready to transform your business with innovative technology solutions? 
            Get in touch with us today and let's build something amazing together.
          </p>
          
          <motion.a
            href="mailto:info@mavon.tech"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold glass-card hover:glow-strong transition-all"
            style={{ color: 'hsl(25, 95%, 53%)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✉️ info@mavon.tech
          </motion.a>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-28 right-28 w-40 h-40 rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(25, 95%, 53% / 0.2) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-28 left-28 w-36 h-36 rounded-full"
            style={{ background: 'radial-gradient(circle, hsl(25, 95%, 53% / 0.2) 0%, transparent 70%)' }}
            animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-forest-deep">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Mavon. Moving Innovation Forward.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;