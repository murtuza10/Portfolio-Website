import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import { Link } from "wouter";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

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
    <header className="fixed w-full bg-white shadow-sm z-10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="#hero" className="text-2xl font-bold text-primary font-source tracking-tight">
            <span className="text-secondary">Murtuza</span> Husain
          </Link>

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
                href="/api/download-resume"
                download="Murtuza-CV-April25.pdf"
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
                  href="/api/download-resume"
                  download="Murtuza-CV-April25.pdf"
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
