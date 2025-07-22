import { useEffect, useState } from "react";
import { ProfileData } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Sparkles, Download, Send } from "lucide-react";

interface HeroProps {
  profile?: ProfileData;
}

export default function Hero({ profile }: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer. AI Enthusiast. Problem Solver.";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Enhanced Floating Elements with Neon Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 liquid-bg bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 liquid-bg bg-gradient-to-r from-accent/15 to-secondary/15 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Additional floating particles */}
        <motion.div 
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"
          animate={{ 
            y: [-30, 30, -30],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content Section */}
          <motion.div className="lg:w-1/2 text-white" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
              <span className="text-secondary font-medium">Welcome to my portfolio</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-source leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="block">{displayText}</span>
              <span className="inline-block w-1 h-16 bg-secondary ml-2 animate-pulse"></span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              {profile?.tagline || "MSc Computer Science student at the University of Bonn, specializing in artificial intelligence and machine learning. Passionate about creating innovative solutions and building the future."}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href="#projects" 
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
                className="btn-primary group flex items-center space-x-2 hover:neon-glow magnetic"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>View Projects</span>
              </motion.a>
              
              <motion.a 
                href="#contact"
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
                className="btn-outline group flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="h-5 w-5 group-hover:animate-pulse" />
                <span>Contact Me</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image Section */}
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div 
                className="relative w-80 h-80 md:w-96 md:h-96"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8
                }}
              >
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary via-accent to-secondary animate-spin" style={{ animation: 'spin 10s linear infinite' }}></div>
                
                {/* Profile Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src={profile?.image?.startsWith('/') ? profile.image : `/${profile?.image}` || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} 
                      alt="Murtuza Husain profile photo" 
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback className="text-6xl bg-gradient-to-r from-secondary to-accent text-white">MH</AvatarFallback>
                  </Avatar>
                </div>
              </motion.div>
              
              {/* Status Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-sm">Open to Work</span>
                </div>
              </motion.div>
              
              {/* Floating Skills */}
              {['React', 'AI/ML', 'TypeScript', 'Python'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="absolute glass-card px-3 py-2 rounded-full text-white text-sm font-medium"
                  style={{
                    top: `${20 + index * 15}%`,
                    left: index % 2 === 0 ? '-10%' : '110%',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    delay: 1.5 + index * 0.2,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          className="w-full"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#F9FAFB', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#E5E7EB', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path 
            fill="url(#waveGradient)" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          />
        </motion.svg>
      </div>
    </section>
  );
}