import { Button } from "./ui/button";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="resume">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-3">
            Download My CV
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300 mb-8">
            Get a complete overview of my qualifications, work experience, and skills.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white" 
            size="lg"
            onClick={() => window.open('/documents/Murtuza-CV-April25.pdf', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
