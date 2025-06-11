import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  whileHover: { scale: 1.03, boxShadow: "0px 10px 30px rgba(102, 126, 234, 0.2)", transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 }
};

const formElementVariants = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
};

const ContactSection = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "praveen.kolamuri@gmail.com",
      href: "mailto:praveen.kolamuri@gmail.com"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 8897291242",
      href: "tel:+918897291242"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sai-praveen-kolamuri",
      href: "https://www.linkedin.com/in/sai-praveen-kolamuri-7b449822a/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Praveenkolamuri",
      href: "https://github.com/Praveenkolamuri"
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out. I'll get back to you soon!",
        className: "bg-green-600 text-white border-green-700"
      });
      e.target.reset();
    }).catch((error) => {
      toast({
        title: "Failed to send message ❌",
        description: "Please try again later.",
        className: "bg-red-600 text-white border-red-700"
      });
      console.error("EmailJS Error:", error);
    });
  };

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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <motion.a
                    key={index}
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg glass-effect transition-all duration-300"
                    variants={cardVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
                      <detail.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{detail.label}</p>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities, collaborations, and exciting projects. Don't hesitate to reach out if you have any questions or just want to say hi!
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="whileInView"
            whileHover="whileHover"
            whileTap="whileTap"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-effect rounded-2xl p-8 lg:p-10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formElementVariants} whileHover="whileHover">
                <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-1">Full Name</label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="bg-background/70 border-border focus:ring-primary focus:border-primary"
                />
              </motion.div>

              <motion.div variants={formElementVariants} whileHover="whileHover">
                <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-1">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="your.email@example.com"
                  className="bg-background/70 border-border focus:ring-primary focus:border-primary"
                />
              </motion.div>

              <motion.div variants={formElementVariants} whileHover="whileHover">
                <label htmlFor="subject" className="block text-sm font-medium text-blue-300 mb-1">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Subject"
                  className="bg-background/70 border-border focus:ring-primary focus:border-primary"
                />
              </motion.div>

              <motion.div variants={formElementVariants} whileHover="whileHover">
                <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-1">Message</label>
                <Textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Your message here..."
                  className="bg-background/70 border-border focus:ring-primary focus:border-primary"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg cyber-glow text-base"
                >
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
