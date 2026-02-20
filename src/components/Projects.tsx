import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Adversarial Training for NLP",
    description: "Advanced NLP model with span-level reconstruction to improve wall-clock training time and clean accuracy while maintaining robustness.",
    technologies: ["Python", "PyTorch", "Transformers"],
    highlights: [
      "Reduced wall-clock training time by 5x by developing a Span Level Reconstruction (SLR) objective that captures multi-token semantic dependencies",
      "Maintained 94.45% clean accuracy while significantly lowering computational overhead through advanced span-level reconstruction over baseline token methods",
      "Stabilized performance within the first epoch by implementing selective masking of multi-token informative subsequences to enhance model semantic fidelity",
      "Verified cross-architecture robustness transfer by architecting joint training regimes across RoBERTa and DeBERTa to enforce structural regularization",
    ],
  },
  {
    title: "Enterprise Bookstore Platform",
    description: "Full-stack e-commerce platform with containerized microservices, persistent database, and CI/CD automation.",
    technologies: ["React", "TypeScript", "Node.js", "Docker"],
    highlights: [
      "Attained 100% build success rates and dev-to-prod parity by containerizing the microservices stack using Docker and automating CI/CD pipelines via GitHub Actions",
      "Optimized data retrieval latency by implementing a persistent MySQL database with advanced indexing to handle high-volume transaction queries",
      "Fortified transaction integrity and system reliability by developing a full-stack e-commerce engine with modular RESTful API integration and TypeScript type-safety",
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card
              className="p-8 bg-card/50 backdrop-blur border-border hover:card-glow transition-all duration-300 group h-full"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/80 mb-6">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-foreground/70">
                    <span className="text-accent mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary/80 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;