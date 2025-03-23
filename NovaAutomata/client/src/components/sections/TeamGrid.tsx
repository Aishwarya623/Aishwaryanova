import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  id: string;
  role: string;
  credentials: string;
  expertise: string[];
}

interface TeamGridProps {
  teamType: "core" | "software";
}

export default function TeamGrid({ teamType }: TeamGridProps) {
  const coreTeam: TeamMember[] = [
    {
      id: "RAB",
      role: "AI Research Lead",
      credentials: "PhD, Indian Institute of Science",
      expertise: ["Machine Learning", "Computer Vision", "Neural Networks"]
    },
    {
      id: "BIF",
      role: "AI Research Lead",
      credentials: "PhD, Indian Institute of Science",
      expertise: ["Natural Language Processing", "Deep Learning"]
    },
    {
      id: "PRS",
      role: "AI Engineer",
      credentials: "BS, IISc; Masters, AI, IIT KGP",
      expertise: ["Computer Vision", "Deep Learning"]
    },
    {
      id: "KAK",
      role: "AI Engineer",
      credentials: "MTech, AI, Indian Institute of Science",
      expertise: ["ML Systems", "Data Engineering"]
    },
    {
      id: "KAB",
      role: "AI Engineer",
      credentials: "Masters, Smart Manufacturing, IISc",
      expertise: ["Industrial AI", "Process Optimization"]
    },
    {
      id: "HAD",
      role: "AI Engineer",
      credentials: "BS, Indian Institute of Science",
      expertise: ["ML Operations", "System Architecture"]
    }
  ];

  const softwareTeam: TeamMember[] = [
    {
      id: "ROK",
      role: "Senior Software Engineer",
      credentials: "BTech, Computer Science",
      expertise: ["Full Stack Development", "System Architecture"]
    },
    {
      id: "MAN",
      role: "Senior Software Engineer",
      credentials: "BTech, Computer Science",
      expertise: ["Backend Development", "Database Design"]
    },
    {
      id: "TEN",
      role: "Full Stack Developer",
      credentials: "MCA",
      expertise: ["Frontend Development", "UI/UX Design"]
    },
    {
      id: "NAN",
      role: "Front End Developer",
      credentials: "MCA",
      expertise: ["React", "UI Components"]
    },
    {
      id: "KIR",
      role: "Designer",
      credentials: "BCA",
      expertise: ["UI Design", "User Experience"]
    }
  ];

  const team = teamType === "core" ? coreTeam : softwareTeam;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {team.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {member.id}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.credentials}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {member.expertise.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}