import { motion } from "framer-motion";

const experiences = [
  {
    role: "Java Full Stack Developer Intern",
    company: "Dhee Coding Lab",
    period: "Feb 2026 – Present",
    badge: null,
    description: [
      "Develop REST APIs and backend modules with Java and Spring Boot for a microservices-based application.",
      "Collaborate on API design and take part in code reviews.",
      "Build backend applications on MySQL with a controller–service–repository structure and a focus on clean, maintainable code."
    ]
  },
  {
    role: "AI Intern",
    company: "DRDO DYSL-AI",
    period: "Aug 2025 – Feb 2026",
    badge: "Paid Internship",
    description: [
      "Engineered and optimized real-time Visual Odometry pipelines with OpenCV to support AI-driven navigation systems, using the KITTI dataset.",
      "Benchmarked 5+ feature-matching techniques (ORB, SIFT, SURF, LoFTR, RoMa) against ATE and RPE metrics to identify the top-performing method for pose estimation."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="h-1 w-20 bg-primary mb-6" />
        </motion.div>

        <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-2 top-1.5 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  {exp.badge && (
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-secondary/15 text-secondary border border-secondary/30">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <span className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{exp.period}</span>
              </div>
              <h4 className="text-lg text-secondary font-mono mb-4">{exp.company}</h4>

              <ul className="space-y-3 text-muted-foreground list-none">
                {exp.description.map((desc, dIdx) => (
                  <li key={dIdx} className="relative pl-4">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
