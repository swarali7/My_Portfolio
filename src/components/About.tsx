import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:card-glow transition-all duration-300 h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Virginia Tech</h3>
                  <p className="text-muted-foreground mb-1">Master of Science in Computer Science</p>
                  <p className="text-sm text-muted-foreground">Aug 2024 - Dec 2025 | GPA: 3.83/4.00</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Virginia, USA</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:card-glow transition-all duration-300 h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cummins College of Engineering</h3>
                  <p className="text-muted-foreground mb-1">Bachelor of Technology in Computer Engineering</p>
                  <p className="text-sm text-muted-foreground">Aug 2018 - Jul 2021</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Pune, India</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm a software engineer with a passion for building robust, scalable systems. 
            With experience at top tech companies and financial institutions, I've developed 
            expertise in full-stack development, cloud infrastructure, and system optimization. 
            I thrive on solving complex problems and creating innovative solutions that drive 
            real business impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;