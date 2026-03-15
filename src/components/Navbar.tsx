import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "AWS Services", href: "#aws-services" },
  { label: "FAQs", href: "#faqs" },
  { label: "Certifications", href: "#certifications" },
  { label: "Our Team", href: "#teams" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        // Delay scroll to let the mobile menu close first
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 350);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
        <Link to="/" className="flex-shrink-0 -my-8">
          <img src="/logo-3.png" alt="Jukel" className="h-24 sm:h-32 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full px-2 py-1.5 shadow-lg shadow-black/5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="relative text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/60 px-4 py-2 rounded-full transition-all duration-300"
            >
              {link.label}
              {link.href === "#aws-services" && (
                <svg viewBox="0 0 200 60" className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-14 h-3">
                  <path d="M10 30 C60 60, 140 60, 190 30" stroke="#FF9900" strokeWidth="6" fill="none" strokeLinecap="round" />
                  <path d="M180 28 L190 30 L182 36" fill="none" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#services")}
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity ml-1"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border mx-4 mb-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#services")}
                className="bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold mt-2"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
