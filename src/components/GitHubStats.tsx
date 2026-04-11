import { motion } from "motion/react";
import { Github, Star, GitBranch, GitPullRequest } from "lucide-react";

const stats = [
  { label: "Repositories", value: "32", icon: Github },
  { label: "Stars Earned", value: "124", icon: Star },
  { label: "Contributions", value: "842", icon: GitBranch },
  { label: "Pull Requests", value: "45", icon: GitPullRequest },
];

export default function GitHubStats() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="bg-muted/20 border rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-foreground text-background rounded-2xl">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold">GitHub Ecosystem</h3>
              <p className="text-muted-foreground">Open source contributions & system builds</p>
            </div>
          </div>
          <div className="flex gap-2">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="w-3 h-3 rounded-sm bg-emerald-500/20" 
                style={{ opacity: Math.random() * 0.8 + 0.2 }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-2">
                <stat.icon className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider">{stat.label}</span>
              </div>
              <div className="text-4xl font-heading font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
