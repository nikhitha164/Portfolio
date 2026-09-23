import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/40 border-t border-border/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm looking for Java backend developer roles. If you have an opportunity, a question, or want to collaborate, email me and I'll get back to you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.a
              href="mailto:nikhitha2206@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4 p-6 bg-background border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="p-4 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <span className="block text-sm text-muted-foreground font-mono mb-1">Email</span>
                <span className="text-foreground font-medium flex items-center gap-2">
                  nikhitha2206@gmail.com <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </motion.a>

            <motion.a
              href="tel:+919945738924"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-4 p-6 bg-background border border-border rounded-xl hover:border-secondary/50 hover:bg-secondary/5 transition-all group"
            >
              <div className="p-4 bg-muted rounded-full group-hover:bg-secondary/10 transition-colors">
                <Phone className="text-secondary" size={24} />
              </div>
              <div>
                <span className="block text-sm text-muted-foreground font-mono mb-1">Phone</span>
                <span className="text-foreground font-medium flex items-center gap-2">
                  +91 9945738924 <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-6"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Bengaluru, India</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://github.com/nikhitha164" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/nikhitha12/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
