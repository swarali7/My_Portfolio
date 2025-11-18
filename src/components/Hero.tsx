import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, FileDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm <span className="text-gradient">Swarali Kestikar</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Software Engineer | Full Stack Developer | Cloud Enthusiast
            </motion.p>
          </motion.div>
          
          <motion.p 
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Master's student at Virginia Tech with experience building scalable systems at Amazon and Bank of America. 
            Passionate about creating efficient, innovative solutions that make a difference.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="group w-full sm:w-auto min-h-[44px]" asChild>
              <a href="#contact">
                Get In Touch
                <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group w-full sm:w-auto min-h-[44px]" asChild>
              <a 
                href="/Swarali_Kestikar_Resume.pdf"
                download="Swarali_Kestikar_Resume.pdf"
              >
                Download Resume
                <FileDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto min-h-[44px]" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>

          <motion.div 
            className="flex gap-6 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a 
              href="https://www.linkedin.com/in/swarali-k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/swarali7"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:swarali1999@gmail.com"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default Hero;