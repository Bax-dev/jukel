import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsRocket, BsEye } from "react-icons/bs";
import CloudWatermark from "./CloudWatermark";

const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission-vision" className="section-padding relative overflow-hidden" ref={ref}>
      <CloudWatermark variant="clouds" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Our <span className="gradient-text">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-stretch">
          {/* Mission - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 sm:p-10 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
              <BsRocket className="text-2xl text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To empower businesses of every size with{" "}
              <span className="text-primary font-semibold">world-class AWS cloud
              solutions</span>, enabling seamless migration, robust security, and
              optimized performance so our clients can focus on what matters
              most: <span className="text-primary font-semibold">growing their business</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We bridge the gap between complex cloud infrastructure and
              business outcomes, delivering{" "}
              <span className="text-primary font-semibold">hands-on expertise</span> that accelerates
              digital transformation with <span className="text-primary font-semibold">measurable results</span>.
            </p>
          </motion.div>

          {/* Animated Broken Dash Divider */}
          {/* Vertical on desktop, horizontal on mobile */}
          <div className="flex items-center justify-center">
            {/* Vertical divider - desktop */}
            <div className="hidden lg:flex flex-col items-center gap-2 mx-8 h-full py-4 overflow-hidden">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={
                    isInView
                      ? { opacity: [0.3, 1, 0.3], scaleY: 1 }
                      : {}
                  }
                  transition={{
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    },
                    scaleY: {
                      duration: 0.4,
                      delay: 0.3 + i * 0.05,
                    },
                  }}
                  className="w-[3px] h-5 rounded-full bg-primary"
                />
              ))}
            </div>

            {/* Horizontal divider - mobile */}
            <div className="flex lg:hidden items-center gap-2 w-full justify-center py-2 overflow-hidden">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={
                    isInView
                      ? { opacity: [0.3, 1, 0.3], scaleX: 1 }
                      : {}
                  }
                  transition={{
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    },
                    scaleX: {
                      duration: 0.4,
                      delay: 0.3 + i * 0.05,
                    },
                  }}
                  className="h-[3px] w-5 rounded-full bg-primary"
                />
              ))}
            </div>
          </div>

          {/* Vision - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 sm:p-10 flex flex-col items-center text-center lg:items-end lg:text-right"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
              <BsEye className="text-2xl text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To be the{" "}
              <span className="text-primary font-semibold">most trusted AWS partner</span> in
              Africa and beyond, recognized for delivering innovative, secure,
              and cost-effective cloud solutions that set the{" "}
              <span className="text-primary font-semibold">standard for excellence</span> in cloud
              consulting.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where every business, regardless of size or
              industry, has access to{" "}
              <span className="text-primary font-semibold">enterprise-grade cloud infrastructure</span> that
              unlocks <span className="text-primary font-semibold">limitless growth and innovation</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
