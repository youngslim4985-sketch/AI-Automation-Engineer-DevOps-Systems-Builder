import { motion } from "motion/react";
import { Terminal, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Active GitHub Systems Builder</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          Terrance Franklin
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
          AI Automation Engineer & DevOps Systems Builder. I design intelligent systems that automate workflows and scale infrastructure.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-12 px-8 text-base font-medium rounded-full" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium rounded-full gap-2" asChild>
            <a href="https://intelligent-leap-forward.lovable.app/" target="_blank" rel="noopener noreferrer">
              <Terminal className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Floating tech icons */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-10 hidden lg:block opacity-20"
      >
        <Cpu className="w-16 h-16 text-primary" />
      </motion.div>
    </section>
  );
}
