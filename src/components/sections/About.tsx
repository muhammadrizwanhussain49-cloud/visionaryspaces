import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Briefcase, Palette, Brain, Code } from "lucide-react";

const About = () => {
  const skills = [
    { name: "AutoCAD", icon: Code, level: "Expert" },
    { name: "Photoshop", icon: Palette, level: "Advanced" },
    { name: "Canva", icon: Palette, level: "Advanced" },
    { name: "AI Tools", icon: Brain, level: "Expert" },
    { name: "PowerPoint", icon: Briefcase, level: "Advanced" },
    { name: "Architecture Design", icon: Users, level: "Expert" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-primary">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-neon-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate architect and designer with a vision to revolutionize spaces through innovative design and cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <Card className="card-neon p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-semibold text-neon-primary">Education & Background</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Bachelor of Architecture (B.Arch)</h4>
                  <p className="text-accent mb-2">Punjab University College of Arts and Design</p>
                  <p className="text-muted-foreground">Currently pursuing • Expected 2025</p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Intermediate Education</h4>
                  <p className="text-accent mb-2">Punjab College Campus 8</p>
                  <p className="text-muted-foreground">Completed with distinction</p>
                </div>
              </div>
            </Card>

            <Card className="card-neon p-8">
              <div className="flex items-center mb-6">
                <Palette className="h-8 w-8 text-secondary mr-4" />
                <h3 className="text-2xl font-semibold text-neon-secondary">Design Philosophy</h3>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                I believe in creating spaces that harmoniously blend functionality with aesthetic appeal. 
                My approach integrates traditional architectural principles with modern technology, 
                including AI-powered design solutions to push the boundaries of what's possible in contemporary design.
              </p>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <Card className="card-neon p-8">
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-accent mr-4" />
                <h3 className="text-2xl font-semibold">Core Skills</h3>
              </div>
              <div className="grid gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 text-primary mr-3" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-gradient-neon-secondary">
                        {skill.level}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="card-neon p-8">
              <h3 className="text-2xl font-semibold mb-6">Specializations</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Architectural Design",
                  "Interior Design",
                  "Landscaping",
                  "Furniture Showrooms",
                  "AI Design Tools",
                  "Project Management"
                ].map((spec, index) => (
                  <div 
                    key={spec}
                    className="text-center p-4 rounded-lg border border-primary/30 hover:border-primary/60 transition-colors hover:shadow-glow-cyan"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-3 h-3 bg-gradient-neon-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-sm font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;