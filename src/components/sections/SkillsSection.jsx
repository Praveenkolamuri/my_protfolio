import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  whileHover: { scale: 1.03, boxShadow: "0px 8px 25px rgba(102, 126, 234, 0.15)", transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 }
};

const skillItemVariants = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  whileHover: { scale: 1.1, zIndex: 10, transition: { duration: 0.15 } },
  whileTap: { scale: 0.95 }
};

const SkillsSection = ({ categorizedSkills }) => {
  if (!categorizedSkills || categorizedSkills.length === 0) {
    return null;
  }

  // Split categories into two slides
  const firstSlideCategories = categorizedSkills.slice(0, 4);
  const secondSlideCategories = categorizedSkills.slice(4);

  return (
    <section className="py-20 section-bg" id="skills">
      <TooltipProvider>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              🛠️ <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A categorized overview of the tools and technologies I'm proficient with.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[firstSlideCategories, secondSlideCategories].map((slideCategories, slideIndex) => (
              <div key={slideIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {slideCategories.map((category, catIndex) => {
                  const CategoryIcon = category.icon;
                  return (
                    <motion.div
                      key={category.category}
                      variants={cardVariants}
                      initial="initial"
                      whileInView="whileInView"
                      whileHover="whileHover"
                      whileTap="whileTap"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: catIndex * 0.1 }}
                      className="p-4 lg:p-6 glass-effect rounded-xl shadow-xl"
                    >
                      <div className="flex items-center mb-4">
                        {CategoryIcon && <CategoryIcon className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" />}
                        <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                          {category.category}
                        </h3>
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <Tooltip key={`${category.category}-${skill.name}`}>
                            <TooltipTrigger asChild>
                              <motion.div
                                variants={skillItemVariants}
                                initial="initial"
                                whileInView="whileInView"
                                whileHover="whileHover"
                                whileTap="whileTap"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: skillIndex * 0.03 }}
                                className="flex flex-col items-center justify-center p-2 rounded-md w-[70px] h-[70px] cursor-pointer bg-white/10 shadow"
                              >
                                <img
                                  src={skill.logo}
                                  alt={skill.name}
                                  className="w-8 h-8 object-contain mb-1"
                                />
                                <p className="text-[10px] text-center text-muted-foreground font-medium">
                                  {skill.name}
                                </p>
                              </motion.div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </section>
  );
};

export default SkillsSection;