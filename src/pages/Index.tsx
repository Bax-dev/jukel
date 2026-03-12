import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatisticsSection from "@/components/StatisticsSection";
import FAQSection from "@/components/FAQSection";
import AwsServicesSection from "@/components/AwsServicesSection";
import TeamsSection from "@/components/TeamsSection";
import CertificationsSection from "@/components/CertificationsSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />
      <HeroSection />
      <MissionVisionSection />
      <ServicesSection />
      <AwsServicesSection />
      <StatisticsSection />
      <FAQSection />
      <CertificationsSection />
      <TeamsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
