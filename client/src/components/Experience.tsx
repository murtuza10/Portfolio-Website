import { ExperienceItem } from "@/lib/types";
import { BriefcaseIcon, BuildingIcon, MapPinIcon, CalendarIcon } from "lucide-react";

interface ExperienceProps {
  experience?: ExperienceItem[];
}

export default function Experience({ experience = [] }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey across different organizations and roles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-secondary pl-6 ml-6">
            {experience.map((exp, index) => (
              <div key={index} className="mb-10 relative">
                <div className="absolute -left-8 mt-2 w-4 h-4 rounded-full bg-secondary border-4 border-white"></div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <div className="flex items-center text-secondary px-3 py-1 rounded-full bg-secondary/10 text-sm font-medium mt-2 md:mt-0 w-fit">
                      <CalendarIcon size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <BuildingIcon size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPinIcon size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
