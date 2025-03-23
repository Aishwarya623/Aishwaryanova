import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Integrated Planning and Scheduling Application (IPSA)",
      client: "GiZ & World Resources Institute",
      description: "Web application for evaluating and optimizing electric bus system implementation costs for cities",
      tags: ["Data Science", "Optimization", "ReactJS", "Django", "PostgreSQL"]
    },
    {
      title: "DAKSH",
      client: "Transit Intelligence",
      description: "Decision support tool for public transport authorities to digitize and optimize planning for E-buses",
      tags: ["AI", "Planning", "Optimization"]
    },
    {
      title: "ERP Software",
      client: "Transit Intelligence",
      description: "Contract management software for BMTC and EV bus contractors of Bengaluru City",
      tags: ["ERP", "Contract Management", "Operations"]
    },
    {
      title: "Gene Alchemy",
      client: "Live100",
      description: "Tool for biomarker identification and drug discovery using machine learning",
      tags: ["ML", "Biomedical", "Data Analytics"]
    }
  ];

  const pastProjects = [
    {
      title: "Insurance Policy Setup Automation",
      description: "Automated processing of insurance applications using text extraction and NLP",
      tags: ["NLP", "Automation", "Insurance"]
    },
    {
      title: "Sentiment Analysis System",
      description: "BERT-based sentiment analysis for e-commerce reviews",
      tags: ["BERT", "NLP", "E-commerce"]
    },
    {
      title: "Visual Document Understanding",
      description: "Deep learning pipelines for information extraction from financial documents",
      tags: ["Computer Vision", "Deep Learning", "Finance"]
    }
  ];

  return (
    <div className="container py-24 mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transforming industries through innovative AI solutions
        </p>
      </motion.div>

      <div className="space-y-16 max-w-5xl mx-auto">
        <section>
          <h2 className="text-2xl font-bold mb-8">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                    <p className="text-primary font-medium">Client: {project.client}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="transition-all duration-300 hover:bg-primary/20">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8">Past Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="transition-all duration-300 hover:bg-primary/20">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}