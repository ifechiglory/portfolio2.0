import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
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
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts, tutorials, and insights
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card
                  className="group hover:shadow-glow transition-all duration-300 cursor-pointer animate-slide-up border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <time className="text-sm text-muted-foreground whitespace-nowrap">
                        {format(new Date(post.created_at), "MMM dd, yyyy")}
                      </time>
                    </div>
                    <CardDescription className="line-clamp-2 text-base">
                      {post.content.substring(0, 150)}...
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            <p>No blog posts published yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;