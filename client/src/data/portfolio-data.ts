import { PortfolioData } from "@/lib/types";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Murtuza Husain",
    tagline: "MSc Computer Science student at the University of Bonn with professional experience in Software Engineering.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  education: [
    {
      degree: "MSc in Computer Science",
      institution: "University of Bonn, Germany",
      period: "2023 - Current",
      details: "Pursuing Master's degree in Computer Science with focus on Machine Learning and NLP."
    },
    {
      degree: "Bachelor of Engineering - Information Technology (AI and ML Honors)",
      institution: "Pune Institute of Computer Technology, India",
      period: "2018 - 2022",
      details: "Graduated with CGPA: 9.74/10, specializing in AI and Machine Learning."
    }
  ],
  interests: [
    {
      name: "Machine Learning",
      description: "Deep learning models and applications",
      icon: "Brain"
    },
    {
      name: "Natural Language Processing",
      description: "NER, coreference resolution, and text analysis",
      icon: "MessageSquare"
    },
    {
      name: "Software Engineering",
      description: "Microservices and API development",
      icon: "Code"
    },
    {
      name: "Data Science",
      description: "Analysis and processing of large datasets",
      icon: "BarChart"
    }
  ],
  skills: [
    { name: "Java", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "Machine Learning", percentage: 85 },
    { name: "JavaScript", percentage: 75 },
    { name: "C++", percentage: 70 },
    { name: "Web Development", percentage: 75 }
  ],
  tools: [
    { name: "Spring Boot", icon: "Spring" },
    { name: "Microservices", icon: "Layers" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Kafka", icon: "MessageSquare" },
    { name: "Git", icon: "Git" },
    { name: "Azure", icon: "Cloud" },
    { name: "Kubernetes", icon: "Server" },
    { name: "HTML/CSS", icon: "Code" },
    { name: "REST APIs", icon: "Share" }
  ],
  languages: [
    { code: "HI", name: "Hindi", proficiency: "Native Speaker" },
    { code: "EN", name: "English", proficiency: "Proficient (C2)" },
    { code: "DE", name: "German", proficiency: "Basic (A1)" }
  ],
  experience: [
    {
      title: "Student Assistant Computer Science",
      company: "ZB Med",
      location: "Bonn, Germany",
      period: "Jun 2025 - Current",
      description: "Working on Comparative Evaluation of NER Techniques for Agricultural Entities. Evaluating and comparing various NER techniques such as rule-based, prompting and fine-tuning on an agricultural dataset to determine their relative effectiveness and identify the optimal strategy for domain-specific entity extraction."
    },
    {
      title: "Student Assistant Computer Science",
      company: "GESIS – Leibniz Institute for the Social Sciences",
      location: "Cologne, Germany",
      period: "Jan 2024 - Dec 2024",
      description: "Worked on research project which involved training machine learning models to perform named entity extraction of machine learning terminologies such as MlModel model mentions, dataset mentions, reference links etc. along with the relations present between them on computer science research mentions. Worked on creating scripts to perform coreference resolution on Annotated data."
    },
    {
      title: "Software Engineer",
      company: "Avaya",
      location: "Pune, India",
      period: "Jul 2022 - Sep 2023",
      description: "Designed and implemented a robust software ecosystem: (1) Orchestrated REST APIs adhering to OpenAPI 3.0, (2) Designed AVSC schemas for Kafka data flow, (3) Crafted detailed API documentation, (4) Engineered Java, Spring, and PostgreSQL microservices, (5) Enhanced bulk agent management features, (6) Designed efficient Spring Data JPA repositories, (7) Conducted JUnit testing, (8) Deployed microservices on Kubernetes, (9) Resolved UAT and production issues. Used technologies including Java, Spring Boot, Kafka, PostgreSQL, Azure, Kubernetes, and Keycloak."
    }
  ],
  projects: [
    {
      id: 1,
      title: "Tourist Spot Recommendation System",
      description: "Built a Full Stack Web Application with a hybrid recommendation system combining collaborative and content-based filtering to help users discover optimal tourist spots.",
      image: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Full Stack",
      tags: ["Machine Learning", "Recommendation System", "Web Development"],
      links: {
        github: "#"
      }
    },
    {
      id: 2,
      title: "Medicare (Android Application)",
      description: "Designed and developed an Android app that simplifies locating doctors based on user preferences. Users can find doctors or hospitals by region and specialization offline.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Mobile Development",
      tags: ["Android", "Mobile App", "Healthcare"],
      links: {
        github: "#"
      }
    },
    {
      id: 3,
      title: "Pune Metro Booking System",
      description: "Developed a user-friendly Full Stack Web App for a DBMS project using ReactJS, MySQL, and NodeJS, enabling seamless booking, cancellation, and viewing of Pune Metro tickets.",
      image: "https://images.unsplash.com/photo-1581262177000-8139a463e531?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Web Development",
      tags: ["ReactJS", "MySQL", "NodeJS"],
      links: {
        github: "#"
      }
    },
    {
      id: 4,
      title: "Weather App",
      description: "Engineered an intuitive Weather App with user-centric design using JavaScript, mastering API integration for retrieving real-time weather information.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Web Development",
      tags: ["JavaScript", "HTML", "CSS", "API Integration"],
      links: {
        github: "#",
        demo: "#"
      }
    }
  ],
  contact: {
    email: "murtuzanh@gmail.com",
    location: "Am Jesuitenhof 3, 53117, Bonn, Germany",
    availability: "Open to research collaborations and software development opportunities",
    social: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/in/murtuzahusain/",
      twitter: "https://twitter.com/",
      googleScholar: "https://scholar.google.com/"
    }
  }
};
