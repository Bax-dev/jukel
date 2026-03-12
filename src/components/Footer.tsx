import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Certifications", href: "/#certifications" },
  { label: "FAQs", href: "/#faqs" },
];

const legalLinks = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaGithub, href: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="font-heading font-bold text-lg text-primary-foreground">J</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl">Jukel</span>
                <span className="block text-[10px] font-medium text-primary -mt-1 tracking-wider">AWS PARTNERS</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted AWS partner for cloud migration, optimization, and managed services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary">Connect</h4>
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
            © {new Date().getFullYear()} Jukel. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/40">
            Proudly an AWS Partner Network Member
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
