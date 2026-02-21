import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const recommendations = [
  {
    name: "Vighnesh Maheshwari",
    title: "SysDev II at Amazon",
    text: "Swarali and I worked together at AWS during the Summer 2025. She's a focused engineer, who is willing to go the extra mile to achieve her goals. She was a pleasure to work with and She picked up the intricacies of package management for a unique OS like Bottlerocket pretty quickly, all while also learning Rust development, and also designing the project within AWS's unique toolchains. She was able to work independently but also knew when to ask questions to ensure maximum success. I am happy to have known her and look forward to following her career as she grows!",
  },
  {
    name: "Sunil Timalsina",
    title: "Software Development Manager at AWS | Building Open Source Software",
    text: "I had the pleasure of working with Swarali at AWS in Summer 2025. She's incredibly hardworking, quick to learn, and always focused on delivering results. Whether it was tackling technical tasks or collaborating with others, she consistently showed up with dedication and a great attitude. I was impressed with how quickly she ramped up into Rust development, building a deep understanding of Bottlerocket's architecture and how its packages are structured, built, and updated. She also demonstrated strong collaboration skills—working closely with mentors and teammates, asking thoughtful questions, and contributing meaningfully, sharing up to date information to stakeholders. I'm excited to see what she does next!",
  },
];

const Recommendations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="recommendations" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gradient">Recommendations</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="p-6 bg-card/50 backdrop-blur border-border hover:card-glow transition-all duration-300 flex flex-col w-full h-full">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground/80 mb-6 leading-relaxed flex-grow text-justify">{rec.text}</p>
                <div className="border-t border-border/50 pt-4 mt-auto">
                  <h4 className="font-bold text-lg">{rec.name}</h4>
                  <p className="text-sm text-muted-foreground">{rec.title}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
