import { Button } from "./ui/button";
import { Download, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download-resume');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Murtuza-CV-July25.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        // Fallback to direct link if API fails
        window.open('/documents/Murtuza-CV-July25.pdf', '_blank');
      }
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct link
      window.open('/documents/Murtuza-CV-July25.pdf', '_blank');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-accent/5 dark:from-background dark:via-secondary/10 dark:to-accent/10" id="resume">
      <div className="container px-6 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
            <h2 className="section-title">Professional CV</h2>
            <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
          </div>
          <div className="section-divider"></div>
          
          <motion.p 
            className="section-description mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get a comprehensive overview of my qualifications, work experience, and technical skills
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform border-2 border-transparent hover:border-white/20" 
              size="lg"
              onClick={handleDownload}
            >
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6" />
                <span>Download CV</span>
                <Download className="h-5 w-5 animate-bounce" />
              </div>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-6 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            PDF • Updated July 2025 • 2.1 MB
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
