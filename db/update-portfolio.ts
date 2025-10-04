import { db } from "./index";
import * as schema from "@shared/schema";

const portfolioData = {
  profile: {
    name: "Murtuza Husain",
    tagline: "Energetic and results-driven Software Engineer with 2.5 years of professional experience, including 1.3 years as a Software Engineer at Avaya. Soon to complete M.S. in Computer Science at the University of Bonn and working as a Thesis Researcher at ZB Med. Specialized in designing and implementing robust software solutions, microservices architecture, and API development. Adept at fostering innovation through collaborative teamwork and delivering high-quality software solutions in dynamic environments. With a strong foundation in both academic research and practical software engineering, I bring a versatile technical skill set and a passion for solving complex challenges. Eager to contribute expertise to impactful and forward-thinking software engineering projects.",
    image: "/images/profile.png"
  },
  education: [
    {
      degree: "MSc in Computer Science",
      institution: "University of Bonn, Germany",
      period: "2023 - 2025",
      details: "Master's degree in Computer Science with specialized focus on Software Engineering, including advanced coursework in software architecture, distributed systems, and enterprise application development. Additional expertise in Machine Learning applications in software systems."
    },
    {
      degree: "Bachelor of Engineering - Information Technology (AI and ML Honors)",
      institution: "Pune Institute of Computer Technology, India",
      period: "2018 - 2022",
      details: "Graduated with CGPA: 9.74/10. Strong foundation in software engineering principles, system design, and programming methodologies."
    }
  ],
  interests: [
    {
      name: "Software Engineering",
      description: "Enterprise software architecture, microservices, API development, and system design",
      icon: "Code"
    },
    {
      name: "Distributed Systems",
      description: "Scalable system design, load balancing, and fault tolerance",
      icon: "Server"
    },
    {
      name: "DevOps & Cloud",
      description: "CI/CD pipelines, containerization, and cloud-native applications",
      icon: "Cloud"
    },
    {
      name: "Machine Learning",
      description: "Deep learning models and applications in software systems",
      icon: "Brain"
    },
    {
      name: "Natural Language Processing",
      description: "NER, coreference resolution, and text analysis",
      icon: "MessageSquare"
    },
    {
      name: "Data Science",
      description: "Analysis and processing of large datasets",
      icon: "BarChart"
    }
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Avaya",
      location: "Pune, India",
      period: "Jul 2022 - Sep 2023",
      description: "Designed and implemented a robust software ecosystem: (1) Orchestrated REST APIs adhering to OpenAPI 3.0, (2) Designed AVSC schemas for Kafka data flow,  (3) Engineered Java, Spring, and PostgreSQL microservices, (5) Enhanced bulk agent management features, (6) Designed efficient Spring Data JPA repositories, (7) Conducted JUnit testing, (8) Deployed microservices on Kubernetes, (9) Resolved UAT and production issues. Used technologies including Java, Spring Boot, Kafka, PostgreSQL, Azure, Kubernetes, Liquibase and Keycloak."
    },
    {
      title: "Master Thesis Researcher",
      company: "ZB Med",
      location: "Bonn, Germany",
      period: "Jan 2025 - Current",
      description: "Working on Comparative Evaluation of NER Techniques for Agricultural Entities. Evaluating and comparing various NER techniques such as rule-based, prompting and fine-tuning on an agricultural dataset to determine their relative effectiveness and identify the optimal strategy for domain-specific entity extraction."
    },
    {
      title: "Student Assistant Computer Science",
      company: "GESIS – Leibniz Institute for the Social Sciences",
      location: "Cologne, Germany",
      period: "Jan 2024 - Dec 2024",
      description: "Worked on research project which involved training machine learning models to perform named entity extraction of machine learning terminologies such as MlModel model mentions, dataset mentions, reference links etc. along with the relations present between them on computer science research mentions. Worked on creating scripts to perform coreference resolution on Annotated data."
    }
    
  ],
  skills: [
    { name: "Java" },
    { name: "Python" },
    { name: "JavaScript" },
    { name: "C++" },
    { name: "Microservices" },
    { name: "Software Architecture" },
    { name: "API Development" },
    { name: "Machine Learning" },
    { name: "Web Development" }
  ],
  tools: [
    { name: "Spring Boot", icon: "Spring" },
    { name: "Kafka", icon: "MessageSquare" },
    { name: "Kubernetes", icon: "Server" },
    { name: "Git", icon: "Git" },                       
    { name: "Azure", icon: "Cloud" },
    { name: "Liquibase" },
    { name: "Microservices", icon: "Layers" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Keycloak" },
    { name: "REST APIs", icon: "Share" }

  ],
  languages: [
    { code: "EN", name: "English", proficiency: "Proficient (C2)" },
    { code: "DE", name: "German", proficiency: "Basic (A1)" }
    { code: "HI", name: "Hindi", proficiency: "Native Speaker" },
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
        github: "https://github.com/murtuza10/Tourist-Spot-Recommendation-System"
      }
    },
    {
      id: 2,
      title: "Pune Metro Booking System",
      description: "Developed a user-friendly Full Stack Web App for a DBMS project using ReactJS, MySQL, and NodeJS, enabling seamless booking, cancellation, and viewing of Pune Metro tickets.",
      image: "https://images.unsplash.com/photo-1581262177000-8139a463e531?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Web Development",
      tags: ["ReactJS", "MySQL", "NodeJS"],
      links: {
        github: "https://github.com/murtuza10/SL1_L10_Pune_Metro_Booking_System"
      }
    },
    {
      id: 3,
      title: "Medicare (Android Application)",
      description: "Designed and developed an Android app that simplifies locating doctors based on user preferences. Users can find doctors or hospitals by region and specialization offline.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Mobile Development",
      tags: ["Android", "Mobile App", "Healthcare"],
      links: {
        github: "https://github.com/murtuza10/Medicare-Android-Application"
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
        github: "https://github.com/murtuza10/Weather-App",
        demo: "#"
      }
    }
  ],
  contact: {
    email: "murtuzanh@gmail.com",
    location: "Germany",
    availability: "Available immediately for software engineering roles. Ready to relocate and contribute to innovative software development projects.",
    social: {
      github: "https://github.com/murtuza10",
      linkedin: "https://www.linkedin.com/in/murtuzahusain/",
      twitter: "https://twitter.com/",
      googleScholar: "https://scholar.google.com/"
    }
  }
};

async function updatePortfolio() {
  try {
    // Update the portfolio data
    const { eq } = await import('drizzle-orm');
    
    await db.update(schema.portfolio)
      .set({
        profile: portfolioData.profile,
        education: portfolioData.education,
        interests: portfolioData.interests,
        skills: portfolioData.skills,
        tools: portfolioData.tools,
        languages: portfolioData.languages,
        experience: portfolioData.experience,
        projects: portfolioData.projects,
        contact: portfolioData.contact
      })
      .where(eq(schema.portfolio.id, 1));
      
    console.log("Portfolio data updated successfully");
  } catch (error) {
    console.error("Error updating portfolio data:", error);
  }
}

updatePortfolio();
