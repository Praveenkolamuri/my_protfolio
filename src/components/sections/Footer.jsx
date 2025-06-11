import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            © {new Date().getFullYear()} Kolamuri Sai Praveen. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;