import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BsCloudArrowUp, BsCloudCheck, BsCloudSlash, BsCloudHaze } from "react-icons/bs";
import { BsShieldLock, BsGear } from "react-icons/bs";
import CloudWatermark from "./CloudWatermark";

const services = [
  {
    icon: BsCloudArrowUp,
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and optimized performance.",
  },
  {
    icon: BsCloudCheck,
    title: "Cloud Managed Services",
    description: "Fully managed cloud databases, storage, and compute with automated backups and scaling.",
  },
  {
    icon: BsShieldLock,
    title: "Cloud Security",
    description: "Enterprise-grade cloud security with best practices, threat detection, and compliance certifications.",
  },
  {
    icon: BsGear,
    title: "Cloud DevOps",
    description: "Cloud-native CI/CD pipelines, infrastructure as code, and automated cloud deployments.",
  },
  {
    icon: BsCloudSlash,
    title: "Cloud Cost Optimization",
    description: "Reduce your cloud spend by up to 40% with proven optimization and rightsizing strategies.",
  },
  {
    icon: BsCloudHaze,
    title: "Cloud-Native Development",
    description: "Serverless applications, microservices, and cloud-native solutions built for scale.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding cloud-pattern relative overflow-hidden" ref={ref}>
      <CloudWatermark variant="circuit" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Our <span className="gradient-text">Cloud Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end cloud solutions designed to accelerate your digital transformation.
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
