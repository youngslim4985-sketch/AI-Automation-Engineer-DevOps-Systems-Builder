import { motion } from "motion/react";
import { Shield, Lock, Activity, Eye, Zap, Database, Server, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Prompt Injection Defense",
    desc: "Layered regex-based scanning and LLM-as-judge validation to block malicious instruction overrides.",
    icon: Shield,
    status: "Critical",
  },
  {
    title: "Tool Authorization",
    desc: "Strict registry with dangerous argument detection (e.g., /etc/passwd path traversal) for all tool calls.",
    icon: Lock,
    status: "Critical",
  },
  {
    title: "Docker Sandboxing",
    desc: "True isolation using short-lived containers for dangerous code execution with 512MB RAM/0.5 CPU limits.",
    icon: Zap,
    status: "High",
  },
  {
    title: "Immutable Audit Ledger",
    desc: "Append-only logs with cryptographic hash-chain signatures for forensic tamper detection.",
    icon: Eye,
    status: "High",
  },
  {
    title: "Rate Limiting",
    desc: "Redis-backed quotas per agent ID to prevent resource exhaustion and denial-of-wallet attacks.",
    icon: Activity,
    status: "High",
  },
];

export default function SecuritySidecar() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <Badge variant="outline" className="mb-4 border-primary/30 font-mono tracking-tighter">v2.4.0 • Production Ready</Badge>
            <h2 className="text-5xl font-heading font-bold mb-6 tracking-tighter">AI Security Sidecar</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A dedicated Policy Decision Point (PDP) that intercepts orchestrator calls to enforce real-time safety, authorization, and rate limiting.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-mono">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                FastAPI Gateway Active
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Redis Cluster Connected
              </div>
              <div className="flex items-center gap-3 text-sm font-mono opacity-50">
                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                OPA Policy Engine (Optional)
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none bg-muted/40 backdrop-blur-xl group hover:bg-muted/60 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <Badge variant={feature.status === 'Critical' ? 'destructive' : 'outline'} className="text-[10px] uppercase font-bold">
                        {feature.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-heading font-bold">{feature.title}</CardTitle>
                    <CardDescription className="text-sm font-medium leading-relaxed">
                      {feature.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}

            {/* Visual Architecture Mini-Diagram */}
            <Card className="md:col-span-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Server className="w-8 h-8 opacity-50" />
                    <span className="text-[10px] font-mono uppercase">Orchestrator</span>
                  </div>
                  <div className="h-0.5 w-12 bg-primary/20 hidden md:block" />
                  <div className="p-6 rounded-2xl bg-background border border-primary/40 shadow-2xl relative">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-2" />
                    <div className="text-xs font-mono font-bold">SECURITY SIDECAR</div>
                    <motion.div 
                      className="absolute inset-0 rounded-2xl border border-primary/40"
                      animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="h-0.5 w-12 bg-primary/20 hidden md:block" />
                  <div className="flex flex-col items-center gap-2">
                    <Database className="w-8 h-8 opacity-50" />
                    <span className="text-[10px] font-mono uppercase">External APIs / Tools</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
