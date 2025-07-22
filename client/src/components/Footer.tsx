import { Link } from "wouter";
import { Download, Github, Linkedin, Twitter, Mail, Heart, Sparkles } from "lucide-react";
import { ProfileData } from "@/lib/types";
import { motion } from "framer-motion";

interface FooterProps {
  profile?: ProfileData;
}

export default function Footer({ profile }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 pb-10 overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15)_0%,transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15)_0%,transparent_50%)] animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-secondary/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-bounce"></div>
      </div>
      
      {/* Animated border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          {/* Enhanced Profile Section */}
          <motion.div 
            className="mb-12 lg:mb-0 lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold font-source mb-4 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-6 w-6 text-accent mr-2 animate-pulse" />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Murtuza</span>
              <span className="ml-2 text-white">Husain</span>
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {profile?.tagline || "MSc Computer Science student specializing in AI and Machine Learning at the University of Bonn."}
            </motion.p>
            
            {/* Enhanced Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { href: "https://github.com/murtuza10", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/murtuzahusain/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com/", icon: Twitter, label: "Twitter" },
                { href: "mailto:murtuzanh@gmail.com", icon: Mail, label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 text-gray-300 hover:text-white transition-all duration-300 hover:from-secondary/30 hover:to-accent/30"
                  target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360
                  }}
                  style={{ boxShadow: "0 0 0px rgba(0, 0, 0, 0)" }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.7 + index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Enhanced Quick Links */}
          <motion.div 
            className="mb-12 lg:mb-0 lg:w-1/4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-xl font-semibold mb-6 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Quick Links</span>
            </motion.h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-secondary transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      window.scrollTo({
                        top: aboutSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-300 hover:text-secondary transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const skillsSection = document.getElementById('skills');
                    if (skillsSection) {
                      window.scrollTo({
                        top: skillsSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-300 hover:text-secondary transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      window.scrollTo({
                        top: projectsSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-secondary transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Enhanced Resume Section */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-xl font-semibold mb-6 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Download className="h-5 w-5 text-accent mr-2" />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Resume</span>
            </motion.h4>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Download my resume to learn more about my academic background, skills, and achievements.
            </motion.p>
            <motion.a 
              href="/api/download-resume" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-full hover:from-secondary/80 hover:to-accent/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              download="Murtuza-CV-July25.pdf"
              whileHover={{ 
                scale: 1.05
              }}
              style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Download className="mr-2 h-4 w-4" /> 
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Enhanced Footer Bottom */}
        <motion.div 
          className="border-t border-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            © {new Date().getFullYear()} 
            <span className="mx-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-semibold">
              Murtuza Husain
            </span>
            All rights reserved.
          </motion.p>
          
          <motion.p 
            className="text-gray-400 text-sm flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <span>Built with</span>
            <motion.span 
              className="text-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="h-4 w-4 inline" />
            </motion.span>
            <span>using React & TypeScript</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-accent" />
            </motion.div>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
