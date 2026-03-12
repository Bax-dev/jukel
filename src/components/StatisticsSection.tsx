import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 30, suffix: "%", label: "Cost Reduction" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="gradient-text text-3xl sm:text-5xl lg:text-6xl font-bold">
      {count}{suffix}
    </span>
  );
};

const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="statistics" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl float-animation" />
        <div className="absolute bottom-10 left-20 w-48 h-48 rounded-full bg-primary/5 blur-3xl float-animation-delayed" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Our Impact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-primary-foreground">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} inView={isInView} />
              <p className="mt-3 text-sm sm:text-base text-primary-foreground/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
