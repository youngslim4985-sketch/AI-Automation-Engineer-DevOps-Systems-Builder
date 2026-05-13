/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Architecture from "./components/Architecture";
import SecuritySidecar from "./components/SecuritySidecar";
import Process from "./components/Process";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import GitHubStats from "./components/GitHubStats";
import Connect from "./components/Connect";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground">
              TF
            </div>
            <span className="font-heading font-bold text-lg tracking-tight hidden sm:block">Terrance Franklin</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
            <a href="#connect" className="hover:text-foreground transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Metrics />
        <Architecture />
        <SecuritySidecar />
        <Process />
        <div id="projects">
          <Projects />
        </div>
        <GitHubStats />
        <div id="stack">
          <TechStack />
        </div>
        <div id="connect">
          <Connect />
        </div>
      </main>
    </div>
  );
}

