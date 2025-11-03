import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Award } from "lucide-react";

const experiences = [
  {
    company: "Amazon",
    role: "SDE Summer 2025 Intern",
    location: "Seattle, WA",
    period: "May 2025 – August 2025",
    highlights: [
      "Developed a Rust-based tool to track freshness of 100+ third-party packages, ensuring security compliance",
      "Optimized package processing pipeline reducing execution time from 76 minutes to under 8 minutes (≈90% improvement)",
      "Strengthened automation and observability in package lifecycle management",
    ],
  },
  {
    company: "Bank of America",
    role: "Officer; Software Engineer",
    location: "Mumbai, India",
    period: "June 2021 – August 2024",
    highlights: [
      "Engineered high-performance Python-based financial applications, improving transaction efficiency by 50%",
      "Implemented testing strategies that improved system stability by 45%",
      "Led large-scale process re-engineering initiative, reducing paperwork by 70%",
      "Automated operational workflows eliminating 40% of manual effort",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="flex items-center justify-center gap-2 mb-16 text-muted-foreground">
          <Award className="w-5 h-5 text-primary" />
          <p className="text-sm">Gold & Silver Global Recognition Awards recipient</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border hover:card-glow transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-lg text-foreground/90">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground md:text-right">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/80">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;