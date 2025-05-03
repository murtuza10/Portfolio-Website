import { Card, CardContent } from "@/components/ui/card";
import { EducationItem, InterestItem } from "@/lib/types";
import { Brain, Bot, Eye, Database } from "lucide-react";

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
        <div className="mb-12 text-center">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Computer Science graduate student with a passion for solving complex problems through innovative technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 font-source text-primary">Academic Background</h3>
              <ul className="space-y-6">
                {education.length > 0 ? (
                  education.map((item, index) => (
                    <li key={index} className="border-l-4 border-secondary pl-4 py-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-lg">{item.degree}</h4>
                        <span className="text-sm bg-secondary bg-opacity-10 text-secondary px-2 py-1 rounded">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-1">{item.institution}</p>
                      <p className="text-sm text-gray-500">{item.details}</p>
                    </li>
                  ))
                ) : (
                  // Fallback data if none is provided
                  <>
                    <li className="border-l-4 border-secondary pl-4 py-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-lg">MSc in Computer Science</h4>
                        <span className="text-sm bg-secondary bg-opacity-10 text-secondary px-2 py-1 rounded">2022 - Present</span>
                      </div>
                      <p className="text-gray-600 mb-1">University of Bonn, Germany</p>
                      <p className="text-sm text-gray-500">
                        Specializing in Machine Learning and Artificial Intelligence. Thesis on "Deep Learning Applications in Computer Vision."
                      </p>
                    </li>
                    <li className="border-l-4 border-secondary pl-4 py-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-lg">BSc in Computer Science</h4>
                        <span className="text-sm bg-secondary bg-opacity-10 text-secondary px-2 py-1 rounded">2018 - 2022</span>
                      </div>
                      <p className="text-gray-600 mb-1">Technical University of Munich, Germany</p>
                      <p className="text-sm text-gray-500">
                        Focus on Algorithms and Data Structures. Graduated with honors (GPA: 3.8/4.0).
                      </p>
                    </li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 font-source text-primary">Research Interests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {interests.length > 0 ? (
                  interests.map((interest, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-4">
                        {interestIcons[interest.name] || <Brain className="h-6 w-6 text-primary" />}
                      </div>
                      <h4 className="font-semibold mb-2">{interest.name}</h4>
                      <p className="text-sm text-gray-600">{interest.description}</p>
                    </div>
                  ))
                ) : (
                  // Fallback data if none is provided
                  <>
                    <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-4">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Machine Learning</h4>
                      <p className="text-sm text-gray-600">Deep learning models and applications</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-4">
                        <Bot className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">AI Ethics</h4>
                      <p className="text-sm text-gray-600">Responsible AI development</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-4">
                        <Eye className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Computer Vision</h4>
                      <p className="text-sm text-gray-600">Image processing and analysis</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mb-4">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Big Data</h4>
                      <p className="text-sm text-gray-600">Large-scale data analysis</p>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
