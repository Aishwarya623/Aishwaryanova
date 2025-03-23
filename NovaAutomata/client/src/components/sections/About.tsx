import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-24 w-full bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Us
          </h2>

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
    </section>
  );
}
