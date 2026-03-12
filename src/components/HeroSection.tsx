import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"];

const HeroSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(var(--navy))] mt-14 sm:mt-16"
    >
      
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />

      {/* Network dots pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white"
            >
              Your AWS Partner with{" "}
              <span className="text-primary">seamless partnerships</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl mb-8 sm:mb-10"
            >
              Helping businesses modernize their technology, accelerate growth, and
              innovate through expert cloud infrastructure, so you can easily
              transform your partnership.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4"
            >
              <a
                href="#services"
                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 uppercase tracking-wide"
              >
                Learn More
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#certifications"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-base font-semibold border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-center"
              >
                View Our Work
              </a>
            </motion.div>
          </div>

          {/* Right - Image carousel with swipe */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {heroImages.map((src, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0">
                    <img
                      src={src}
                      alt={`Jukel Cloud Solutions ${i + 1}`}
                      className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
