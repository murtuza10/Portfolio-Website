import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Eye, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface ViewData {
  totalViews: number;
  lastViewedAt: string;
}

export default function ViewCounter() {
  const queryClient = useQueryClient();
  const [animatedCount, setAnimatedCount] = useState(0);

  // Fetch current view count
  const { data: viewData, isLoading, error } = useQuery<ViewData>({
    queryKey: ["/api/views"],
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 1000,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });



  // Increment view count mutation
  const incrementViews = useMutation({
    mutationFn: async () => {
      try {
        const response = await fetch("/api/views/increment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          console.error("Failed to increment views:", response.status, response.statusText);
          throw new Error(`Failed to increment views: ${response.status}`);
        }
        return response.json();
      } catch (error) {
        console.error("ViewCounter increment error:", error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/views"] });
    },
    onError: (error) => {
      console.error("ViewCounter mutation error:", error);
    },
  });

  // Increment views on mount (only once per session)
  useEffect(() => {
    const hasIncremented = sessionStorage.getItem("view-incremented");
    if (!hasIncremented) {
      incrementViews.mutate();
      sessionStorage.setItem("view-incremented", "true");
    }
  }, []);



  // Animate the counter
  useEffect(() => {
    if (viewData?.totalViews) {
      const target = viewData.totalViews;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = target / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          setAnimatedCount(target);
          clearInterval(timer);
        } else {
          setAnimatedCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [viewData?.totalViews]);

  // Handle loading and error states
  if (isLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-[9999]"
      >
        <Card className="glass-card p-4 w-64 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          </div>
        </Card>
      </motion.div>
    );
  }

  // If there's an error, still show the component with fallback data
  if (error) {
    console.error("ViewCounter error:", error);
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-[9999] pointer-events-auto"
        style={{ 
          position: 'fixed', 
          bottom: '24px', 
          right: '24px', 
          zIndex: 9999,
          transform: 'translateZ(0)'
        }}
      >
        <Card className="glass-card p-4 w-64 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-secondary/20 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-secondary animate-pulse" />
              <h3 className="font-semibold text-sm gradient-text">Portfolio Views</h3>
            </div>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          
          <div className="space-y-3">
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold gradient-text"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3 
                }}
              >
                --
              </motion.div>
              <p className="text-xs text-muted-foreground">Loading...</p>
            </div>
          </div>
          
          <div className="mt-3 h-1 bg-gradient-to-r from-secondary to-accent rounded-full pulse-glow"></div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-[9999] pointer-events-auto"
      style={{ 
        position: 'fixed', 
        bottom: '24px', 
        right: '24px', 
        zIndex: 9999,
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
    >
      <Card className="glass-card p-4 w-64 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-secondary/20 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-secondary animate-pulse" />
            <h3 className="font-semibold text-sm gradient-text">Portfolio Views</h3>
          </div>
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        
        <div className="space-y-3">
          <div className="text-center">
            <motion.div 
              className="text-3xl font-bold gradient-text"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260,
                damping: 20,
                delay: 0.3 
              }}
            >
              {animatedCount.toLocaleString()}
            </motion.div>
            <p className="text-xs text-muted-foreground">Total Views</p>
          </div>
          
          {viewData?.lastViewedAt && (
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>
                Last: {new Date(viewData.lastViewedAt).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>
        
        <div className="mt-3 h-1 bg-gradient-to-r from-secondary to-accent rounded-full pulse-glow"></div>
      </Card>
    </motion.div>
  );
}