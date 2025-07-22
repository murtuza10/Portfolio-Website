import { ExperienceItem } from "@/lib/types";
import { BriefcaseIcon, BuildingIcon, MapPinIcon, CalendarIcon, Sparkles, Users, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceProps {
  experience?: ExperienceItem[];
}

export default function Experience({ experience = [] }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-secondary/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-secondary/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-accent/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-3 rounded-full bg-gradient-to-r from-secondary to-accent">
              <BriefcaseIcon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
          </motion.div>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            My professional journey across different organizations and roles, building innovative solutions and driving technological advancement.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-secondary rounded-full opacity-30"></div>
            <motion.div 
              className="absolute left-8 top-0 w-1 bg-gradient-to-b from-secondary via-accent to-secondary rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>
            
            <div className="space-y-12 pl-20">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline node */}
                  <motion.div 
                    className="absolute -left-24 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-accent border-4 border-white dark:border-gray-900 shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent animate-ping opacity-20"></div>
                  </motion.div>
                  
                  {/* Experience card */}
                  <motion.div 
                    className="relative overflow-hidden bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-900/60 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl group-hover:animate-pulse"></div>
                    
                    <div className="relative z-10 p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className="p-3 rounded-xl bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Users className="h-6 w-6 text-secondary" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-secondary transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <BuildingIcon className="h-4 w-4" />
                              <span className="font-semibold">{exp.company}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <motion.div 
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border border-secondary/30 text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            <CalendarIcon className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </motion.div>
                          
                          <motion.div 
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 text-accent border border-accent/30 text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPinIcon className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <motion.div 
                        className="relative p-6 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 p-2 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20">
                            <Zap className="h-4 w-4 text-accent" />
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
