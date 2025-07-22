import { SkillItem, ToolItem, LanguageItem } from "@/lib/types";
import { motion } from "framer-motion";
import { 
  SiPython, SiTensorflow, SiPytorch, SiMysql, 
  SiGit, SiDocker, SiPandas, 
  SiSpring, SiKubernetes, SiApachekafka, SiHtml5
} from "react-icons/si";
import { BarChart2, Terminal, Cloud, Share, Layers, Database, Server, Sparkles } from "lucide-react";

interface SkillsProps {
  skills?: SkillItem[];
  tools?: ToolItem[];
  languages?: LanguageItem[];
}

// Map icons to tool names
const toolIcons: Record<string, React.ReactNode> = {
  "Spring Boot": <SiSpring className="text-2xl text-secondary" />,
  "Microservices": <Layers className="text-xl text-secondary" />,
  "PostgreSQL": <Database className="text-xl text-secondary" />,
  "Kafka": <SiApachekafka className="text-2xl text-secondary" />,
  "Git": <SiGit className="text-2xl text-secondary" />,
  "Azure": <Cloud className="text-xl text-secondary" />,
  "Kubernetes": <SiKubernetes className="text-2xl text-secondary" />,
  "HTML/CSS": <SiHtml5 className="text-2xl text-secondary" />,
  "REST APIs": <Share className="text-xl text-secondary" />,
};

export default function Skills({ skills = [], tools = [], languages = [] }: SkillsProps) {
  // Default skills if none provided
  const displaySkills = skills.length > 0 ? skills : [
    { name: "Python", percentage: 90 },
    { name: "Machine Learning", percentage: 85 },
    { name: "Data Analysis", percentage: 80 },
    { name: "C++", percentage: 75 },
    { name: "Web Development", percentage: 65 }
  ];

  // Default tools if none provided
  const displayTools = tools.length > 0 ? tools : [
    { name: "Spring Boot", icon: "Spring Boot" },
    { name: "Microservices", icon: "Microservices" },
    { name: "PostgreSQL", icon: "PostgreSQL" },
    { name: "Kafka", icon: "Kafka" },
    { name: "Git", icon: "Git" },
    { name: "Azure", icon: "Azure" },
    { name: "Kubernetes", icon: "Kubernetes" },
    { name: "HTML/CSS", icon: "HTML/CSS" },
    { name: "REST APIs", icon: "REST APIs" }
  ];

  // Default languages if none provided
  const displayLanguages = languages.length > 0 ? languages : [
    { code: "DE", name: "German", proficiency: "Native Speaker" },
    { code: "EN", name: "English", proficiency: "Fluent (C2)" },
    { code: "FR", name: "French", proficiency: "Intermediate (B1)" }
  ];

  return (
    <section id="skills" className="py-20 morphing-bg">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
            <h2 className="section-title">Skills & Expertise</h2>
            <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
          </div>
          <div className="section-divider"></div>
          <p className="section-description">
            My technical toolkit and specialized knowledge areas
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-source text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {displaySkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="mb-6 p-4 glass-card rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{skill.name}</span>
                    <motion.span 
                      className="text-sm font-bold gradient-text"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill.percentage}%
                    </motion.span>
                  </div>
                  <div className="progress-bar skill-bar bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden h-3">
                    <motion.div 
                      className="h-full rounded-full bg-gradient-to-r from-secondary to-accent shadow-lg"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-source text-primary">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {displayTools.map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-4 glass-card rounded-lg hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {toolIcons[tool.icon] || <SiPython className="text-2xl text-secondary" />}
                  </motion.div>
                  <span className="text-sm font-semibold text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="mt-16 glass-card rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 font-source gradient-text text-center">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayLanguages.map((language, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.div 
                  className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-secondary to-accent rounded-full shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-lg font-bold text-white">{language.code}</span>
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{language.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{language.proficiency}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
