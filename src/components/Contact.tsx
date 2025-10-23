import { Mail, MessageSquare, Instagram, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContactProps {
  liteMode: boolean;
}

const Contact = ({ liteMode }: ContactProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const contacts = [
    { icon: Mail, label: 'Email Us', value: 'mavontechsolutions@gmail.com', 
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=mavontechsolutions@gmail.com', 
      color: 'from-blue-400 to-cyan-500' },
    { icon: MessageSquare, label: 'Contact Us', value: ['+91 7678046520', '+91 7977457097'], 
      link: 'tel:7678046520', 
      color: 'from-emerald-400 to-green-500' },
    { icon: Instagram, label: 'Follow Us', value: '@_mavon_', 
      link: 'https://www.instagram.com/_mavon_?igsh=MWl3MmpmbHoyenB5', 
      color: 'from-pink-400 to-rose-500' },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        {/* Central Globe with Wave Animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 mb-6
                       bg-gradient-to-br from-leaf-green to-golden-glow rounded-full
                       shadow-[0_0_40px_rgba(108,161,111,0.4)]"
            animate={!liteMode ? {
              boxShadow: [
                '0 0 40px rgba(108,161,111,0.4)',
                '0 0 60px rgba(255,211,105,0.6)',
                '0 0 40px rgba(108,161,111,0.4)',
              ],
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Globe className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={2} />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-holographic mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's bring your ideas to life
          </p>
        </motion.div>

        {/* Contact Icons with Wave Animation */}
        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const isArray = Array.isArray(contact.value);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                }}
                onHoverStart={() => setHoveredIcon(index)}
                onHoverEnd={() => setHoveredIcon(null)}
              >
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div 
                    className="glass-card rounded-2xl p-8 text-center group cursor-pointer
                               border-2 border-transparent hover:border-golden-glow/30
                               transition-all duration-300"
                    whileHover={{ y: -10, scale: 1.05 }}
                    animate={
                      hoveredIcon === index && !liteMode
                        ? {
                            boxShadow: [
                              '0 0 20px rgba(255,211,105,0.2)',
                              '0 0 40px rgba(255,211,105,0.4)',
                              '0 0 20px rgba(255,211,105,0.2)',
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 1, repeat: hoveredIcon === index ? Infinity : 0 }}
                  >
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${contact.color}
                                 flex items-center justify-center shadow-lg`}
                      animate={
                        hoveredIcon === index
                          ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }
                          : { scale: 1 }
                      }
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-golden-glow mb-2">
                      {contact.label}
                    </h3>
                    
                    {isArray ? (
                      <div className="space-y-1">
                        {(contact.value as string[]).map((val, i) => (
                          <p key={i} className="text-sm text-muted-foreground hover:text-golden-glow transition-colors">
                            {val}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground hover:text-golden-glow transition-colors break-all">
                        {contact.value}
                      </p>
                    )}

                    {/* Ripple effect */}
                    {!liteMode && hoveredIcon === index && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-golden-glow pointer-events-none"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
