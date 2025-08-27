import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  MessageCircle,
  Calendar,
  Clock,
  Facebook,
  Loader2
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    // send email
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

      .then(() => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        toast({
          title: "Something went wrong!",
          description: error.text,
          variant: "destructive",
        });
      }).finally(() => setLoading(false));
  };


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhammadrizwanhussain49@gmail.com",
      href: "mailto:muhammadrizwanhussain49@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+03094987070",
      href: "tel:+03094987070",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      hover: "hover:bg-gradient-to-tr hover:from-blue-600 hover:to-cyan-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      hover:
        "hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      hover:
        "hover:bg-gradient-to-tr hover:from-blue-500 hover:via-blue-600 hover:to-indigo-600",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-neon-primary">Collaborate</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-neon-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your architectural vision to life? I'd love to hear
            about your project and discuss how we can create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-neon p-6">
              <CardContent className="p-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-3" />
                  Get in Touch
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={info.label}
                        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border text-foreground/70 hover:text-primary transition-all duration-300 group cursor-pointer`}
                        onClick={() =>
                          info.href !== "#" && window.open(info.href, "_blank")
                        }
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="p-2 rounded-lg bg-muted/50 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-xs sm:text-sm text-muted-foreground">
                            {info.label}
                          </div>
                          <div className="font-semibold text-sm sm:text-base break-all">
                            {info.value}
                          </div>
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
                <h3 className="text-lg sm:text-xl font-bold mb-6">
                  Connect on Social
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center 
                          bg-muted/50 text-foreground/70 
                          transition-all duration-300 group hover:text-white hover:scale-110 ${social.hover}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="card-neon p-6">
              <CardContent className="p-0">
                <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent mr-2" />
                  Availability
                </h3>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium text-accent">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Start:</span>
                    <span className="font-medium text-secondary">
                      Available Now
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consultation:</span>
                    <span className="font-medium text-primary">
                      Free Initial Call
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-neon">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                  <Send className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-3" />
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
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
                      <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="subject">Subject</Label>
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
                    <Label htmlFor="message">Message *</Label>
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
                    variant="hero"
                    size="lg"
                    className="w-full group flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer a direct approach? Choose your preferred method:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="neonSecondary"
                      size="sm"
                      className="flex-1"
                      onClick={() =>
                        window.open(
                          "mailto:muhammadrizwanhussain49@gmail.com",
                          "_blank"
                        )
                      }
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Directly
                    </Button>
                    <Button
                      variant="portfolio"
                      size="sm"
                      className="flex-1"
                      onClick={() =>
                        window.open("tel:+03094987070", "_blank")
                      }
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
