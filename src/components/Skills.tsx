import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "Rust", "HTML/CSS"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "NoSQL", "Oracle DB", "Hadoop"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, Lambda, S3)", "Azure", "GCP", "Docker", "Jenkins", "CI/CD", "Ansible"],
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    skills: ["React.js", "Next.js", "Spring Boot", "Node.js", "REST APIs", "Git", "JIRA", "Tableau"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                className="p-6 bg-card/50 backdrop-blur border-border hover:card-glow transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-sm text-foreground/70 bg-secondary/30 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;