import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Building, Award, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Social Media Marketing Intern",
      company: "Institute of Architects, Pakistan",
      period: "2024",
      location: "Lahore, Pakistan",
      type: "Internship",
      description: "Media team handler for IAPEX 2024, managing social media campaigns and digital marketing strategies for Pakistan's premier architecture exhibition.",
      achievements: [
        "Managed social media presence for IAPEX 2024",
        "Increased engagement by 150% during exhibition period",
        "Coordinated with international architecture firms",
        "Created content for 50+ exhibiting companies"
      ],
      skills: ["Social Media Marketing", "Content Creation", "Event Marketing", "Digital Strategy"],
      current: false
    },
    {
      id: 2,
      title: "Volunteer Coordinator",
      company: "Banjaiga Pvt. Ltd",
      period: "2023-Present",
      location: "Punjab, Pakistan",
      type: "Volunteer",
      description: "Event coordination and architecture networking, facilitating connections between professionals and organizing industry events.",
      achievements: [
        "Coordinated 15+ architecture networking events",
        "Built network of 200+ industry professionals",
        "Organized workshops on sustainable design",
        "Facilitated partnerships between firms"
      ],
      skills: ["Event Management", "Professional Networking", "Project Coordination", "Team Leadership"],
      current: true
    }
  ];

  const education = [
    {
      degree: "Bachelor of Architecture (B.Arch)",
      institution: "Punjab University College of Arts and Design",
      period: "2021-2025 (Expected)",
      status: "Currently Pursuing",
      description: "Comprehensive architecture program focusing on design principles, sustainable practices, and contemporary building technologies.",
      highlights: [
        "Dean's List for Academic Excellence",
        "Specialized in Sustainable Design",
        "Led student design competitions",
        "Thesis: AI in Architectural Design"
      ]
    },
    {
      degree: "Intermediate Education",
      institution: "Punjab College Campus 8",
      period: "2019-2021",
      status: "Completed",
      description: "Pre-engineering track with focus on mathematics, physics, and technical drawing fundamentals.",
      highlights: [
        "Graduated with Distinction",
        "Top 5% of class",
        "Technical Drawing Award",
        "Mathematics Excellence"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-primary">Experience</span> & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-neon-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience, academic excellence, and professional networking
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-12">
            <Building className="h-8 w-8 text-primary mr-4" />
            <h3 className="text-3xl font-bold">Professional Experience</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.id} 
                className="card-neon overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className="text-2xl font-bold text-neon-primary">{exp.title}</h4>
                        {exp.current && (
                          <Badge variant="secondary" className="bg-gradient-neon-secondary animate-pulse-glow">
                            Current
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-accent text-accent">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-lg font-semibold text-secondary">
                          <Building className="h-5 w-5 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:ml-8">
                      <ExternalLink className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-primary" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex}
                            className="flex items-start text-sm text-foreground/80"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-4 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-secondary" />
                        Skills Developed
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="text-xs border-secondary/50 text-secondary hover:border-secondary transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center mb-12">
            <Award className="h-8 w-8 text-secondary mr-4" />
            <h3 className="text-3xl font-bold">Education</h3>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={edu.degree} 
                className="card-neon"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className="text-2xl font-bold text-neon-secondary">{edu.degree}</h4>
                        <Badge 
                          variant={edu.status === 'Currently Pursuing' ? 'secondary' : 'outline'}
                          className={edu.status === 'Currently Pursuing' ? 'bg-gradient-neon-secondary animate-pulse' : ''}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-lg font-semibold text-primary">
                          <Building className="h-5 w-5 mr-2" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.period}
                        </div>
                      </div>

                      <p className="text-foreground/80 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-4 text-accent">Academic Highlights</h5>
                      <ul className="space-y-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li 
                            key={highlightIndex}
                            className="flex items-start text-sm text-foreground/80"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mt-16">
          <Card className="card-neon p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Professional Timeline</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="text-center">
                <div className="w-4 h-4 bg-gradient-neon-primary rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-semibold">2021</div>
                <div className="text-xs text-muted-foreground">Started B.Arch</div>
              </div>
              <div className="hidden md:block w-12 h-px bg-gradient-neon-primary"></div>
              <div className="text-center">
                <div className="w-4 h-4 bg-gradient-neon-secondary rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-semibold">2023</div>
                <div className="text-xs text-muted-foreground">Banjaiga Volunteer</div>
              </div>
              <div className="hidden md:block w-12 h-px bg-gradient-neon-primary"></div>
              <div className="text-center">
                <div className="w-4 h-4 bg-gradient-neon-primary rounded-full mx-auto mb-2 animate-pulse-glow"></div>
                <div className="text-sm font-semibold">2024</div>
                <div className="text-xs text-muted-foreground">IAP Internship</div>
              </div>
              <div className="hidden md:block w-12 h-px bg-gradient-neon-primary"></div>
              <div className="text-center">
                <div className="w-4 h-4 bg-gradient-neon-secondary rounded-full mx-auto mb-2 animate-pulse"></div>
                <div className="text-sm font-semibold">2025</div>
                <div className="text-xs text-muted-foreground">Graduation</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;