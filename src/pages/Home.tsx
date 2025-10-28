import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
            Hi, I'm <span className="gradient-text">Ifechukwu Edet</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Frontend Developer crafting beautiful, performant web applications with cutting-edge technologies
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link to="/projects">
            <Button
              size="lg"
              className="gradient-primary text-white shadow-glow-violet hover:shadow-glow-cyan transition-all duration-500 group px-8 py-6 text-lg neon-border"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg backdrop-blur-xl"
            >
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-12">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="group p-3 rounded-xl glass-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-violet"
              aria-label={label}
            >
              <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;