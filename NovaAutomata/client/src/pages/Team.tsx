import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Team() {
  const teamExpertise = {
    core: [
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning",
      "Neural Networks",
      "ML Operations",
      "System Architecture"
    ],
    software: [
      "Full Stack Development",
      "Backend Development",
      "Frontend Development",
      "Database Design",
      "UI/UX Design",
      "System Architecture",
      "DevOps"
    ]
  };

  return (
    <div className="container py-24 mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our team is the backbone of NovaAutomation Innovations. Hailing from India's elite institutions like IISc and IIT, our researchers and AI engineers bring a powerful blend of academic excellence and industry experience. With numerous accolades for innovative problem-solving, we're a group of driven professionals ready to take on global challenges and deliver transformative AI solutions.
        </p>
      </motion.div>

      <Tabs defaultValue="core" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="core">Research & AI Team</TabsTrigger>
          <TabsTrigger value="software">Software Development Team</TabsTrigger>
        </TabsList>

        <TabsContent value="core">
          <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Research & AI Expertise</h2>
              <p className="text-muted-foreground mb-8">
                Our core research team comprises AI specialists and researchers with advanced degrees from premier institutions. They focus on developing cutting-edge AI solutions and pushing the boundaries of what's possible with machine learning and artificial intelligence.
              </p>
              <div className="flex flex-wrap gap-3">
                {teamExpertise.core.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="software">
          <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Software Development Expertise</h2>
              <p className="text-muted-foreground mb-8">
                Our software development team brings together experienced engineers skilled in building robust, scalable applications. They excel in implementing AI solutions and creating user-friendly interfaces that make our technology accessible and impactful.
              </p>
              <div className="flex flex-wrap gap-3">
                {teamExpertise.software.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}