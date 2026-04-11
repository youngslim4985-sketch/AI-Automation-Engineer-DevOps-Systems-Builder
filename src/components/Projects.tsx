import { motion } from "motion/react";
import { ExternalLink, Github, Brain, Settings, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Automation System",
    description: "End-to-end lead capture, qualification, and booking automation with real-time async pipelines.",
    icon: Brain,
    tags: ["Python", "OpenAI", "Redis"],
    color: "from-purple-500/20 to-blue-500/20",
    demo: "https://intelligent-leap-forward.lovable.app/",
    github: "https://github.com/youngslim4985-sketch",
  },
  {
    title: "DevOps Stack Platform",
    description: "Multi-container Docker architecture with CI/CD pipelines and production-ready workflows.",
    icon: Settings,
    tags: ["Docker", "GitHub Actions", "Terraform"],
    color: "from-orange-500/20 to-red-500/20",
    demo: "#",
    github: "https://github.com/youngslim4985-sketch",
  },
  {
    title: "Data Flywheel Ecosystem",
    description: "Continuous data ingestion and processing with feedback loops for model improvement.",
    icon: Database,
    tags: ["PostgreSQL", "Django", "Celery"],
    color: "from-emerald-500/20 to-cyan-500/20",
    demo: "#",
    github: "https://github.com/youngslim4985-sketch",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-2">Featured Projects</h2>
        <h3 className="text-4xl font-heading font-bold">Production-Ready Solutions</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group h-full border-none bg-muted/30 overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <CardHeader className="relative">
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-background/50 backdrop-blur-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
