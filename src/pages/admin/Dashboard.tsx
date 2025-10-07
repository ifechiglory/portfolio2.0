import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FolderOpen, Mail, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate("/login");
  };

  const adminSections = [
    {
      title: "Projects",
      description: "Manage your portfolio projects",
      icon: FolderOpen,
      link: "/admin/projects",
      color: "text-primary",
    },
    {
      title: "Blog Posts",
      description: "Create and edit blog posts",
      icon: FileText,
      link: "/admin/blog",
      color: "text-accent",
    },
    {
      title: "Messages",
      description: "View contact form submissions",
      icon: Mail,
      link: "/admin/messages",
      color: "text-secondary-foreground",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between animate-fade-in">
          <div>
            <h1 className="text-4xl font-heading font-bold">
              Admin <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your portfolio content
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {adminSections.map((section, index) => (
            <Link key={section.link} to={section.link}>
              <Card
                className="group hover:shadow-glow transition-all duration-300 cursor-pointer animate-scale-in border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <section.icon className={`h-10 w-10 mb-2 ${section.color}`} />
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;