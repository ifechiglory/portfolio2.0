import { Badge } from "@/components/ui/badge";

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
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Developer, Designer, Problem Solver
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-up">
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl bg-gradient-primary shadow-glow overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate frontend developer with 5+ years of experience building
              responsive and user-friendly web applications. I love turning complex
              problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the developer
              community.
            </p>
          </div>
        </div>

        <div className="space-y-6 animate-scale-in">
          <h2 className="text-3xl font-heading font-bold text-center">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 text-base border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all shadow-elegant hover:shadow-glow cursor-default"
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