import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsAward, BsPatchCheck, BsCloudCheck } from "react-icons/bs";
import { FaAws } from "react-icons/fa";

const certs = [
  { title: "AWS Solutions Architect", level: "Professional", icon: FaAws },
  { title: "AWS DevOps Engineer", level: "Professional", icon: FaAws },
  { title: "AWS Security Specialty", level: "Specialty", icon: BsShieldIcon },
  { title: "AWS Cloud Practitioner", level: "Foundational", icon: FaAws },
  { title: "AWS Database Specialty", level: "Specialty", icon: FaAws },
  { title: "ISO 27001 Certified", level: "Security", icon: BsAward },
];

function BsShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return <BsPatchCheck {...(props as any)} />;
}

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding cloud-pattern" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Trust & Excellence</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Our <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Industry-recognized certifications that validate our expertise and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-6 text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <cert.icon className="text-3xl text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
              <span className="text-xs font-medium text-primary bg-secondary px-3 py-1 rounded-full">
                {cert.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
