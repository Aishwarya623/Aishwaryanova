import { useEffect } from "react";
import Head from "@/components/common/Head";
import Hero from "@/components/sections/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Building2, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Solutions",
      description: "State-of-the-art NLP and Computer Vision technologies tailored for your needs."
    },
    {
      icon: Code,
      title: "Indigenous Development",
      description: "Fully in-house developed solutions ensuring data privacy and security."
    },
    {
      icon: Building2,
      title: "Industry Expertise",
      description: "Deep experience across manufacturing, healthcare, BFSI, and smart cities."
    },
    {
      icon: LineChart,
      title: "Research Background",
      description: "Team from IISc and IITs with strong research and industry expertise."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Head />
      <Hero />
      <section 
        className="py-24 bg-gradient-to-b from-gray-50 to-white w-full"
        aria-labelledby="features-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="features-heading" 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              tabIndex={0}
            >
              Why Choose NovaAutomata
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine academic excellence with industry expertise to deliver cutting-edge AI solutions.
            </p>
          </motion.div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
            aria-label="Features"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                role="listitem"
              >
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <feature.icon 
                      className="h-12 w-12 text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}