import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "AWS Core Services & Features – Magic Bus India Foundation (2025)",
  "Cloud Computing – NPTEL, IIT Kharagpur (2025)",
  "Artificial Intelligence Fundamentals – IBM SkillsBuild (2025)",
  "HackerRank 5-Star Badge – Java (Problem Solving)",
  "HackerRank 3-Star Badge – Coding Challenge"
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <div className="h-1 w-20 bg-primary mb-10" />

            <div className="bg-card border border-border p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering</h3>
              <h4 className="text-lg text-primary font-mono mb-4">Information Science and Engineering</h4>
              <p className="text-muted-foreground mb-6">KNS Institute of Technology, Yelahanka<br />2022 – 2026</p>

              <div className="inline-flex items-center justify-center bg-secondary/10 border border-secondary/30 px-4 py-2 rounded-lg">
                <span className="text-sm font-mono text-secondary mr-2">CGPA:</span>
                <span className="text-2xl font-bold text-foreground">8.56 / 10</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-secondary" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold">Certifications &amp; Achievements</h2>
            </div>
            <div className="h-1 w-20 bg-secondary mb-10" />

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="flex items-start gap-4 p-5 bg-card/50 border border-border rounded-lg hover:border-secondary/50 transition-colors"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary shrink-0 shadow-[0_0_8px_rgba(200,100,255,0.8)]" />
                  <p className="text-foreground/90 leading-snug">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
