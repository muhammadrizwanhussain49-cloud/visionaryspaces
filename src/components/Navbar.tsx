import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUp } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navigationItems = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Services", href: "services" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-neon-primary rounded-lg flex items-center justify-center group-hover:shadow-glow-cyan transition-all duration-300">
                  <span className="text-primary-foreground font-bold text-xl">MR</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-neon-secondary rounded-full animate-pulse"></div>
              </div>
              <div className="ml-4 hidden sm:block">
                <div className="text-lg font-bold text-neon-primary">Muhammad Rizwan</div>
                <div className="text-xs text-muted-foreground">Architect & Designer</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-medium transition-colors duration-300 underline-neon ${
                    activeSection === item.href
                      ? 'text-neon-primary'
                      : 'text-foreground hover:text-neon-primary'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-neon-primary"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button 
                variant="neonPrimary" 
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
                      activeSection === item.href
                        ? 'text-neon-primary bg-primary/10'
                        : 'text-foreground hover:text-neon-primary hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4">
                  <Button 
                    variant="neonPrimary" 
                    className="w-full"
                    onClick={() => scrollToSection('contact')}
                  >
                    Let's Talk
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <Button
          variant="neonSecondary"
          size="icon"
          className="fixed bottom-8 right-8 z-40 shadow-glow-purple bg-black"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default Navbar;