import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const PrivacyPage = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Privacy Policy | Jukel - AWS Cloud Solutions Partner"
      description="Learn how Jukel handles your personal data. Our privacy policy covers data collection, usage, security, and your rights."
      path="/privacy"
    />
    <Navbar />
    <main className="pt-28 section-padding">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-3xl">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Privacy <span className="gradient-text">Policy</span></h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>Last updated: March 2026</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as contact details when requesting our services, and automatically through cookies and analytics.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">2. How We Use Information</h2>
          <p>Your information is used to provide and improve our services, communicate with you, and comply with legal obligations.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal data, including encryption and access controls.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">4. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. Contact privacy@jukel.com for requests.</p>
        </div>
      </motion.div>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default PrivacyPage;
