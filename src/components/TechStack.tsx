import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const stack = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Go", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Django", "FastAPI", "React", "Next.js", "Express"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "AWS"],
  },
  {
    category: "Tools",
    items: ["PostgreSQL", "Redis", "RabbitMQ", "Elasticsearch", "Prometheus"],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-2">Tech Stack</h2>
          <h3 className="text-4xl font-heading font-bold">Engineering Toolkit</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <Badge key={item} variant="outline" className="px-3 py-1 text-sm font-medium bg-background">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
