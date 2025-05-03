import { db } from "./index";
import * as schema from "@shared/schema";

const portfolioData = {
  profile: {
    name: "Murtuza Husain",
    tagline: "MSc Computer Science student at the University of Bonn with professional experience in Software Engineering.",
    image: "images/profile.jpeg"
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
  experience: [
    {
      title: "Research Intern",
      company: "University of Bonn, Institute of Computer Science",
      location: "Bonn, Germany",
      period: "Dec 2023 - Present",
      description: "Working with the Pattern Recognition research group on multi-modal contrastive learning for complex tasks with minimal labeled data in the domains of NLP and computer vision. Building and fine-tuning foundation models to improve text understanding."
    },
    {
      title: "Software Engineer",
      company: "Oracle",
      location: "Hyderabad, India",
      period: "Jul 2022 - Jul 2023",
      description: "Developed ITIL-based incident management systems using Spring Boot microservices architecture with RESTful APIs. Implemented API-led architecture for automated escalation paths, reducing incident resolution time by 40%. Created over 15 RESTful APIs for service management tasks."
    },
    {
      title: "Software Engineer Intern",
      company: "Oracle",
      location: "Remote",
      period: "Oct 2021 - May 2022",
      description: "Designed and developed Spring Boot microservices for real-time incident data processing. Integrated Kafka for efficient data streaming between systems and supported migration of legacy systems to cloud-native architectures, improving system reliability by 30%."
    },
    {
      title: "Summer Intern (ML/NLP)",
      company: "DRDO, Ministry of Defence",
      location: "Pune, India",
      period: "May 2021 - Jul 2021",
      description: "Implemented advanced NLP techniques for a confidential DRDO project. Delivered insights on semantic recognition strategies and assisted in implementing pattern recognition algorithms for efficient threat detection in unstructured text data."
    }
  ],
  skills: [
    { name: "Java", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "Machine Learning", percentage: 85 },
    { name: "C++", percentage: 70 },
    { name: "JavaScript", percentage: 75 },
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
