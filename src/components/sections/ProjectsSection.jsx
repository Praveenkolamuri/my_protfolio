import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, CheckCircle, Paintbrush, MonitorPlay, ShieldCheck } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projectCardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const detailPopupVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20, transition: { duration: 0.3, ease: "easeOut" } },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const projects = [
  {
    title: "Secure Cloud Storage",
    description: "A Jetson Nano based secure file storage system with IDS and MariaDB integration for security.",
    projectIcon: ShieldCheck,
    technologies: ["Jetson Nano", "Linux", "IDS", "MariaDB"],
    image: "images/jetson nano prj.jpg",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003641537-13/secure-private-cloud-storage-sharing-services-jetson-orin-nano-srinivasarao-leelavathy-gedela-triveni-kolamuri-sai-praveen-subrhamanya-karthik-sontyana-jagan",
    details: [
      "Implemented IDS for threat monitoring",
      "Used MariaDB for secure storage",
      "Built on Ubuntu using Jetson Nano",
      "Ensured access control and encryption"
    ],
    category: "Security"
  },
  {
    title: "Netflix Clone",
    description: "Built a responsive and stylish Netflix-like interface. Implemented features similar to real streaming platforms for improved UX.",
    projectIcon: Paintbrush,
    technologies: ["HTML", "CSS", "Responsive Design"],
    image: "images/netflex.jpg",
    link: "https://github.com/Praveenkolamuri/Netflix-clone-.git",
    details: [
      "Recreated the Netflix UI using HTML and CSS.",
      "Ensured a fully responsive design for various screen sizes.",
      "Focused on user experience (UX) to mimic a real streaming platform.",
      "Used semantic HTML5 tags for accessibility."
    ],
    category: "Frontend"
  },
  {
    title: "Java Registration Page",
    description: "Full-stack Java project with backend database integration using JDBC and Servlets.",
    projectIcon: MonitorPlay,
    technologies: ["Java", "JSP", "Servlets", "MySQL"],
    image: "images/registration.jpg",
    link: "https://github.com/Praveenkolamuri/registration-page-using-jdbc-.git",
    details: [
      "Form validation and user input handling",
      "Connected with MySQL using JDBC",
      "Server-side logic in Servlets",
      "Handled session management and user authentication"
    ],
    category: "Backend"
  }
];

const ProjectsSection = () => {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

  return (
    <section className="py-20 section-bg" id="projects">
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
              💡 <span className="gradient-text">Projects Showcase</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hover over a project to see more details and links.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const ProjectIcon = project.projectIcon;
              return (
                <motion.div
                  key={project.title}
                  variants={projectCardVariants}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.1 }}
                  className="relative project-card-container rounded-2xl glass-effect shadow-xl overflow-hidden"
                  onMouseEnter={() => setHoveredProjectIndex(index)}
                  onMouseLeave={() => setHoveredProjectIndex(null)}
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    className="p-6 flex flex-col justify-between h-full"
                    animate={{ scale: hoveredProjectIndex === index ? 0.95 : 1, opacity: hoveredProjectIndex === index ? 0.3 : 1 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                  >
                    <div>
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-6 shadow-lg group">
                        <img
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                          alt={`${project.title} thumbnail`}
                          src={project.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                        <div className="absolute top-3 right-3 bg-background/70 backdrop-blur-sm p-2 rounded-full">
                          {ProjectIcon && <ProjectIcon className="h-6 w-6 text-blue-400" />}
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-xl font-semibold text-white shadow-sm">{project.title}</h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Tooltip key={techIndex}>
                            <TooltipTrigger asChild>
                              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs cursor-default">
                                {tech}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                        {project.technologies.length > 3 && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs cursor-default">
                                +{project.technologies.length - 3} more
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{project.technologies.slice(3).join(', ')}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {hoveredProjectIndex === index && (
                      <motion.div
                        variants={detailPopupVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute inset-0 p-6 bg-background/90 backdrop-blur-md flex flex-col justify-between overflow-y-auto"
                      >
                        <div>
                          <div className="flex items-center mb-3">
                            {ProjectIcon && <ProjectIcon className="h-7 w-7 text-blue-400 mr-3" />}
                            <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                          <h4 className="text-md font-semibold mb-2 text-blue-300">Key Features:</h4>
                          <ul className="space-y-1 text-xs text-muted-foreground mb-4">
                            {project.details?.slice(0, 3).map((detail, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-3.5 w-3.5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                            {project.details && project.details.length > 3 && (
                              <li className="text-xs text-purple-400 italic">+ {project.details.length - 3} more...</li>
                            )}
                          </ul>

                          <h4 className="text-md font-semibold mb-2 text-blue-300">Technologies:</h4>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-border/50">
                          {project.title === "Secure Cloud Storage" ? (
                            <Button
                              variant="outline"
                              className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-300 transition-all duration-200 transform hover:scale-105"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.link, '_blank');
                              }}
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              View Published Paper
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-200 transform hover:scale-105"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.link, '_blank');
                              }}
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View on GitHub
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </TooltipProvider>
    </section>
  );
};

export default ProjectsSection;
