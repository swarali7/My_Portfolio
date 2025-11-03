import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, Wrench } from "lucide-react";

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
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:card-glow transition-all duration-300"
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;