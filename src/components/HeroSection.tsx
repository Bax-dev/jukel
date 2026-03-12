import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { BsCloudCheck, BsShieldCheck, BsSpeedometer } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated cloud background */}
      <div className="absolute inset-0 cloud-pattern" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl float-animation" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/8 blur-3xl float-animation-delayed" />
      
      {/* Floating cloud shapes */}
      <div className="absolute top-1/4 right-[15%] w-32 h-16 rounded-full bg-cloud-accent/60 blur-md float-animation opacity-50" />
      <div className="absolute top-1/3 left-[10%] w-24 h-12 rounded-full bg-primary/10 blur-md float-animation-delayed opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">Official AWS Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Empowering Your Business with{" "}
            <span className="gradient-text">Cloud Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Jukel delivers scalable, secure, and innovative AWS cloud infrastructure 
            tailored to accelerate your digital transformation journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
              Start Your Journey
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl text-base font-semibold border border-border text-foreground hover:bg-muted transition-colors">
              View Our Work
            </button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { icon: BsCloudCheck, label: "99.9% Uptime" },
              { icon: BsShieldCheck, label: "Enterprise Security" },
              { icon: BsSpeedometer, label: "Lightning Fast" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4 }}
                className="glass-card px-5 py-4 flex items-center justify-center gap-3"
              >
                <item.icon className="text-primary text-xl" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
