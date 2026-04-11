import { motion } from "motion/react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    desc: "Identifying bottlenecks and mapping out the automation potential of existing workflows.",
    icon: Search,
  },
  {
    title: "Architecture",
    desc: "Designing scalable, containerized blueprints that integrate AI at the core.",
    icon: PenTool,
  },
  {
    title: "Automation",
    desc: "Developing custom agents and pipelines using Python, LLMs, and robust backend logic.",
    icon: Code2,
  },
  {
    title: "Scale",
    desc: "Deploying to production with automated CI/CD and real-time monitoring.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-2">My Process</h2>
        <h3 className="text-4xl font-heading font-bold">How I Build Systems</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-8 rounded-3xl border bg-muted/30 hover:bg-muted/50 transition-colors group"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
              0{i + 1}
            </div>
            <div className="mt-4">
              <step.icon className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-xl font-heading font-bold mb-4">{step.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
