import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
            Hi, I'm <span className="gradient-text">Alex Rivera</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Frontend Developer
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, responsive web experiences with modern technologies.
          Passionate about clean code, user experience, and bringing ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/projects">
            <Button
              size="lg"
              className="gradient-primary text-white shadow-glow hover:opacity-90 transition-opacity group"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="hover:border-primary">
              Contact Me
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;