import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Palette, 
  Trees, 
  Store, 
  Brain, 
  ArrowRight,
  Compass,
  Lightbulb,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Architecture & Building Design",
      description: "Complete architectural solutions from concept to completion, including residential, commercial, and institutional projects.",
      features: ["Conceptual Design", "Technical Drawings", "3D Visualization", "Building Permits"],
      color: "primary"
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Transform spaces with innovative interior solutions that blend functionality with aesthetic appeal.",
      features: ["Space Planning", "Material Selection", "Lighting Design", "Furniture Layout"],
      color: "secondary"
    },
    {
      icon: Trees,
      title: "Landscaping",
      description: "Create outdoor environments that complement architectural designs and enhance natural beauty.",
      features: ["Garden Design", "Hardscape Planning", "Plant Selection", "Irrigation Systems"],
      color: "accent"
    },
    {
      icon: Store,
      title: "Furniture Showroom Design",
      description: "Specialized retail space design optimized for product display and customer experience.",
      features: ["Retail Layout", "Display Systems", "Customer Flow", "Brand Integration"],
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI-Assisted Design Solutions",
      description: "Leverage cutting-edge AI tools to enhance design processes and create innovative solutions.",
      features: ["AI Rendering", "Design Optimization", "Predictive Modeling", "Automated Drafting"],
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary',
          border: 'border-primary/30 hover:border-primary/60',
          glow: 'hover:shadow-glow-cyan'
        };
      case 'secondary':
        return {
          icon: 'text-secondary',
          border: 'border-secondary/30 hover:border-secondary/60',
          glow: 'hover:shadow-glow-purple'
        };
      case 'accent':
        return {
          icon: 'text-accent',
          border: 'border-accent/30 hover:border-accent/60',
          glow: 'hover:shadow-glow-blue'
        };
      default:
        return {
          icon: 'text-primary',
          border: 'border-primary/30 hover:border-primary/60',
          glow: 'hover:shadow-glow-cyan'
        };
    }
  };

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-neon-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design solutions that bridge traditional architecture with innovative technology
          </p>
        </div>

        {/* Innovation Callout */}
        <Card className="card-neon mb-16 overflow-hidden relative">
          <div className="absolute top-4 right-4">
            <Zap className="h-8 w-8 text-yellow-400 animate-pulse" />
          </div>
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-12 w-12 text-neon-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neon-secondary">
              Innovation Meets Tradition
            </h3>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              I combine time-tested architectural principles with cutting-edge AI technology to deliver 
              design solutions that are both innovative and practical. Every project benefits from this 
              unique blend of traditional expertise and modern efficiency.
            </p>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = getColorClasses(service.color);
            
            return (
              <Card 
                key={service.title}
                className={`card-neon p-6 border-2 ${colorClasses.border} ${colorClasses.glow} transition-all duration-300 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-muted/50 mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${colorClasses.icon}`} />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-neon-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="flex items-center text-sm text-muted-foreground"
                        style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}
                      >
                        <Compass className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <Card className="card-neon p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">My Design Process</h3>
            <p className="text-muted-foreground">
              A structured approach that ensures exceptional results for every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your vision, requirements, and project goals"
              },
              {
                step: "02",
                title: "Concept",
                description: "Developing initial design concepts and exploring possibilities"
              },
              {
                step: "03",
                title: "Design",
                description: "Creating detailed designs with AI-enhanced optimization"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Final deliverables and project implementation support"
              }
            ].map((phase, index) => (
              <div 
                key={phase.step}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-neon-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-bold text-lg">{phase.step}</span>
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-neon-primary transition-colors">
                  {phase.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-8">
            Let's discuss how I can help bring your architectural vision to life
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;