"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var schema = require("@shared/schema");
var portfolioData = {
    profile: {
        name: "Murtuza Husain",
        tagline: "Energetic and results-driven professional with 2.5 years of professional experience, including 1.3 years as a Software Engineer at Avaya. Currently pursuing an M.S. in Computer Science at the University of Bonn and working as a student assistant at ZB Med. Adept at fostering innovation through collaborative teamwork and delivering high-quality software solutions in dynamic environments. With a strong foundation in both academic research and practical application, I bring a versatile technical skill set and a passion for solving complex challenges. Eager to contribute expertise to impactful and forward-thinking projects in Computer Science.",
        image: "/images/profile.png"
    },
    education: [
        {
            degree: "MSc in Computer Science",
            institution: "University of Bonn, Germany",
            period: "2023 - 2025",
            details: "Master's degree in Computer Science with focus on Machine Learning and Software Engineering."
        },
        {
            degree: "Bachelor of Engineering - Information Technology (AI and ML Honors)",
            institution: "Pune Institute of Computer Technology, India",
            period: "2018 - 2022",
            details: "Graduated with CGPA: 9.74/10."
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
            title: "Student Assistant Computer Science",
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
        },
        {
            title: "Software Engineer",
            company: "Avaya",
            location: "Pune, India",
            period: "Jul 2022 - Sep 2023",
            description: "Designed and implemented a robust software ecosystem: (1) Orchestrated REST APIs adhering to OpenAPI 3.0, (2) Designed AVSC schemas for Kafka data flow, (3) Crafted detailed API documentation, (4) Engineered Java, Spring, and PostgreSQL microservices, (5) Enhanced bulk agent management features, (6) Designed efficient Spring Data JPA repositories, (7) Conducted JUnit testing, (8) Deployed microservices on Kubernetes, (9) Resolved UAT and production issues. Used technologies including Java, Spring Boot, Kafka, PostgreSQL, Azure, Kubernetes, and Keycloak."
        }
    ],
    skills: [
        { name: "Java", percentage: 90 },
        { name: "Python", percentage: 85 },
        { name: "Machine Learning", percentage: 85 },
        { name: "C++", percentage: 80 },
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
                github: "https://github.com/murtuza10/Tourist-Spot-Recommendation-System"
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
                github: "https://github.com/murtuza10/Medicare-Android-Application"
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
                github: "https://github.com/murtuza10/SL1_L10_Pune_Metro_Booking_System"
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
        location: "Am Jesuitenhof 3, 53117, Bonn, Germany",
        availability: "Open to research collaborations and software development opportunities",
        social: {
            github: "https://github.com/murtuza10",
            linkedin: "https://www.linkedin.com/in/murtuzahusain/",
            twitter: "https://twitter.com/",
            googleScholar: "https://scholar.google.com/"
        }
    }
};
function updatePortfolio() {
    return __awaiter(this, void 0, void 0, function () {
        var eq, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('drizzle-orm'); })];
                case 1:
                    eq = (_a.sent()).eq;
                    return [4 /*yield*/, index_1.db.update(schema.portfolio)
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
                            .where(eq(schema.portfolio.id, 1))];
                case 2:
                    _a.sent();
                    console.log("Portfolio data updated successfully");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error updating portfolio data:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
updatePortfolio();
