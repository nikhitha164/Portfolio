import { motion } from "framer-motion";
import {
  BedDouble, Boxes, ShieldCheck, ShoppingBasket, Cloud, BrainCircuit, GraduationCap, Github
} from "lucide-react";

const GH = "https://github.com/nikhitha164";

// `links` are rendered as GitHub buttons. Projects without a `links` entry show no button.
// Add a link once the code for that project is pushed to GitHub.
const featured = [
  {
    title: "BookMyStay: Resort Booking API",
    description:
      "REST API for a resort booking platform with resort-owner and customer roles. Covers JWT sign-in, resort management with image uploads, bookings with cancel and complete flows, reviews, and email notifications. Documented with Swagger.",
    tech: ["Java 17", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "MySQL", "Cloudinary", "Swagger"],
    icon: BedDouble,
    color: "text-primary",
    links: [{ label: "Code", href: `${GH}/Bookmystay_app` }],
  },
  {
    title: "E-Commerce Microservices",
    description:
      "Spring Cloud foundation for an e-commerce platform: Eureka service registry, a Git-backed Config Server, an API Gateway, OpenFeign service-to-service calls, and Spring Boot Admin for monitoring. Product and order services are next.",
    tech: ["Spring Boot", "Spring Cloud", "Eureka", "Config Server", "API Gateway", "OpenFeign"],
    icon: Boxes,
    color: "text-secondary",
    status: "In progress",
    links: [
      { label: "Code", href: `${GH}/Ecomapp_microservices` },
      { label: "Config repo", href: `${GH}/configproperties` },
    ],
  },
  {
    title: "Spring Security Authentication API",
    description:
      "Registration and login API with database-backed authentication. Uses a custom UserDetailsService, BCrypt password hashing, ModelMapper DTOs, global exception handling, and Swagger documentation.",
    tech: ["Spring Boot", "Spring Security", "BCrypt", "Spring Data JPA", "MySQL", "Swagger"],
    icon: ShieldCheck,
    color: "text-primary",
    links: [{ label: "Code", href: `${GH}/Spring_security` }],
  },
  {
    title: "FreshMart: Grocery Shopping App",
    description:
      "Full-stack grocery shopping application with product browsing, cart management, order placement and payment, plus an admin page for adding products. Built on JSP and Servlets with a JDBC data-access layer over MySQL, deployed on Apache Tomcat.",
    tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Apache Tomcat"],
    icon: ShoppingBasket,
    color: "text-secondary",
    links: [{ label: "Code", href: `${GH}/Freshmart` }],
  },
];

const more = [
  {
    title: "Cloud-Hosted User Registration & Authentication",
    description:
      "User registration and authentication system deployed on the AWS Free Tier using EC2, RDS and S3, with IAM policies and roles configured for least-privilege access.",
    tech: ["AWS EC2", "RDS", "S3", "IAM", "MySQL"],
    icon: Cloud,
    color: "text-primary",
  },
  {
    title: "Medical Chatbot (RAG)",
    description:
      "Retrieval-Augmented Generation chatbot that grounds its answers in a medical knowledge base held in a vector store, with a document retrieval and semantic search pipeline to reduce hallucinated answers.",
    tech: ["Python", "RAG", "LangChain", "Vector DB", "Semantic Search"],
    icon: BrainCircuit,
    color: "text-secondary",
  },
  {
    title: "Student Management System",
    description:
      "Java web application for managing students, courses and payments, with signup and login, course listings and admin CRUD operations. Built with JSP, Servlets and JDBC over MySQL.",
    tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
    icon: GraduationCap,
    color: "text-primary",
    links: [{ label: "Code", href: `${GH}/Student-Management--app` }],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function ProjectCard({ project, compact = false }) {
  return (
    <motion.article
      variants={itemVariants}
      className={`group bg-background border border-border/60 rounded-xl hover-card-glow flex flex-col h-full ${
        compact ? "p-6" : "p-8"
      }`}
    >
      <div className="flex items-start gap-4 mb-5">
        <div className={`p-3 rounded-lg bg-card border border-border/50 shrink-0 ${project.color}`}>
          <project.icon size={compact ? 20 : 24} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className={`font-bold leading-snug ${compact ? "text-lg" : "text-xl"}`}>{project.title}</h3>
          {project.status && (
            <span className="inline-block mt-1.5 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30">
              {project.status}
            </span>
          )}
        </div>
      </div>

      <p className={`text-muted-foreground leading-relaxed flex-grow ${compact ? "text-sm mb-6" : "mb-8"}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-3 py-1 bg-muted rounded-full text-foreground/80 border border-border/50 group-hover:border-primary/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.links && (
        <div className="flex flex-wrap gap-4 mt-6 pt-5 border-t border-border/50">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${link.label}: ${project.title} on GitHub`}
              className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline underline-offset-4"
            >
              <Github size={16} aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/20 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
          <div className="h-1 w-20 bg-secondary mb-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mt-20 mb-8"
        >
          More Projects
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {more.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </motion.div>

        <p className="mt-12 text-muted-foreground">
          More on{" "}
          <a
            href={GH}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline underline-offset-4"
          >
            github.com/nikhitha164
          </a>
          .
        </p>
      </div>
    </section>
  );
}
