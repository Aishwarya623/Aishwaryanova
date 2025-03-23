import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, MessageSquare, Database, Lock, Search, FileText, Plane, Camera, Box, Bot, Sparkles } from "lucide-react";

export default function Solutions() {
  const nlpSolutions = [
    {
      icon: Brain,
      title: "Large Language Models",
      description: "State-of-the-art LLMs for advanced language understanding and generation, powered by transformer architecture"
    },
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Specialized autonomous AI agents for task automation, decision-making, and workflow optimization"
    },
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Advanced chatbots and virtual assistants with natural language understanding and contextual responses"
    },
    {
      icon: Database,
      title: "Document Processing",
      description: "Automated digitization and processing of structured & unstructured data with high accuracy"
    },
    {
      icon: Search,
      title: "Information Retrieval",
      description: "Advanced RAG architecture for efficient information retrieval and semantic search capabilities"
    }
  ];

  const cvSolutions = [
    {
      icon: Plane,
      title: "Drone-Based Vision Systems",
      description: "Advanced aerial computer vision solutions for surveillance, inspection, and monitoring using state-of-the-art drone technology"
    },
    {
      icon: Camera,
      title: "Real-Time Object Detection",
      description: "High-performance object detection and tracking for industrial and security applications"
    },
    {
      icon: Box,
      title: "3D Scene Understanding",
      description: "Advanced depth estimation and 3D reconstruction from drone and ground-based imagery"
    },
    {
      icon: Lock,
      title: "Security & Surveillance",
      description: "Intelligent monitoring systems with anomaly detection capabilities"
    },
    {
      icon: FileText,
      title: "Quality Control",
      description: "Automated visual inspection and real-time quality monitoring"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container py-24 mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Cutting-edge AI solutions leveraging advanced NLP and Computer Vision technologies
        </p>
      </motion.div>

      <Tabs defaultValue="cv" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="cv">Computer Vision</TabsTrigger>
          <TabsTrigger value="nlp">Natural Language Processing</TabsTrigger>
        </TabsList>

        <TabsContent value="cv">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cvSolutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
              >
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <solution.icon className="h-10 w-10 text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 bg-gray-50 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Applications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Infrastructure inspection and monitoring</li>
              <li>• Agricultural crop analysis and mapping</li>
              <li>• Security and surveillance systems</li>
              <li>• Industrial quality control</li>
              <li>• Real-time aerial monitoring and analytics</li>
            </ul>
          </motion.div>
        </TabsContent>

        <TabsContent value="nlp">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {nlpSolutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
              >
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <solution.icon className="h-10 w-10 text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 bg-gray-50 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Custom-trained models for domain-specific tasks</li>
              <li>• Advanced RAG (Retrieval Augmented Generation) capabilities</li>
              <li>• Multi-agent systems for complex task automation</li>
              <li>• Secure and private data processing</li>
              <li>• Seamless integration with existing workflows</li>
            </ul>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}