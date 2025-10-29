// src/pages/AboutMe.jsx
import { motion } from "framer-motion";
import { Code2, Laptop, Globe, Briefcase, Sparkles } from "lucide-react";

const AboutMe = () => {
  const skills = [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "Firebase",
    "Git & GitHub",
    "Redux",
    "TypeScript",
    "UI/UX Implementation",
    "API Integration",
    "State Management",
  ];

  const experiences = [
    {
      year: "2024 - Present",
      role: "Frontend Developer",
      company: "Attueyi Coding Academy",
      description:
        "Built and maintained responsive React apps using Vite and Tailwind. Tutored students on Frontend Development",
      icon: <Briefcase className="text-primary w-5 h-5" />,
    },
    {
      year: "2025",
      role: "Frontend Developer (Contract)",
      company: "Garderners For Africa",
      description:
        "Built and maintained a responsive React school portal using Vite, Tailwind and Next. Built responsive user dashboards. Integrated RESTful APIs to fetch and display dynamic data. Managed state using React Redux Toolkit",
      icon: <Briefcase className="text-primary w-5 h-5" />,
    },
    {
      year: "2022 - 2023",
      role: "Frontend Developer (Intern)",
      company: "Daabo Software Engineering Co",
      description:
        "Delivered scalable, pixel-perfect web apps with Firebase backends and optimized SEO performance. Built and managed user dashboards",
      icon: <Laptop className="text-primary w-5 h-5" />,
    },
    {
      year: "2021 - 2023",
      role: "Frontend Intern",
      company: "ADA Project",
      description:
        "Worked on converting Figma designs into functional components. Gained production-level experience in Git workflow.",
      icon: <Globe className="text-primary w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100  dark:from-[#0b0c0f] dark:to-[#0b0c0f] text-gray-800 dark:text-gray-100 transition-colors duration-500 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/profile.jpg"
              alt="Efay portrait"
              className="w-72 h-72 object-cover rounded-2xl shadow-xl border-2 border-primary"
            />
            <h1 className="text-4xl font-bold mt-6">Hey, I'm Ife 👋</h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              I'm a Frontend Developer who builds intuitive, responsive web
              experiences with React, Vite, and Tailwind CSS. I focus on
              performance, design consistency, and clean code that scales.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">
                “Code it clean. Make it beautiful.”
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" /> Experience
              </h2>
              <div className="relative border-l border-gray-300 dark:border-gray-700 ml-3">
                {experiences.map((exp, index) => (
                  <div key={index} className="mb-8 ml-6">
                    <div className="absolute -left-3.5 flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 border border-primary">
                      {exp.icon}
                    </div>
                    <h3 className="font-semibold text-lg">
                      {exp.role} -{" "}
                      <span className="text-primary">{exp.company}</span>
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.year}
                    </span>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 justify-center">
            <Code2 className="w-5 h-5 text-primary" /> Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="p-3 bg-gray-300 dark:bg-gray-800 rounded-xl text-center text-sm font-medium hover:scale-105 transition-transform"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutMe;
