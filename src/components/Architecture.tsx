import { motion } from "motion/react";
import { Database, Cpu, Globe, ArrowRight, Server, Shield } from "lucide-react";

export default function Architecture() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-2">System Architecture</h2>
          <h3 className="text-4xl font-heading font-bold mb-4">AI Automation Pipeline</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A high-level overview of the intelligent systems I design, integrating real-time data processing with automated decision layers.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
          {/* Connector Lines (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 hidden lg:block -z-10" />

          {/* Step 1: Data Ingestion */}
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="w-20 h-20 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center mb-6 shadow-xl relative">
              <Globe className="w-10 h-10 text-primary" />
              <motion.div 
                className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <h4 className="font-heading font-bold mb-2">Ingestion</h4>
            <p className="text-xs text-muted-foreground">Multi-source data collection & normalization</p>
          </div>

          <ArrowRight className="w-8 h-8 text-muted-foreground/30 rotate-90 lg:rotate-0" />

          {/* Step 2: AI Processing */}
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center mb-6 shadow-2xl shadow-primary/20 relative">
              <Cpu className="w-12 h-12 text-primary-foreground" />
              <motion.div 
                className="absolute inset-0 rounded-3xl border-4 border-primary/30"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <h4 className="font-heading font-bold mb-2">AI Logic</h4>
            <p className="text-xs text-muted-foreground">LLM-powered analysis & qualification</p>
          </div>

          <ArrowRight className="w-8 h-8 text-muted-foreground/30 rotate-90 lg:rotate-0" />

          {/* Step 3: Infrastructure */}
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="w-20 h-20 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center mb-6 shadow-xl">
              <Server className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-heading font-bold mb-2">DevOps</h4>
            <p className="text-xs text-muted-foreground">Scalable Docker-based deployment</p>
          </div>

          <ArrowRight className="w-8 h-8 text-muted-foreground/30 rotate-90 lg:rotate-0" />

          {/* Step 4: Output/Security */}
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="w-20 h-20 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center mb-6 shadow-xl">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-heading font-bold mb-2">Delivery</h4>
            <p className="text-xs text-muted-foreground">Secure API endpoints & dashboards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
