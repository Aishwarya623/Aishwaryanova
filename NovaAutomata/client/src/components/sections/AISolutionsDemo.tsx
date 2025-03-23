import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Brain, FileText, Search, Code, LineChart, Plane, Bot, MessageSquare } from "lucide-react";

interface DemoFeature {
  icon: any;
  title: string;
  description: string;
  techStack: string[];
}

export default function AISolutionsDemo() {
  const nlpFeatures: DemoFeature[] = [
    {
      icon: Brain,
      title: "Large Language Models",
      description: "Custom-trained language models for domain-specific tasks with enhanced performance",
      techStack: ["GPT", "BERT", "T5"]
    },
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Autonomous AI agents for task automation and decision-making",
      techStack: ["Multi-Agent Systems", "Task Planning", "Reasoning"]
    },
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Natural language understanding with contextual awareness",
      techStack: ["Dialog Management", "Intent Recognition", "Context Handling"]
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Advanced document processing with structured data extraction",
      techStack: ["OCR", "NER", "Layout Analysis"]
    },
    {
      icon: Search,
      title: "Semantic Search",
      description: "Context-aware search with advanced retrieval augmented generation",
      techStack: ["Vector DB", "RAG", "Embeddings"]
    }
  ];

  const cvFeatures: DemoFeature[] = [
    {
      icon: Plane,
      title: "Drone Vision Systems",
      description: "Advanced aerial computer vision for infrastructure inspection and monitoring",
      techStack: ["Drone Integration", "3D Reconstruction", "Real-time Processing"]
    },
    {
      icon: Code,
      title: "Real-time Object Detection",
      description: "High-performance object detection for industrial applications",
      techStack: ["YOLO", "Faster R-CNN", "TensorRT"]
    },
    {
      icon: LineChart,
      title: "Quality Inspection",
      description: "Automated visual inspection with defect detection",
      techStack: ["CNN", "Anomaly Detection", "Image Segmentation"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">AI Solutions Demo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our cutting-edge AI solutions in action
          </p>
        </motion.div>

        <Tabs defaultValue="cv" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="cv">Computer Vision</TabsTrigger>
            <TabsTrigger value="nlp">Natural Language Processing</TabsTrigger>
          </TabsList>

          <TabsContent value="cv">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cvFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader>
                      <feature.icon className="h-10 w-10 text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.techStack.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nlp">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nlpFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader>
                      <feature.icon className="h-10 w-10 text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.techStack.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}