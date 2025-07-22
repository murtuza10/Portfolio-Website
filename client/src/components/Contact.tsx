import { useState } from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Calendar, Github, Linkedin, Twitter, Send, Sparkles, MessageCircle, Phone, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ContactData } from "@/lib/types";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  contact?: ContactData;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

export default function Contact({ contact }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message Saved",
        description: "Your message has been saved to the database. In a real implementation, this would send an email notification.",
        variant: "default"
      });
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Default contact info if none provided
  const contactInfo = contact || {
    email: "max.wagner@example.com",
    location: "University of Bonn, Germany",
    availability: "Open to research collaborations and internship opportunities",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      googleScholar: "#"
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-2 h-2 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-64 right-20 w-1 h-1 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-48 left-1/3 w-1.5 h-1.5 bg-secondary/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-12 w-1 h-1 bg-secondary/25 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-3 rounded-full bg-gradient-to-r from-secondary to-accent shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
          </motion.div>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Interested in collaboration or have questions about my research? Feel free to reach out! Let's build something amazing together.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-900/60 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
              
              <CardContent className="p-8 relative z-10">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-secondary to-accent">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                </motion.div>
                
                <div className="space-y-6">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group/item"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md">
                      <motion.div 
                        className="flex-shrink-0 p-3 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 group-hover/item:from-secondary/30 group-hover/item:to-accent/30 transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Mail className="h-5 w-5 text-secondary" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Email</h4>
                        <motion.a 
                          href={`mailto:${contactInfo.email}`} 
                          className="text-secondary hover:text-accent transition-colors duration-300 font-medium"
                          whileHover={{ scale: 1.02 }}
                        >
                          {contactInfo.email}
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group/item"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md">
                      <motion.div 
                        className="flex-shrink-0 p-3 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 group-hover/item:from-secondary/30 group-hover/item:to-accent/30 transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <MapPin className="h-5 w-5 text-secondary" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Location</h4>
                        <p className="text-gray-600 dark:text-gray-400">{contactInfo.location}</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Availability */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group/item"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-900/40 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md">
                      <motion.div 
                        className="flex-shrink-0 p-3 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 group-hover/item:from-secondary/30 group-hover/item:to-accent/30 transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Calendar className="h-5 w-5 text-secondary" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Availability</h4>
                        <p className="text-gray-600 dark:text-gray-400">{contactInfo.availability}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Enhanced Social Links */}
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-accent" />
                    Connect with me
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <motion.a 
                      href={contactInfo.social.github} 
                      className="group relative p-4 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-secondary hover:to-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    </motion.a>
                    
                    <motion.a 
                      href={contactInfo.social.linkedin} 
                      className="group relative p-4 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-secondary hover:to-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    </motion.a>
                    
                    <motion.a 
                      href={contactInfo.social.twitter} 
                      className="group relative p-4 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-secondary hover:to-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    </motion.a>
                    
                    <motion.a 
                      href={contactInfo.social.googleScholar} 
                      className="group relative p-4 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-secondary hover:to-accent transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269z" />
                        <path d="M12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                      </svg>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    </motion.a>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-900/60 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-l from-accent/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
              
              <CardContent className="p-8 relative z-10">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent to-secondary">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    Send a Message
                  </h3>
                </motion.div>
              
                <Form {...form}>
                  <motion.form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-800 dark:text-gray-200 font-medium">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-secondary/20 focus:border-secondary/50 transition-colors duration-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-800 dark:text-gray-200 font-medium">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@example.com" 
                                type="email" 
                                {...field} 
                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-secondary/20 focus:border-secondary/50 transition-colors duration-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-800 dark:text-gray-200 font-medium">Subject</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="What's this about?" 
                                {...field} 
                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-secondary/20 focus:border-secondary/50 transition-colors duration-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-800 dark:text-gray-200 font-medium">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell me about your project, collaboration ideas, or any questions you have..." 
                                rows={5} 
                                {...field} 
                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-secondary/20 focus:border-secondary/50 transition-colors duration-300 resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        <motion.div
                          className="flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              <span>Send Message</span>
                            </>
                          )}
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
