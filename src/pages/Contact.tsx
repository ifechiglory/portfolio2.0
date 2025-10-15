import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Github, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert([{
        name: data.name,
        email: data.email,
        message: data.message
      }]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <div className="p-8 rounded-2xl glass-card border border-primary/20 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">Get in touch</h2>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "contact@example.com", href: "mailto:contact@example.com" },
                  { icon: Github, label: "GitHub", value: "@username", href: "https://github.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "/in/username", href: "https://linkedin.com" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label !== "Email" ? "_blank" : undefined}
                    rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card border border-border hover:border-primary/50 transition-all duration-300 group neon-border"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-slide-in-right">
            <div className="p-8 rounded-2xl glass-card border border-primary/20 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name")}
                  className="glass-card border-border focus:border-primary transition-colors"
                />
                {errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className="glass-card border-border focus:border-primary transition-colors"
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  {...register("message")}
                  className="glass-card border-border focus:border-primary transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary shadow-glow-violet hover:shadow-glow-cyan transition-all duration-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;