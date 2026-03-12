import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BsCloud, BsDatabase, BsShieldLock, BsGear, BsGraphUp, BsCodeSlash } from "react-icons/bs";

const services = [
  {
    icon: BsCloud,
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to AWS with zero downtime and optimized costs.",
  },
  {
    icon: BsDatabase,
    title: "Managed Databases",
    description: "Fully managed database solutions with automated backups, scaling, and monitoring.",
  },
  {
    icon: BsShieldLock,
    title: "Security & Compliance",
    description: "Enterprise-grade security with AWS best practices and compliance certifications.",
  },
  {
    icon: BsGear,
    title: "DevOps Automation",
    description: "CI/CD pipelines, infrastructure as code, and automated deployments on AWS.",
  },
  {
    icon: BsGraphUp,
    title: "Cost Optimization",
    description: "Reduce your cloud spend by up to 40% with our proven optimization strategies.",
  },
  {
    icon: BsCodeSlash,
    title: "Custom Development",
    description: "Serverless applications, microservices, and cloud-native solutions built on AWS.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding cloud-pattern relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive AWS cloud solutions designed to transform your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-8 group cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="text-2xl text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
