import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Advanced LLMs and document processing solutions for automated text understanding and generation",
      features: ["Document Digitization", "Information Extraction", "Text Analytics"]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "State-of-the-art object detection and recognition systems for security and quality control",
      features: ["Object Detection", "Face Recognition", "Quality Inspection"]
    },
    {
      icon: Cpu,
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed for your specific industry needs and challenges",
      features: ["Industry-Specific Models", "Secure Implementation", "Scalable Architecture"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge AI technologies to solve complex business challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <solution.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}