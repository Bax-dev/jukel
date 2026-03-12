import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const CookiesPage = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Cookies Policy | Jukel - AWS Cloud Solutions Partner"
      description="Understand how Jukel uses cookies to improve your browsing experience. Learn about cookie types and how to manage them."
      path="/cookies"
    />
    <Navbar />
    <main className="pt-28 section-padding">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-3xl">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Cookies <span className="gradient-text">Policy</span></h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>Last updated: March 2026</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better experience.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">2. Types of Cookies We Use</h2>
          <p><strong>Essential:</strong> Required for basic site functionality. <strong>Analytics:</strong> Help us understand how visitors interact with our site. <strong>Marketing:</strong> Used to deliver relevant advertisements.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">3. Managing Cookies</h2>
          <p>You can control cookies through your browser settings. Disabling certain cookies may affect site functionality.</p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">4. Contact</h2>
          <p>Questions about our cookie policy? Email us at privacy@jukel.com.</p>
        </div>
      </motion.div>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default CookiesPage;
