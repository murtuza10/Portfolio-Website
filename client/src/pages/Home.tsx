import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { portfolioData } from "@/data/portfolio-data";

export default function Home() {
  const { data } = useQuery({
    queryKey: ['/api/portfolio'],
    staleTime: Infinity,
    initialData: portfolioData
  });

  useEffect(() => {
    // Set the page title
    document.title = "Murtuza Husain - Computer Science Portfolio";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional portfolio of Murtuza Husain, MSc Computer Science student at University of Bonn');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional portfolio of Murtuza Husain, MSc Computer Science student at University of Bonn';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero profile={data?.profile} />
        <About education={data?.education} interests={data?.interests} />
        <Skills skills={data?.skills} tools={data?.tools} languages={data?.languages} />
        <Projects projects={data?.projects} />
        <Contact contact={data?.contact} />
      </main>
      <Footer profile={data?.profile} />
    </div>
  );
}
