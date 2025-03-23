import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">NovaAutomata</h2>
            <p className="text-sm text-muted-foreground">
              Indigenous AI solutions for the world, powered by innovation and expertise.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions#nlp" className="text-sm text-muted-foreground hover:text-primary">Natural Language Processing</Link></li>
              <li><Link href="/solutions#cv" className="text-sm text-muted-foreground hover:text-primary">Computer Vision</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/team" className="text-sm text-muted-foreground hover:text-primary">Team</Link></li>
              <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-muted-foreground hover:text-primary inline-flex items-center"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NovaAutomata Innovations Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}