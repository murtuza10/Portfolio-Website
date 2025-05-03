import { Link } from "wouter";
import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ProfileData } from "@/lib/types";

interface FooterProps {
  profile?: ProfileData;
}

export default function Footer({ profile }: FooterProps) {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-2xl font-bold font-source mb-4">
              <span className="text-secondary">Max</span> Wagner
            </h3>
            <p className="text-gray-300 mb-4">
              {profile?.tagline || "MSc Computer Science student specializing in AI and Machine Learning at the University of Bonn."}
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/" className="text-gray-300 hover:text-secondary transition duration-300" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" className="text-gray-300 hover:text-secondary transition duration-300" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/" className="text-gray-300 hover:text-secondary transition duration-300" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:max.wagner@example.com" className="text-gray-300 hover:text-secondary transition duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-secondary transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      window.scrollTo({
                        top: aboutSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-300 hover:text-secondary transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const skillsSection = document.getElementById('skills');
                    if (skillsSection) {
                      window.scrollTo({
                        top: skillsSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-300 hover:text-secondary transition duration-300"
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
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-secondary transition duration-300"
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
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Resume</h4>
            <p className="text-gray-300 mb-4">
              Download my resume to learn more about my academic background, skills, and achievements.
            </p>
            <a 
              href="/api/download-resume" 
              className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition duration-300" 
              download="Murtuza-CV-April25.pdf"
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Murtuza Husain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
