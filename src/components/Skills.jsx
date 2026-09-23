import { motion } from "framer-motion";
import {
  SiPython, SiMysql, SiSpring, SiSpringboot, SiSpringsecurity, SiJsonwebtokens,
  SiHibernate, SiApachemaven, SiPostman, SiSwagger, SiGit, SiGithub, SiOpencv,
  SiHtml5, SiCss, SiJavascript
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

// Kept in sync with the resume. Items without an icon render a small dot.
const skillCategories = [
  {
    title: "Java & Core",
    skills: [
      { name: "Core Java", icon: FaJava },
      { name: "OOP & Collections", icon: null },
      { name: "Multithreading", icon: null },
      { name: "Java 8 Streams & Lambdas", icon: null },
      { name: "Python", icon: SiPython },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring MVC", icon: SiSpring },
      { name: "Spring Data JPA", icon: SiHibernate },
      { name: "Spring Security & JWT", icon: SiSpringsecurity },
      { name: "REST APIs", icon: null },
      { name: "Microservices", icon: null },
      { name: "JDBC, Servlets, JSP", icon: null },
    ]
  },
  {
    title: "Data, Cloud & Tools",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "AWS (EC2, S3, IAM)", icon: FaAws },
      { name: "Maven", icon: SiApachemaven },
      { name: "Git & GitHub", icon: SiGit },
      { name: "Postman & Swagger", icon: SiPostman },
    ]
  },
  {
    title: "AI & Frontend",
    skills: [
      { name: "OpenCV & Visual Odometry", icon: SiOpencv },
      { name: "RAG & Vector Databases", icon: null },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <div className="h-1 w-20 bg-secondary mb-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="bg-background border border-border/50 p-6 rounded-lg hover-card-glow">
              <h3 className="text-xl font-mono text-primary mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3">
                    {skill.icon ? <skill.icon aria-hidden="true" className="text-muted-foreground text-lg shrink-0" /> : <div className="w-1.5 h-1.5 ml-[5px] mr-[5px] rounded-full bg-secondary/50 shrink-0" />}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
