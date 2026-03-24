import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsEnvelope, BsTelephone, BsGeoAlt } from "react-icons/bs";
import { motion } from "framer-motion";
import T from "@/components/T";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "FAQs", href: "#faqs" },
  { label: "Our Team", href: "#teams" },
  { label: "Case Studies", href: "/case-studies" },
];

const legalLinks = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
];

const socialLinks = [
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/logo-3.png" alt="Jukel" className="h-20 sm:h-24 w-auto object-contain" />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              <T>Your trusted AWS partner for cloud migration, optimization, and managed services.</T>
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary"><T>Quick Links</T></h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      <T>{link.label}</T>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      <T>{link.label}</T>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary"><T>Legal</T></h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    <T>{link.label}</T>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary"><T>Connect</T></h4>
            <div className="space-y-3 mb-4">
              <a
                href="mailto:support@jukel.com?subject=Cloud%20Readiness"
                className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors"
              >
                <BsEnvelope size={16} className="flex-shrink-0" />
                support@jukel.com
              </a>
              <a
                href="tel:+201019154022"
                className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors"
              >
                <BsTelephone size={16} className="flex-shrink-0" />
                +20 10 1915 4022
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <BsGeoAlt size={16} className="flex-shrink-0 mt-0.5" />
                <span>111 El-Nozha, Street, Cairo Governorate 11757, Egypt</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-navy-light flex items-center justify-center text-primary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Jukel. <T>All rights reserved.</T>
          </p>
          <p className="text-sm text-primary-foreground/40">
            <T>Proudly an AWS Partner Network Member</T>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
