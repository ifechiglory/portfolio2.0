import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Zap, Award } from "lucide-react";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Git",
    "Figma",
    "REST APIs",
    "Responsive Design",
    "Accessibility",
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that matter
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-5 gap-12 items-start animate-slide-up">
          <div className="md:col-span-2 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary opacity-50 rounded-3xl blur-xl group-hover:opacity-75 transition-opacity" />
              <div className="relative aspect-square rounded-3xl overflow-hidden glass-card border border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-bold">
                Frontend Developer
              </h2>
              <div className="h-1 w-20 bg-gradient-primary rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate frontend developer with 4+ years of experience
                building responsive and user-friendly web applications. I turn
                ideas into elegant, performant web experiences that balance both
                creativity and logic. I work primarily with React, TypeScript,
                Tailwind CSS, and Vite, crafting interfaces that don't just
                function - they flow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've built admin systems, dynamic dashboards, and interactive
                web platforms that prioritize clarity, responsiveness, and that
                subtle "wow" factor. Beyond code, I'm big on design thinking and
                user experience - because great frontend isn't just about pixels
                or syntax; it's about storytelling. I love blending tech and art
                to build interfaces that connect with people on a visual and
                emotional level. When I'm not debugging or fine-tuning layouts,
                you'll probably find me exploring design trends, mentoring, or
                refactoring something that was "fine" but could be better. Let's
                just say - I believe in beautiful code, timeless design, and
                never settling for "good enough."
              </p>
              <p></p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl glass-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-violet animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-heading font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8 animate-slide-in-right">
          <h2 className="text-3xl font-heading font-bold text-center">
            Journey
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-primary" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="relative pl-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full glass-card border-2 border-primary flex items-center justify-center font-heading font-bold text-primary shadow-glow-violet">
                    {item.year}
                  </div>
                  <div className="p-6 rounded-xl glass-card border border-border hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-8 animate-scale-in">
          <h2 className="text-3xl font-heading font-bold text-center">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                className="px-5 py-2.5 text-base glass-card border border-primary/30 hover:border-primary hover:shadow-glow-violet transition-all duration-300 cursor-default neon-border"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: "scale-in 0.4s ease-out backwards",
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;