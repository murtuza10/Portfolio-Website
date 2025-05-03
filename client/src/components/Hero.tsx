import { Button } from "@/components/ui/button";
import { ProfileData } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroProps {
  profile?: ProfileData;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-24 bg-primary text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold font-source leading-tight mb-4">
              Computer Science <span className="text-secondary">Innovator</span> & Researcher
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-inter leading-relaxed">
              {profile?.tagline || "MSc Computer Science student at the University of Bonn, specializing in artificial intelligence and machine learning."}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#projects" 
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
                 className="btn-primary">
                View Projects
              </a>
              <a href="#contact"
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
                 className="btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
                <Avatar className="w-full h-full">
                  <AvatarImage src={profile?.image?.startsWith('/') ? profile.image : `/${profile?.image}` || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} 
                               alt="Murtuza Husain profile photo" 
                               className="w-full h-full object-cover" />
                  <AvatarFallback className="text-4xl">MH</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-primary p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path fill="#F9FAFB" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
}
