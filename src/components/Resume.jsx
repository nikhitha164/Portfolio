import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Resume</h2>
          <div className="h-1 w-20 bg-primary mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-background border border-border/60 rounded-xl p-6 md:p-8 hover-card-glow max-w-2xl"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
            <FileText className="text-primary" size={26} />
          </div>

          <div className="flex-1">
            <p className="font-semibold text-foreground text-lg">Nikhitha A — Resume</p>
            <p className="text-sm text-muted-foreground mt-1">Java Backend Developer · Updated September 2026</p>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <a
              href="/nikhitha-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
            >
              <ExternalLink size={15} />
              View
            </a>
            <a
              href="/nikhitha-resume.pdf"
              download="Nikhitha_A_Resume.pdf"
              className="flex items-center gap-2 border border-border bg-card px-5 py-2.5 rounded-lg font-medium hover:bg-muted transition-colors text-sm"
            >
              <Download size={15} />
              Download
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
