
import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  whileHover: { scale: 1.03, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 }
};

const AboutSection = ({ data }) => {
  const { intro, experience, interests } = data;
  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🧑‍💼 <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>
        
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="whileInView"
          whileHover="whileHover"
          whileTap="whileTap"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 lg:p-12 shadow-xl"
        >
          <div className="flex items-center mb-6">
            <User className="h-8 w-8 text-blue-400 mr-4" />
            <h3 className="text-2xl font-semibold">Professional Journey</h3>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{intro}</p>
            <p>{experience}</p>
            <p>{interests}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
