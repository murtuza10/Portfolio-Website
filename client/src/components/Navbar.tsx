import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      setIsScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-secondary/20' 
          : 'bg-gradient-to-r from-black/20 via-transparent to-black/20 backdrop-blur-sm'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: isScrolled 
          ? undefined 
          : 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)'
      }}
    >
      {/* Animated background particles */}
      {!isScrolled && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-bounce"></div>
          <div className="absolute top-0 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-secondary/20 rounded-full animate-ping"></div>
        </div>
      )}
      
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <motion.div
            className="text-2xl font-bold font-source tracking-tight"
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              href="#hero" 
              className={`${
                isScrolled ? 'text-primary dark:text-white' : 'text-white'
              } transition-all duration-300 hover:text-secondary cursor-pointer relative overflow-hidden`}
              style={{
                textShadow: !isScrolled ? '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)' : 'none'
              }}
            >
              <span className="relative z-10 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-extrabold">
                Murtuza
              </span>
              <span className="ml-2 text-current">Husain</span>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                  activeSection === item.href.slice(1)
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                    : isScrolled
                      ? 'text-gray-600 dark:text-gray-300 hover:text-secondary hover:bg-secondary/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2
                }}
                style={{
                  boxShadow: activeSection === item.href.slice(1) 
                    ? "0 10px 30px rgba(59, 130, 246, 0.3)"
                    : "0 0px 0px rgba(0, 0, 0, 0)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                onClick={(e) => {
                  e.preventDefault();
                  const targetSection = document.getElementById(item.href.slice(1));
                  if (targetSection) {
                    window.scrollTo({
                      top: targetSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full opacity-20"
                    layoutId="activeNavItem"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
            
            {/* Enhanced Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`ml-4 p-3 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-secondary/10 to-accent/10 text-primary dark:text-white hover:from-secondary/20 hover:to-accent/20' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              style={{
                boxShadow: !isScrolled ? '0 0 20px rgba(59, 130, 246, 0.3)' : '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-primary dark:text-white' : 'text-white'
              }`}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden mt-6 pb-6 border-t border-white/20 dark:border-gray-700"
            >
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'bg-gradient-to-r from-secondary to-accent text-white'
                        : isScrolled 
                          ? 'text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' 
                          : 'text-white hover:bg-white/20'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    onClick={(e) => {
                      e.preventDefault();
                      closeMobileMenu();
                      const targetSection = document.getElementById(item.href.slice(1));
                      if (targetSection) {
                        window.scrollTo({
                          top: targetSection.offsetTop - 80,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Mobile Theme Toggle */}
                <motion.button
                  onClick={() => {
                    toggleTheme();
                    closeMobileMenu();
                  }}
                  className={`mt-4 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 ${
                    isScrolled 
                      ? 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-white' 
                      : 'bg-white/20 text-white'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span>Switch Theme</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}