import { Button } from "@/components/ui/button";
import { ArrowDown, Eye, ExternalLink } from "lucide-react";
import projectMarquee from "@/assets/project-marquee.jpg";
import projectHouse from "@/assets/project-house.jpg";
import projectShowroom from "@/assets/project-showroom.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const featuredProjects = [
    {
      title: "Luxury Marquee Design",
      category: "Event Design",
      image: projectMarquee,
      description: "Premium wedding event design featuring elegant spatial planning and sophisticated lighting systems."
    },
    {
      title: "Contemporary House",
      category: "Residential",
      image: projectHouse,
      description: "Modern residential architecture with sustainable features and integrated landscape elements."
    },
    {
      title: "Furniture Showroom",
      category: "Commercial",
      image: projectShowroom,
      description: "Contemporary commercial space optimized for product display and customer experience."
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Header Info */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-24 pb-8 bg-gradient-to-b from-black/60 to-transparent">
        <div className="container mx-auto container-padding text-center text-white">
          <h1 className="heading-primary mb-4">
            Muhammad Rizwan
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
            Architect & Designer
          </p>
          <p className="text-body max-w-2xl mx-auto opacity-80">
            Creating innovative spaces through architecture, interior design, and landscape planning
          </p>
        </div>
      </div>

      {/* Full-Screen Project Showcase */}
      <div className="flex-1 relative">
        <div className="grid md:grid-cols-3 h-full min-h-[70vh]">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="image-overlay">
                <div className="text-center text-white p-6">
                  <div className="text-sm uppercase tracking-wider mb-2 opacity-80">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-medium mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                    <Eye className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 bg-gradient-to-t from-black/60 to-transparent">
        <div className="container mx-auto container-padding text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="default" 
              size="lg" 
              onClick={scrollToPortfolio}
              className="bg-white text-black hover:bg-white/90"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-white mx-auto opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;