import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import projectHouse from "@/assets/project-house.jpg";
import projectMarquee from "@/assets/project-marquee.jpg";
import projectShowroom from "@/assets/project-showroom.jpg";
import projectApartment from "@/assets/project-apartment.jpg";
import projectClub from "@/assets/project-club.jpg";
import projectLandscape from "@/assets/project-landscape.jpg";
import projectInterior from "@/assets/project-interior.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Marquee Design",
      category: "Event Design",
      image: projectMarquee,
      description: "Large-scale marquee design for premium wedding events featuring elegant draping, lighting systems, and spatial optimization.",
      tools: ["AutoCAD", "3D Modeling", "Lighting Design"],
      year: "2024",
      location: "Lahore, Pakistan",
      featured: true
    },
    {
      id: 2,
      title: "Contemporary House Design",
      category: "Residential Architecture",
      image: projectHouse,
      description: "Modern residential design with sustainable features, open-plan layouts, and integrated landscape elements.",
      tools: ["AutoCAD", "Photoshop", "3D Rendering"],
      year: "2024",
      location: "Islamabad, Pakistan"
    },
    {
      id: 3,
      title: "Furniture Showroom",
      category: "Commercial Interior",
      image: projectShowroom,
      description: "Contemporary furniture showroom design focusing on product display optimization and customer flow management.",
      tools: ["AutoCAD", "Interior Design", "Lighting"],
      year: "2023",
      location: "Karachi, Pakistan"
    },
    {
      id: 4,
      title: "Apartment Complex",
      category: "Residential Development",
      image: projectApartment,
      description: "Multi-story apartment building with modern amenities, sustainable design principles, and community spaces.",
      tools: ["AutoCAD", "Structural Design", "Planning"],
      year: "2023",
      location: "Lahore, Pakistan"
    },
    {
      id: 5,
      title: "Premium Club Design",
      category: "Hospitality",
      image: projectClub,
      description: "Luxury club interior with sophisticated atmosphere, VIP areas, and state-of-the-art facilities.",
      tools: ["Interior Design", "Lighting", "Acoustics"],
      year: "2024",
      location: "Islamabad, Pakistan"
    },
    {
      id: 6,
      title: "Landscape Architecture",
      category: "Landscape Design",
      image: projectLandscape,
      description: "Comprehensive landscape design with water features, walkways, and sustainable plant selection.",
      tools: ["Landscape Design", "Irrigation Planning"],
      year: "2023",
      location: "Lahore, Pakistan"
    },
    {
      id: 7,
      title: "Modern Interior Design",
      category: "Interior Design",
      image: projectInterior,
      description: "Contemporary interior spaces with minimalist aesthetic, smart storage solutions, and natural lighting.",
      tools: ["Interior Design", "Color Theory", "Space Planning"],
      year: "2024",
      location: "Karachi, Pakistan"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-neon-primary">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my diverse range of architectural and design projects, from residential homes to commercial spaces and event designs.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="bg-gradient-neon-secondary mb-4">
              Featured Project
            </Badge>
            <h3 className="text-2xl font-semibold text-neon-secondary">Spotlight</h3>
          </div>
          
          {projects
            .filter(project => project.featured)
            .map(project => (
              <Card key={project.id} className="card-neon overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="border-primary text-primary">
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.year}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-neon-primary">{project.title}</h4>
                    <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map(tool => (
                        <Badge key={tool} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="neonPrimary" className="w-fit">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))
          }
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => !project.featured)
            .map((project, index) => (
              <Card 
                key={project.id} 
                className="card-neon overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <Button variant="neonSecondary" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-gradient-neon-secondary"
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location.split(',')[0]}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-neon-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.slice(0, 2).map(tool => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tools.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together? Let's bring your vision to life.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;