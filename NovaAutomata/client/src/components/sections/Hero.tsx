import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Indigenous AI Solutions
            </span>
            <br />
            for the World
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
            Welcome to NovaAutomation Innovations Pvt. Ltd. – a startup born from the vision of India's brightest minds at IISc and IIT. We're harnessing the power of AI and big data to create indigenous solutions that transform industries, enhance lives, and drive global innovation from India.
          </p>

          <div className="flex justify-center gap-4 flex-wrap px-4">
            <Button asChild size="lg">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Abstract AI-themed background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 800 800">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}