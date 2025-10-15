import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Loader2 } from "lucide-react";

const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work — from concept to deployment
          </p>
        </div>

        {projects && projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden glass-card border-primary/20 hover:border-primary/50 transition-all duration-500 animate-scale-in neon-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                {project.image_url && (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  </div>
                )}
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack?.map((tech) => (
                      <Badge 
                        key={tech} 
                        className="glass-card border-primary/30 text-xs px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="gap-3 relative z-10">
                  {project.github_link && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 glass-card border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                    >
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live_demo && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 gradient-primary shadow-glow-violet hover:shadow-glow-cyan transition-all duration-500"
                    >
                      <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex p-6 rounded-2xl glass-card border border-primary/20 mb-4">
              <Loader2 className="h-12 w-12 text-primary/50" />
            </div>
            <p className="text-lg text-muted-foreground">No projects to display yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;