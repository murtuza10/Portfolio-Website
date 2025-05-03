import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectItem } from "@/lib/types";
import { Github, FileText, Monitor } from "lucide-react";

interface ProjectsProps {
  projects?: ProjectItem[];
}

export default function Projects({ projects = [] }: ProjectsProps) {
  // Default projects if none provided
  const displayProjects = projects.length > 0 ? projects : [
    {
      id: 1,
      title: "Deep Learning for Medical Imaging",
      description: "Developed a convolutional neural network for detecting anomalies in medical scans with 92% accuracy.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Machine Learning",
      tags: ["PyTorch", "CNN", "Medical AI"],
      links: {
        github: "#",
        paper: "#",
        demo: ""
      }
    },
    {
      id: 2,
      title: "Sentiment Analysis Tool",
      description: "Created an NLP model to analyze sentiment in product reviews with 88% accuracy using transformer architecture.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "NLP",
      tags: ["BERT", "Transformers", "TensorFlow"],
      links: {
        github: "#",
        demo: "#",
        paper: ""
      }
    },
    {
      id: 3,
      title: "Climate Data Visualization",
      description: "Built an interactive dashboard to analyze and visualize global climate patterns using 50+ years of data.",
      image: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Data Science",
      tags: ["Python", "D3.js", "Pandas"],
      links: {
        github: "#",
        demo: "#",
        paper: ""
      }
    },
    {
      id: 4,
      title: "Algorithmic Trading Strategy",
      description: "Designed and implemented a machine learning-based trading algorithm that outperformed market benchmarks.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Algorithms",
      tags: ["Python", "ML", "Financial Data"],
      links: {
        github: "#",
        paper: "#",
        demo: ""
      }
    },
    {
      id: 5,
      title: "Image Generation with GANs",
      description: "Developed a Generative Adversarial Network to create realistic landscape images from text descriptions.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Deep Learning",
      tags: ["GAN", "PyTorch", "Computer Vision"],
      links: {
        github: "#",
        demo: "#",
        paper: ""
      }
    },
    {
      id: 6,
      title: "Academic Paper Recommender",
      description: "Built a recommendation system for academic papers based on user reading history and citation networks.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Systems",
      tags: ["Recommender Systems", "Graph Neural Networks", "Python"],
      links: {
        github: "#",
        paper: "#",
        demo: ""
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Showcasing my academic and research projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="relative h-48">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                )}
                {project.category && (
                  <div className="absolute top-0 right-0 bg-accent text-white text-xs px-2 py-1 m-2 rounded">
                    {project.category}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-source">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags && project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary/10 hover:bg-secondary/20 text-secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end items-center">
                  <div className="flex items-center space-x-2">
                    {project.links && project.links.github && (
                      <a href={project.links.github} className="text-gray-500 hover:text-primary transition duration-300" title="GitHub Repository">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.links && project.links.paper && (
                      <a href={project.links.paper} className="text-gray-500 hover:text-primary transition duration-300" title="Research Paper">
                        <FileText className="h-5 w-5" />
                      </a>
                    )}
                    {project.links && project.links.demo && (
                      <a href={project.links.demo} className="text-gray-500 hover:text-primary transition duration-300" title="Live Demo">
                        <Monitor className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/murtuza10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300"
          >
            <Github className="mr-2 h-5 w-5" /> View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
