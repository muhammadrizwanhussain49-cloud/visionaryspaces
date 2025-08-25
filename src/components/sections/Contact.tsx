import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  Calendar,
  Clock
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhammadrizwanhussain49@gmail.com",
      href: "mailto:muhammadrizwanhussain49@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+03094987070",
      href: "tel:+03094987070",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "primary"
    },
    {
      icon: Instagram,
      label: "Instagram", 
      href: "#",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary hover:text-primary border-primary/30 hover:border-primary hover:shadow-glow-cyan';
      case 'secondary':
        return 'text-secondary hover:text-secondary border-secondary/30 hover:border-secondary hover:shadow-glow-purple';
      case 'accent':
        return 'text-accent hover:text-accent border-accent/30 hover:border-accent hover:shadow-glow-blue';
      default:
        return 'text-primary hover:text-primary border-primary/30 hover:border-primary hover:shadow-glow-cyan';
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-neon-primary">Collaborate</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your architectural vision to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="card-neon p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const colorClasses = getColorClasses(info.color);
                    
                    return (
                      <div 
                        key={info.label}
                        className={`flex items-center p-4 rounded-lg border ${colorClasses} transition-all duration-300 group cursor-pointer`}
                        onClick={() => info.href !== '#' && window.open(info.href, '_blank')}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="p-2 rounded-lg bg-muted/50 mr-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className={`h-5 w-5 ${info.color === 'primary' ? 'text-primary' : info.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-muted-foreground">{info.label}</div>
                          <div className="font-semibold">{info.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-neon p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    const colorClasses = getColorClasses(social.color);
                    
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-12 h-12 rounded-lg border ${colorClasses} flex items-center justify-center transition-all duration-300 group`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Icon className={`h-5 w-5 ${social.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="card-neon p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-accent mr-2" />
                  Availability
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium text-accent">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Start:</span>
                    <span className="font-medium text-secondary">Available Now</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consultation:</span>
                    <span className="font-medium text-primary">Free Initial Call</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-neon">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-muted/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-muted/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project inquiry, consultation, etc."
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-muted/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, requirements, timeline, and any specific needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-muted/50 border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="w-full group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer a direct approach? Choose your preferred method:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open('mailto:muhammadrizwanhussain49@gmail.com', '_blank')}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Directly
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open('tel:+03094987070', '_blank')}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;