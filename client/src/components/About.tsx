import { Card, CardContent } from "@/components/ui/card";
import { EducationItem, InterestItem } from "@/lib/types";
import { Brain, Bot, Eye, Database, GraduationCap, Award, Sparkles, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

interface AboutProps {
  education?: EducationItem[];
  interests?: InterestItem[];
}

// Map icons to interest names
const interestIcons: Record<string, React.ReactNode> = {
  "Machine Learning": <Brain className="h-6 w-6 text-primary" />,
  "AI Ethics": <Bot className="h-6 w-6 text-primary" />,
  "Computer Vision": <Eye className="h-6 w-6 text-primary" />,
  "Big Data": <Database className="h-6 w-6 text-primary" />
};

export default function About({ education = [], interests = [] }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
      <div className="mb-12 w-full px-4 md:px-8">
  <h2 className="section-title text-3xl font-bold mb-4">About Me</h2>
  <div className="section-divider h-1 w-20 bg-blue-500 mb-6"></div>
  
  <div className="text-base leading-relaxed max-w-none">
    <p className="mb-4">
      I’m Murtuza Husain — a software engineer with a Master’s degree in Computer Science from the University of Bonn. 
      With 2.5+ years of hands-on experience across industry and research, I specialize in backend development, scalable 
      cloud-native systems, and natural language processing (NLP).
    </p>
    <p className="mb-4">
      My journey spans building robust Java microservices and real-time data pipelines at Avaya, to developing domain-specific 
      NER and relation extraction models at leading research institutes like GESIS and ZB Med. I work extensively with modern 
      tools and frameworks such as Spring Boot, Kafka, Hugging Face, spaCy, and LLM APIs.
    </p>
    <p className="mb-4">
      I thrive at the intersection of engineering and AI — where reliable systems meet intelligent automation. Whether designing 
      APIs, optimizing ML pipelines, or contributing to impactful research, I aim to build solutions that are both technically 
      sound and human-centered.
    </p>
    <p>
      I'm always eager to learn, collaborate, and contribute to projects that push boundaries and solve real-world problems 
      through smart, scalable technology.
    </p>
  </div>
</div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Academic Background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-white/50 to-white/80 dark:from-gray-800/50 dark:to-gray-900/80 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
              
              <CardContent className="p-8 relative z-10">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-secondary to-accent">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    Academic Background
                  </h3>
                  <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                </motion.div>
                
                <div className="space-y-6">
                  {education.length > 0 ? (
                    education.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group/item"
                      >
                        <div className="relative p-6 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
                          {/* Animated border */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
                            <div className="h-full w-full rounded-xl bg-white dark:bg-gray-900"></div>
                          </div>
                          
                          <div className="relative z-10">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-secondary" />
                                <h4 className="font-bold text-lg text-gray-800 dark:text-white">{item.degree}</h4>
                              </div>
                              <motion.span 
                                className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border border-secondary/30"
                                whileHover={{ scale: 1.05 }}
                              >
                                {item.period}
                              </motion.span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-accent" />
                              {item.institution}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.details}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    // Enhanced fallback data
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative group/item"
                      >
                        <div className="relative p-6 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
                          <div className="relative z-10">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-secondary" />
                                <h4 className="font-bold text-lg text-gray-800 dark:text-white">MSc in Computer Science</h4>
                              </div>
                              <motion.span 
                                className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border border-secondary/30"
                                whileHover={{ scale: 1.05 }}
                              >
                                2022 - Present
                              </motion.span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-accent" />
                              University of Bonn, Germany
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              Specializing in Machine Learning and Artificial Intelligence. Thesis on "Deep Learning Applications in Computer Vision."
                            </p>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative group/item"
                      >
                        <div className="relative p-6 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
                          <div className="relative z-10">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-secondary" />
                                <h4 className="font-bold text-lg text-gray-800 dark:text-white">BSc in Computer Science</h4>
                              </div>
                              <motion.span 
                                className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border border-secondary/30"
                                whileHover={{ scale: 1.05 }}
                              >
                                2018 - 2022
                              </motion.span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-accent" />
                              Technical University of Munich, Germany
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              Focus on Algorithms and Data Structures. Graduated with honors (GPA: 3.8/4.0).
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Enhanced Research Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-white/50 to-white/80 dark:from-gray-800/50 dark:to-gray-900/80 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-l from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
              
              <CardContent className="p-8 relative z-10">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent to-secondary">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    Research Interests
                  </h3>
                  <Sparkles className="h-5 w-5 text-secondary animate-pulse" />
                </motion.div>
                
                <div className="grid grid-cols-1 gap-4">
                  {interests.length > 0 ? (
                    interests.map((interest, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="group/interest"
                      >
                        <div className="relative p-6 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full border border-accent/30 group-hover/interest:from-accent/30 group-hover/interest:to-secondary/30 transition-all duration-300"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              {interestIcons[interest.name] || <Brain className="h-6 w-6 text-accent" />}
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-800 dark:text-white mb-2 group-hover/interest:text-accent transition-colors duration-300">
                                {interest.name}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{interest.description}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    // Enhanced fallback data
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="group/interest"
                      >
                        <div className="relative p-6 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full border border-accent/30 group-hover/interest:from-accent/30 group-hover/interest:to-secondary/30 transition-all duration-300"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Brain className="h-6 w-6 text-accent" />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-800 dark:text-white mb-2 group-hover/interest:text-accent transition-colors duration-300">
                                Machine Learning
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Deep learning models and applications</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="group/interest"
                      >
                        <div className="relative p-6 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full border border-accent/30 group-hover/interest:from-accent/30 group-hover/interest:to-secondary/30 transition-all duration-300"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Bot className="h-6 w-6 text-accent" />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-800 dark:text-white mb-2 group-hover/interest:text-accent transition-colors duration-300">
                                AI Ethics
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Responsible AI development</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="group/interest"
                      >
                        <div className="relative p-6 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full border border-accent/30 group-hover/interest:from-accent/30 group-hover/interest:to-secondary/30 transition-all duration-300"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Eye className="h-6 w-6 text-accent" />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-800 dark:text-white mb-2 group-hover/interest:text-accent transition-colors duration-300">
                                Computer Vision
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Image processing and analysis</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="group/interest"
                      >
                        <div className="relative p-6 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full border border-accent/30 group-hover/interest:from-accent/30 group-hover/interest:to-secondary/30 transition-all duration-300"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Database className="h-6 w-6 text-accent" />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-800 dark:text-white mb-2 group-hover/interest:text-accent transition-colors duration-300">
                                Big Data
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Large-scale data processing</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
