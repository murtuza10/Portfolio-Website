import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectItem } from "@/lib/types";
import { Github, FileText, Monitor, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectsProps {
  projects?: ProjectItem[];
}

export default function Projects({ projects = [] }: ProjectsProps) {
  const [filter, setFilter] = useState<string>("All");
  
  // Use provided projects data (from database/API)
  const displayProjects = projects;

  // Debug logging
  console.log('Projects data:', displayProjects);
  console.log('Current filter:', filter);

  // Fixed categories to match database data
  const allCategories = displayProjects.map(p => p.category).filter(Boolean);
  const categories = ["All", ...Array.from(new Set(allCategories))];
  
  console.log('Available categories:', categories);
  
  // Exact category matching
  const filteredProjects = filter === "All" 
    ? displayProjects 
    : displayProjects.filter(p => p.category === filter);
  
  console.log('Filtered projects:', filteredProjects);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 particle-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
            <h2 className="section-title">Featured Projects</h2>
            <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
          </div>
          <div className="section-divider"></div>
          <p className="section-description">
            Showcasing innovative solutions in AI, machine learning, and software development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFilter(category);
                console.log('Filter clicked:', category); // Debug log
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer z-30 relative ${
                filter === category
                  ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ pointerEvents: 'all' }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="hover-lift card-3d"
            >
              <Card className="overflow-hidden h-full glass-card border-2 border-transparent hover:border-secondary/30 hover:neon-glow transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  {project.image && (
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {project.category && (
                    <motion.div 
                      className="absolute top-3 right-3 bg-gradient-to-r from-secondary to-accent text-white text-xs font-bold px-3 py-1 rounded-full"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      {project.category}
                    </motion.div>
                  )}
                  
                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      {project.links?.github && (
                        <motion.a
                          href={project.links.github}
                          className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors"
                          title="GitHub Repository"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                      )}
                      {project.links?.demo && (
                        <motion.a
                          href={project.links.demo}
                          className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors"
                          title="Live Demo"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.a>
                      )}
                      {project.links?.paper && (
                        <motion.a
                          href={project.links.paper}
                          className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors"
                          title="Research Paper"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FileText className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-3 font-source gradient-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {project.tags?.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.7 + index * 0.1 + tagIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20 font-medium"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
