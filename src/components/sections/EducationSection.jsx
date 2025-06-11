
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, CheckCircle } from 'lucide-react';

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  whileHover: { scale: 1.03, boxShadow: "0px 10px 30px rgba(102, 126, 234, 0.15)", transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 }
};

const EducationSection = ({ data }) => {
  return (
    <section className="py-20" id="education">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🎓 <span className="gradient-text">Education</span>
          </h2>
        </motion.div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full opacity-50"></div>
          
          {data.map((edu, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="whileInView"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'flex-row-reverse justify-start'}`}
            >
              <div className="w-1/2">
                <motion.div 
                  variants={cardVariants} 
                  whileHover="whileHover" 
                  whileTap="whileTap"
                  className={`relative p-6 lg:p-8 glass-effect rounded-xl shadow-xl ${index % 2 === 0 ? 'mr-4 text-right' : 'ml-4 text-left'}`}
                >
                  <div className={`absolute top-1/2 -mt-3 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-background shadow-md ${index % 2 === 0 ? 'right-0 transform translate-x-[calc(50%+0.5rem)]' : 'left-0 transform -translate-x-[calc(50%+0.5rem)]'}`}></div>
                  <div className="flex items-center mb-3">
                    {index % 2 !== 0 && <GraduationCap className="h-7 w-7 text-blue-400 mr-3" />}
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground">{edu.degree}</h3>
                    {index % 2 === 0 && <GraduationCap className="h-7 w-7 text-blue-400 ml-3" />}
                  </div>
                  <p className="text-blue-300 mb-2 text-sm lg:text-base">{edu.institution}</p>
                  <div className="flex items-center text-xs lg:text-sm text-muted-foreground mb-3">
                    <CalendarDays className="h-4 w-4 mr-2 text-purple-400" />
                    <span>{edu.period}</span>
                    <span className="mx-2">|</span>
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    <span>{edu.grade}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
