import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm currently seeking full-time opportunities and always open to discussing 
          interesting projects or collaborations. Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border card-glow">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:swarali1999@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    swarali1999@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+15715849252"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +1 (571) 584-9252
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Arlington, VA</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="space-y-3">
                  <Button 
                    variant="secondary" 
                    className="w-full justify-start gap-3 hover:scale-105 transition-transform"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/swarali-k"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn Profile
                    </a>
                  </Button>

                  <Button 
                    variant="secondary" 
                    className="w-full justify-start gap-3 hover:scale-105 transition-transform"
                    asChild
                  >
                    <a 
                      href="https://github.com/swarali7"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                      GitHub Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;