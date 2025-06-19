import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Download, Linkedin } from 'lucide-react';

const HeroSection = ({ data }) => {
  const { name, title, subtitle, imageUrl } = data;
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'Praveen_Resume.pdf';
    link.download = 'Praveen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Resume Download",
      description: "Your resume is being downloaded!",
    });
  };

  const handleContactClick = (type) => {
    if (type === 'LinkedIn') {
      window.open('https://www.linkedin.com/in/sai-praveen-kolamuri-7b449822a/', '_blank');
    }
    toast({
      title: "Contact Action",
      description: `${type} contact action initiated!`,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-bg opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-lg text-blue-400 font-medium">🔥 Welcome to my portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm <span className="gradient-text">{name}</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-8"
            >
              <p className="mb-2">{title}</p>
              <p className="text-lg">{subtitle}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full cyber-glow"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>

              <Button 
                variant="outline"
                onClick={() => window.open('/Praveen_Resume.pdf', '_blank')}
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full"
              >
                📄 View Resume
              </Button>

              <Button 
                variant="outline" 
                onClick={() => handleContactClick('LinkedIn')}
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-full"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {!isImageLoaded && (
                <div className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gray-700 animate-pulse z-0" />
              )}

              <img 
                src={imageUrl}
                alt={`${name} - Professional headshot`}
                onLoad={() => setImageLoaded(true)}
                className={`relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-blue-500/30 floating transition-opacity duration-700 ease-in-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
