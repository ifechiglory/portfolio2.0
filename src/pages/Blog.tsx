import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { format } from "date-fns";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog_posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-flex p-6 rounded-2xl glass-card border border-primary/20">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card
                  className="group h-full glass-card border-primary/20 hover:border-primary/50 transition-all duration-500 animate-scale-in cursor-pointer neon-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{format(new Date(post.created_at), "MMM dd, yyyy")}</span>
                      <span>•</span>
                      <Clock className="h-3.5 w-3.5" />
                      <span>5 min read</span>
                    </div>
                    
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="line-clamp-2 text-base">
                      {post.content?.substring(0, 120)}...
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex p-6 rounded-2xl glass-card border border-primary/20 mb-4">
              <p className="text-lg text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;