import { motion } from 'framer-motion';
import SolutionsOrbit from './SolutionsOrbit';

interface SolutionsProps {
  liteMode: boolean;
}

const Solutions = ({ liteMode }: SolutionsProps) => {
  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-holographic mb-4">
          Comprehensive Technology Solutions
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Multi-layered solutions for Enterprise, Security, and Growth
        </p>
      </motion.div>

      {/* Solutions Orbit */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SolutionsOrbit liteMode={liteMode} />
      </motion.div>

      {/* Solution Categories Description */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {[
          {
            title: 'Enterprise',
            emoji: '🏢',
            color: 'from-amber-400 to-orange-500',
            items: ['Custom ERP Systems', 'Business Intelligence', 'Process Automation'],
          },
          {
            title: 'Security',
            emoji: '🛡️',
            color: 'from-emerald-400 to-teal-500',
            items: ['Data Encryption', 'Compliance Management', 'Security Audits'],
          },
          {
            title: 'Growth',
            emoji: '📈',
            color: 'from-violet-400 to-purple-500',
            items: ['Analytics Dashboard', 'Performance Monitoring', 'Growth Strategy'],
          },
        ].map((category, index) => (
          <motion.div
            key={index}
            className="glass-card p-6 rounded-xl hover:glow-medium transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color}
                           flex items-center justify-center shadow-lg`}>
              <span className="text-3xl">{category.emoji}</span>
            </div>
            <h3 className="text-xl font-bold text-golden-glow mb-4 text-center">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-golden-glow flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Solutions;
