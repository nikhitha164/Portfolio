import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6 text-primary font-mono text-sm md:text-base"
            >
              <Terminal size={16} />
              <span>Hi, I'm Nikhitha A</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Java Backend Developer
              <br />
              <span className="text-gradient">Spring Boot &amp; Microservices.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8"
            >
              I build secure REST APIs and database-driven backends with Java, Spring Boot,
              Spring Security and MySQL. Currently a Java Full Stack Developer Intern at Dhee
              Coding Lab, based in Bengaluru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="/nikhitha-resume.pdf"
                download="Nikhitha_A_Resume.pdf"
                className="flex items-center gap-2 border border-border bg-card px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
              >
                <Download size={18} /> Download Resume
              </a>
              <div className="flex items-center gap-1 ml-1">
                <a
                  href="https://github.com/nikhitha164"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhitha12/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-60 blur-md animate-pulse" />
              <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/40 shadow-2xl">
                <img
                  src="/nikhitha.jpg"
                  alt="Portrait of Nikhitha A"
                  width="288"
                  height="288"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
