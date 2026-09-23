import { motion } from "framer-motion";

const facts = [
  { label: "Location", value: "Bengaluru, India" },
  { label: "Education", value: "B.E. Information Science, CGPA 8.56" },
  { label: "Currently", value: "Java Full Stack Developer Intern, Dhee Coding Lab" },
  { label: "Looking for", value: "Java backend developer roles" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <div className="h-1 w-20 bg-primary mb-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-2/3"
          >
            <div className="prose prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Nikhitha, a Java backend developer from Bengaluru finishing my B.E. in
                Information Science and Engineering at KNS Institute of Technology. As a Java Full
                Stack Developer Intern at Dhee Coding Lab, I build REST APIs and backend modules
                for a microservices-based application and take part in API design and code reviews.
              </p>
              <p>
                Most of my work is in the Spring ecosystem: Spring Boot, Spring Data JPA and Spring
                Security with JWT, backed by MySQL. My BookMyStay resort-booking API covers
                authentication, bookings, reviews, image uploads and email notifications, and I'm
                now building out a Spring Cloud setup with a service registry, config server and
                API gateway.
              </p>
              <p>
                Before that, I spent six months as an AI intern at DRDO DYSL-AI, building real-time
                Visual Odometry pipelines with OpenCV and benchmarking five feature-matching
                methods against ATE and RPE metrics. I'm looking for a Java backend role where I
                can keep growing alongside experienced engineers.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 font-mono text-sm">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-primary mb-1">{fact.label}</dt>
                  <dd className="text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
