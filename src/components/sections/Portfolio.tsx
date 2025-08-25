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
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-6">
            Selected Work
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-body max-w-2xl mx-auto">
            A collection of architectural and design projects spanning residential, commercial, and hospitality spaces.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          {projects
            .filter(project => project.featured)
            .map(project => (
              <div key={project.id} className="grid lg:grid-cols-2 gap-0 card-minimal overflow-hidden">
                <div className="relative overflow-hidden group h-96 lg:h-[500px]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="image-overlay text-white">
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center bg-card">
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <Badge variant="outline" className="border-primary text-primary font-medium">
                      {project.category}
                    </Badge>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <h3 className="heading-secondary mb-6">{project.title}</h3>
                  <p className="text-body mb-8">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.map(tool => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="default">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
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
                className="card-minimal overflow-hidden group"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="image-overlay text-white">
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-white/90 text-foreground"
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location.split(',')[0]}
                    </div>
                  </div>
                  <h4 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
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
        <div className="text-center mt-20">
          <p className="text-body mb-8">
            Ready to start your next project?
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;