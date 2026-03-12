import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatisticsSection from "@/components/StatisticsSection";
import FAQSection from "@/components/FAQSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatisticsSection />
      <FAQSection />
      <CertificationsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
