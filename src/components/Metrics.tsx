import { motion } from "motion/react";
import { Activity, Rocket, Box, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    label: "Active AI Agents",
    value: "3",
    icon: Activity,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "Deployments (30d)",
    value: "7",
    icon: Rocket,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    label: "Docker Builds",
    value: "24",
    icon: Box,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    label: "System Uptime",
    value: "99.3%",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function Metrics() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-2">Live System Snapshot</h2>
          <h3 className="text-4xl font-heading font-bold">Real-time Performance Metrics</h3>
        </div>
        <div className="text-right">
          <p className="text-muted-foreground text-sm font-mono">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="flex items-center gap-2 text-emerald-500 text-sm font-medium mt-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Systems Operational
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-none bg-muted/30 backdrop-blur-sm hover:bg-muted/50 transition-colors">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl ${metric.bg} flex items-center justify-center mb-4`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className="text-3xl font-heading font-bold mb-1">{metric.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{metric.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
