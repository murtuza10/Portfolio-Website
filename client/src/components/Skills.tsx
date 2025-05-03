import { SkillItem, ToolItem, LanguageItem } from "@/lib/types";
import { 
  SiPython, SiTensorflow, SiPytorch, SiMysql, 
  SiGit, SiDocker, SiPandas, 
  SiSpring, SiKubernetes, SiApachekafka, SiHtml5
} from "react-icons/si";
import { BarChart2, Terminal, Cloud, Share, Layers, Database, Server } from "lucide-react";

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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            My technical toolkit and specialized knowledge areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-source text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {displaySkills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-value" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-source text-primary">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {displayTools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300">
                  <div className="text-xl text-secondary mb-2">
                    {toolIcons[tool.icon] || <SiPython className="text-xl text-secondary" />}
                  </div>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 border border-gray-200 rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 font-source text-primary">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayLanguages.map((language, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-30 rounded-full shadow-sm">
                  <span className="text-lg font-bold text-secondary">{language.code}</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900">{language.name}</h4>
                  <p className="text-sm text-gray-800">{language.proficiency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
