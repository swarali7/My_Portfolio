import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Amazon",
    role: "SDE Summer 2025 Intern",
    location: "Seattle, WA",
    period: "May 2025 – August 2025",
    highlights: [
      "Reduced package processing execution time by 90% (76 to 8 minutes) by optimizing the data pipeline through Octocrab and Rayon for high-concurrency parallelization in Rust",
      "Strengthened software supply chain security for 100+ packages by architecting an automated Rust-based freshness tracking tool to monitor upstream repository deltas",
      "Mitigated enterprise-scale dependency risks by engineering a configurable staleness detection engine that systematically identifies and prioritizes security vulnerabilities",
    ],
  },
  {
    company: "Bank of America",
    role: "Officer; Software Engineer",
    location: "Mumbai, India",
    period: "June 2021 – August 2024",
    highlights: [
      "Boosted transaction efficiency by 50% by engineering high-performance financial applications leveraging Python-based Quartz frameworks and Oracle Database clusters",
      "Led a large-scale process re-engineering initiative, restructuring end-to-end service processes across 7 upstream systems and 2 downstream teams, reducing paperwork by 70% and enhancing cross-team collaboration",
      "Eliminated 40% of manual operational overhead by automating mission-critical workflows and documentation generation using Python and Jenkins CI/CD scripting",
      "Increased production environment stability by 45% through the design and implementation of modular unit, integration, and performance regression testing suites",
      "Accelerated developer onboarding velocity by 25% by implementing automated technical documentation tools and optimizing cross-functional knowledge transfer protocols",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>
        
        <motion.div 
          className="flex items-center justify-center gap-2 mb-16 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Award className="w-5 h-5 text-primary" />
          <p className="text-sm">Received dual Gold and Silver Awards for excellence in quality assurance and production resilience at Bank of America</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card
              className="p-8 bg-card/50 backdrop-blur border-border hover:card-glow transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{exp.company}</h3>
                    <p className="text-base sm:text-lg text-foreground/90">{exp.role}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;