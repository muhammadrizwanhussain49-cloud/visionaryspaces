import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUp, Home, User, Briefcase, Settings, Award, Mail, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navigationItems = [
    { name: "Home", href: "hero", icon: Home },
    { name: "About", href: "about", icon: User },
    { name: "Portfolio", href: "portfolio", icon: Briefcase },
    { name: "Services", href: "services", icon: Settings },
    { name: "Experience", href: "experience", icon: Award },
    { name: "Contact", href: "contact", icon: Mail }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" }
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
      {/* Desktop Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
            : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
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
              <div className="ml-4">
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
                  className={`relative font-medium transition-colors duration-300 underline-neon ${activeSection === item.href
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
            <div>
              <Button
                variant="neonPrimary"
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Left Vertical Navigation - Desktop & Tablet */}
      <div className="fixed left-1 top-1/2 transform -translate-y-1/2 z-40 hidden md:block lg:hidden">
        <div className="flex flex-col space-y-4 bg-background/90 backdrop-blur-md rounded-2xl p-4 border border-border shadow-lg">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeSection === item.href
                    ? 'bg-primary text-primary-foreground shadow-glow-cyan'
                    : 'bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary'
                  }`}
                title={item.name}
              >
                <IconComponent className="w-5 h-5" />
                {activeSection === item.href && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Social Icons - Desktop & Tablet */}
      <div className="fixed right-1 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col space-y-3 bg-background/90 backdrop-blur-md rounded-2xl p-4 border border-border shadow-lg">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-lg flex items-center justify-center bg-muted hover:bg-secondary/20 text-muted-foreground hover:text-secondary transition-all duration-300 hover:shadow-glow-purple"
                title={social.name}
              >
                <IconComponent className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-background/95 backdrop-blur-md border-t border-border">
          <div
            className={`flex overflow-x-auto no-scrollbar px-2 transition-all duration-300 justify-start sm:justify-center`}
          >
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-col items-center flex-shrink-0 mx-2 py-2 px-3 transition-all duration-300 
              ${activeSection === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                >
                  <div
                    className={`p-1.5 rounded-lg transition-all duration-300 
                ${activeSection === item.href
                        ? "bg-primary/20 shadow-glow-cyan"
                        : "hover:bg-muted"
                      }`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs mt-1 font-medium">
                    {item.name}
                  </span>
                  {activeSection === item.href && (
                    <div className="w-4 h-0.5 bg-primary rounded-full mt-1"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

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