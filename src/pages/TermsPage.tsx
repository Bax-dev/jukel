import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const TermsPage = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Terms and Conditions | Jukel - AWS Cloud Solutions Partner"
      description="Read Jukel's terms and conditions for AWS cloud consulting, migration, optimization, and managed services."
      path="/terms"
    />
    <Navbar />
    <main className="pt-28 section-padding">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-3xl">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Terms and <span className="gradient-text">Conditions</span></h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-5 sm:space-y-6">
          <p>Last updated: March 2026</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">1. Agreement to Terms</h2>
          <p>By accessing Jukel's services, you agree to be bound by these terms. If you do not agree, you may not use our services.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">2. Services</h2>
          <p>Jukel provides AWS cloud consulting, migration, optimization, and managed services. Service details are outlined in individual service agreements.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">3. Intellectual Property</h2>
          <p>All content, branding, and materials on this site are the property of Jukel and protected by intellectual property laws.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">4. Limitation of Liability</h2>
          <p>Jukel shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">5. Contact</h2>
          <p>For questions about these terms, contact us at legal@jukel.com.</p>
        </div>
      </motion.div>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default TermsPage;
