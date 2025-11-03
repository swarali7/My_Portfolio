import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Movie Ticket Booking System",
    description: "Full-stack serverless application for movie ticket booking with automated data crawling and cloud infrastructure.",
    technologies: ["React", "Python", "AWS Lambda", "DynamoDB", "S3", "API Gateway", "Selenium"],
    highlights: [
      "Implemented Python script to crawl and scrape 30+ websites",
      "Built serverless backend using AWS SDK and Lambda functions",
      "Deployed React frontend on AWS EC2 instance",
    ],
  },
  {
    title: "Bookstore Web Application",
    description: "E-commerce platform with secure transactions, inventory management, and optimized user experience.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "Docker", "Jenkins"],
    highlights: [
      "Created full-stack e-commerce platform with secure payment processing",
      "Integrated RESTful APIs with MongoDB and PostgreSQL",
      "Implemented CI/CD pipelines for automated testing and deployment",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border hover:card-glow transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;