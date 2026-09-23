import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/50 text-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground font-mono text-sm">
          &copy; {new Date().getFullYear()} Nikhitha A. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/nikhitha164" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/nikhitha12/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:nikhitha2206@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
