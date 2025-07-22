import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, Sun, Moon } from "lucide-react";
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold font-source tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              href="#hero" 
              className={`${
                isScrolled ? 'text-primary dark:text-white' : 'text-white'
              } transition-colors duration-300`}
            >
              <span className="text-secondary">Murtuza</span> Husain
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${
                    activeSection === item.href.replace('#', '') ? 'active' : ''
                  } ${
                    isScrolled ? 'text-primary dark:text-white' : 'text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = item.href.replace('#', '');
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className={`p-2 ${
                isScrolled ? 'text-primary dark:text-white' : 'text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`py-2 px-4 rounded-lg transition-colors ${
                      isScrolled 
                        ? 'text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' 
                        : 'text-white hover:bg-white/20'
                    }`}
                    whileHover={{ x: 10 }}
                    onClick={(e) => {
                      e.preventDefault();
                      closeMobileMenu();
                      const targetId = item.href.replace('#', '');
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  onClick={toggleTheme}
                  className={`flex items-center space-x-2 py-2 px-4 rounded-lg transition-colors ${
                    isScrolled 
                      ? 'text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' 
                      : 'text-white hover:bg-white/20'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  activeSection === item.href.substring(1) ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <Button className="flex items-center" asChild>
              <a
                href="/documents/Murtuza-CV-April25.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2" id="mobile-menu">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 px-1 font-medium text-primary hover:text-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = item.href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth",
                      });
                      closeMobileMenu();
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Button className="flex items-center w-fit" asChild>
                <a
                  href="/documents/Murtuza-CV-April25.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
