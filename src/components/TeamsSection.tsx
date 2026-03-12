import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsCloudArrowUp, BsShieldCheck, BsHeadset, BsPeople } from "react-icons/bs";
import CloudWatermark from "./CloudWatermark";

const teams = [
  {
    icon: BsPeople,
    title: "Cloud Architects",
    description:
      "Certified AWS architects designing scalable, resilient cloud infrastructure tailored to your business needs.",
  },
  {
    icon: BsCloudArrowUp,
    title: "Cloud Engineers",
    description:
      "Expert engineers building, migrating, and optimizing cloud-native applications with cutting-edge AWS services.",
  },
  {
    icon: BsHeadset,
    title: "Cloud Support",
    description:
      "Dedicated 24/7 support professionals ensuring your cloud operations run smoothly around the clock.",
  },
  {
    icon: BsShieldCheck,
    title: "Cloud Security",
    description:
      "Specialists protecting your cloud workloads with industry-leading security protocols and compliance standards.",
  },
];

const TeamsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="teams" className="section-padding relative overflow-hidden" ref={ref}>
      <CloudWatermark variant="clouds" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Our Core <span className="gradient-text">Teams</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our cloud experts collaborate across disciplines to deliver end-to-end
            solutions that power your digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, i) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-8 text-center group cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <team.icon className="text-3xl text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">
                {team.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {team.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
