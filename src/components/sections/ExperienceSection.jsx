
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  whileHover: { scale: 1.03, boxShadow: "0px 10px 30px rgba(102, 126, 234, 0.15)", transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 }
};

const cardVariantsAlt = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  whileHover: { scale: 1.03, boxShadow: "0px 10px 30px rgba(102, 126, 234, 0.15)", transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 }
};


const ExperienceSection = ({ experiences }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🏢 <span className="gradient-text">Work Experience</span>
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? cardVariants : cardVariantsAlt}
              initial="initial"
              whileInView="whileInView"
              whileHover="whileHover"
              whileTap="whileTap"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 lg:p-8 shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                  <exp.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
