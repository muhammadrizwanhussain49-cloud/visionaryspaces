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
    <section id="about" className="py-16 sm:py-20 ">
      <div className="container mx-auto ">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-primary">About</span> Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-neon-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate architect and designer with a vision to revolutionize spaces through
            innovative design and cutting-edge technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <Card className="card-neon p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-semibold text-neon-primary">
                  Education & Background
                </h3>
              </div>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="border-l-4 border-primary pl-4 sm:pl-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Bachelor of Architecture (B.Arch)</h4>
                  <p className="text-accent mb-1">Punjab University College of Arts and Design</p>
                  <p className="text-muted-foreground">Currently pursuing • Expected 2025</p>
                </div>
                <div className="border-l-4 border-secondary pl-4 sm:pl-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Intermediate Education</h4>
                  <p className="text-accent mb-1">Punjab College Campus 8</p>
                  <p className="text-muted-foreground">Completed with distinction</p>
                </div>
              </div>
            </Card>

            <Card className="card-neon p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-semibold text-neon-secondary">
                  Design Philosophy
                </h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                I believe in creating spaces that harmoniously blend functionality with aesthetic
                appeal. My approach integrates traditional architectural principles with modern
                technology, including AI-powered design solutions to push the boundaries of
                what's possible in contemporary design.
              </p>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <Card className="card-neon p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-accent mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-semibold">Core Skills</h3>
              </div>
              <div className="grid gap-3 sm:gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3" />
                        <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-gradient-neon-secondary text-xs sm:text-sm">
                        {skill.level}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="card-neon p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Specializations</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Architectural Design",
                  "Interior Design",
                  "Landscaping",
                  "Furniture Showrooms",
                  "AI Design Tools",
                  "Project Management",
                ].map((spec, index) => (
                  <div
                    key={spec}
                    className="text-center p-3 sm:p-4 rounded-lg border border-primary/30 hover:border-primary/60 transition-colors hover:shadow-glow-cyan"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-neon-primary rounded-full mx-auto mb-1 sm:mb-2"></div>
                    <span className="text-xs sm:text-sm font-medium">{spec}</span>
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
