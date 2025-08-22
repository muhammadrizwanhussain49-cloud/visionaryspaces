import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
const profilePic = "/lovable-uploads/6921e7be-0375-4a3d-993b-ec9222c377ec.png";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rotate-45 animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-secondary/30 rotate-12 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/20 rotate-45 animate-pulse"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-glow-cyan mx-auto animate-float">
              <img 
                src={profilePic} 
                alt="Muhammad Rizwan - Architect & Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-neon-primary rounded-full flex items-center justify-center animate-pulse-glow">
              <span className="text-primary-foreground font-bold">MR</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-neon-primary">VisionarySpaces</span>
          </h1>

          {/* Hero Tagline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-neon-secondary">
            Designing the Future: Architecture Meets Innovation
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Architecture, Interior Design, Landscaping & AI-powered Design Solutions
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            I am an architect and designer specializing in interior design, landscaping, 
            furniture showroom design, apartment and house projects, marquee designs, 
            and AI-powered design solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToPortfolio}
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Portfolio
            </Button>
            <Button 
              variant="neonSecondary" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;