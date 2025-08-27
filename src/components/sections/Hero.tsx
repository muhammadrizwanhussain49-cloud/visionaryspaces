import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
const profilePic = "/lovable-uploads/c9e25fed-2a84-4bf3-bfe4-94c9bd4dd375.png";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24 sm:pt-28 md:pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block mt-6 sm:mt-8 md:mt-12">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary shadow-glow-cyan mx-auto animate-float">
              <img
                src={profilePic}
                alt="Muhammad Rizwan - Architect & Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-neon-primary rounded-full flex items-center justify-center animate-pulse-glow">
              <span className="text-primary-foreground font-bold text-sm sm:text-base">MR</span>
            </div>
          </div>


          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block text-neon-primary">VisionarySpaces</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-neon-secondary">
            Designing the Future: Architecture Meets Innovation
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
            Architecture, Interior Design, Landscaping & AI-powered Design Solutions
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-10 sm:mb-12 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            I am an architect and designer specializing in interior design, landscaping,
            furniture showroom design, apartment and house projects, marquee designs,
            and AI-powered design solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToPortfolio}
              className="group w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Portfolio
            </Button>
            <Button
              variant="neonSecondary"
              size="lg"
              onClick={scrollToContact}
              className="group w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Icon */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping"></div>
        <div
          className="absolute top-3/4 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-secondary rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
