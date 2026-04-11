import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Connect() {
  return (
    <footer className="py-24 px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Let's build the next <span className="text-primary italic">intelligent system</span> together.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-lg">
              Currently open to collaborations on AI automation, DevOps infrastructure, and scalable backend systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full gap-2" asChild>
                <a href="mailto:youngslim4985@gmail.com">
                  <Mail className="w-4 h-4" />
                  Primary Email
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full gap-2" asChild>
                <a href="mailto:tfinvestment40@gmail.com">
                  <Mail className="w-4 h-4" />
                  Business Inquiries
                </a>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <a href="https://github.com/youngslim4985-sketch" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <a href="https://www.linkedin.com/in/terrance-franklin-a4126a104" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-3xl p-8 md:p-12 border">
            <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-8">Quick Links</h3>
            <div className="space-y-6">
              {[
                { label: "View Portfolio", href: "#" },
                { label: "Live Demo", href: "https://intelligent-leap-forward.lovable.app/" },
                { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/terrance-franklin-a4126a104" },
                { label: "GitHub Profile", href: "https://github.com/youngslim4985-sketch" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between text-2xl font-heading font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-mono">
          <div className="flex flex-col gap-1">
            <p>© {new Date().getFullYear()} Terrance Franklin. All rights reserved.</p>
            <p className="text-xs opacity-70">youngslim4985@gmail.com | tfinvestment40@gmail.com</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
