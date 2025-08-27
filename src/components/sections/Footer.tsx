import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Heart, Code, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "about" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Services", href: "services" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" }
  ];

  const services = [
    "Architecture Design",
    "Interior Design", 
    "Landscaping",
    "Furniture Showrooms",
    "AI Design Solutions"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-dark border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-neon-primary rounded-lg flex items-center justify-center mr-4">
                  <span className="text-primary-foreground font-bold text-xl">MR</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-neon-primary">Muhammad Rizwan</div>
                  <div className="text-sm text-muted-foreground">Architect & Designer</div>
                </div>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Creating innovative architectural solutions that blend traditional design principles 
                with cutting-edge AI technology.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center 
               bg-muted/50 text-foreground/70 
               transition-all duration-300 
               hover:bg-gradient-to-tr hover:from-blue-500 hover:via-sky-500 hover:to-cyan-400 
               hover:text-white hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center 
               bg-muted/50 text-foreground/70 
               transition-all duration-300 
               hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 
               hover:text-white hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center 
               bg-muted/50 text-foreground/70 
               transition-all duration-300 
               hover:bg-gradient-to-tr hover:from-blue-600 hover:via-blue-500 hover:to-indigo-500 
               hover:text-white hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-neon-secondary mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground/70 hover:text-neon-primary transition-colors underline-neon"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-neon-secondary mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-foreground/70 flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-neon-secondary mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:muhammadrizwanhussain49@gmail.com"
                  className="flex items-center text-foreground/70 hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4  text-primary group-hover:animate-bounce" />
                  <span className="text-sm">muhammadrizwanhussain49@gmail.com</span>
                </a>
                <a 
                  href="tel:+03094987070"
                  className="flex items-center text-foreground/70 hover:text-secondary transition-colors group"
                >
                  <Phone className="h-5 w-5 mr-3 text-secondary group-hover:animate-pulse" />
                  <span className="text-sm">03094987070</span>
                </a>
                <div className="flex items-center text-foreground/70">
                  <MapPin className="h-5 w-5 mr-3 text-accent" />
                  <span className="text-sm">Lahore, Pakistan</span>
                </div>
              </div>
              <div className="mt-6">
                <Button 
                  variant="neonPrimary" 
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                >
                  Start Project
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
              <div className="text-center space-x-6 text-sm text-muted-foreground">
                <span>© {currentYear} Muhammad Rizwan. All rights reserved.</span>
              </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;