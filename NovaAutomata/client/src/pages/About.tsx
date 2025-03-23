import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container py-24 mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Building world-class AI solutions from India
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6 leading-relaxed">
                At NovaAutomation Innovations Pvt. Ltd., we are a passionate team of researchers and AI engineers united by a bold dream: to build a world-class AI company rooted in India, serving the globe.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Our founders and core team bring a wealth of expertise from India's prestigious institutions – IISc and IIT – with stellar academic records and industry achievements. Recognized for our problem-solving prowess, we've earned accolades that fuel our ambition to redefine what's possible with artificial intelligence.
              </p>

              <p className="leading-relaxed">
                We specialize in leveraging big data and cutting-edge AI to tackle complex challenges across industries, delivering solutions that enhance efficiency, decision-making, and human experiences. From healthcare to beyond, our work is about pushing boundaries and creating intelligent technologies that make a lasting impact.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
