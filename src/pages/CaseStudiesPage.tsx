import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  BsCloudArrowUp,
  BsShieldLock,
  BsGear,
  BsCloudCheck,
  BsCpu,
  BsDatabase,
  BsLightning,
  BsChatDots,
  BsPhone,
  BsGlobe,
  BsBarChart,
  BsLock,
} from "react-icons/bs";
import CloudWatermark from "@/components/CloudWatermark";
import T from "@/components/T";

const caseStudies = [
  {
    company: "Smart Pyramids",
    url: "https://www.smartpyramids.com/",
    logo: null,
    tagline: "Your Smart Home Starts Here",
    description:
      "Smart Pyramids is an Egyptian IoT startup manufacturing smart home devices — switches, locks, and sensors — controlled via a mobile app and voice commands. We architected their entire cloud backend on AWS to handle real-time device communication, secure data pipelines, and seamless scalability across thousands of connected devices.",
    industry: "IoT / Smart Home",
    region: "Egypt & MENA",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    accentColor: "text-orange-500",
    services: [
      {
        icon: BsCpu,
        name: "AWS IoT Core",
        detail: "Real-time MQTT messaging for thousands of smart devices",
      },
      {
        icon: BsCloudArrowUp,
        name: "AWS Lambda",
        detail: "Serverless functions for device commands and automation rules",
      },
      {
        icon: BsDatabase,
        name: "Amazon DynamoDB",
        detail: "Low-latency NoSQL storage for device state and telemetry",
      },
      {
        icon: BsShieldLock,
        name: "AWS Cognito",
        detail: "Secure user authentication and device ownership management",
      },
      {
        icon: BsGear,
        name: "Amazon API Gateway",
        detail: "RESTful APIs powering the mobile app and voice integrations",
      },
      {
        icon: BsBarChart,
        name: "Amazon CloudWatch",
        detail: "Monitoring and alerting for device fleet health",
      },
    ],
  },
  {
    company: "Notch NCO",
    url: "https://notch-nco.com/",
    logo: null,
    tagline: "We Ignite Your Brand's Digital Power",
    description:
      "Notch NCO is an official Meta Business Partner providing WhatsApp Business API solutions, no-code chatbot builders, and multi-agent live chat for 3,000+ customers. We built their high-throughput messaging infrastructure on AWS to handle millions of WhatsApp messages with 98% delivery rates and real-time analytics.",
    industry: "SaaS / Communication",
    region: "MENA",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-500",
    services: [
      {
        icon: BsChatDots,
        name: "Amazon SQS & SNS",
        detail: "Message queuing for reliable bulk WhatsApp delivery at scale",
      },
      {
        icon: BsCloudArrowUp,
        name: "AWS Lambda",
        detail: "Event-driven processing for chatbot logic and webhook handlers",
      },
      {
        icon: BsDatabase,
        name: "Amazon RDS",
        detail: "Managed PostgreSQL for customer data, templates, and analytics",
      },
      {
        icon: BsLightning,
        name: "Amazon ElastiCache",
        detail: "Redis caching for real-time chat sessions and agent routing",
      },
      {
        icon: BsCloudCheck,
        name: "Amazon ECS",
        detail: "Containerized microservices for the unified messaging dashboard",
      },
      {
        icon: BsLock,
        name: "AWS WAF & Shield",
        detail: "API protection and DDoS mitigation for Meta webhook endpoints",
      },
    ],
  },
  {
    company: "Edufund",
    url: "https://edufund.africa/",
    logo: null,
    tagline: "Connecting Nigerian Students with Scholarships",
    description:
      "Edufund is Nigeria's leading platform matching students with scholarships and grants for higher education. We designed their cloud-native architecture on AWS to deliver personalized matching algorithms, handle traffic surges during application seasons, and ensure data protection compliance for student information.",
    industry: "EdTech / Fintech",
    region: "Nigeria & West Africa",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    accentColor: "text-blue-500",
    services: [
      {
        icon: BsGlobe,
        name: "AWS Amplify",
        detail: "Hosting and CI/CD for the Next.js frontend application",
      },
      {
        icon: BsCloudArrowUp,
        name: "AWS Lambda",
        detail: "Serverless APIs for scholarship matching and search algorithms",
      },
      {
        icon: BsDatabase,
        name: "Amazon DynamoDB",
        detail: "Scalable storage for scholarship listings and student profiles",
      },
      {
        icon: BsPhone,
        name: "Amazon SES",
        detail: "Transactional emails for application updates and match notifications",
      },
      {
        icon: BsShieldLock,
        name: "AWS Cognito",
        detail: "Student authentication with social login and MFA support",
      },
      {
        icon: BsBarChart,
        name: "Amazon CloudFront",
        detail: "Global CDN for fast page loads across Africa",
      },
    ],
  },
];

const CaseStudyCard = ({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Card */}
      <div
        className={`glass-card rounded-2xl border ${study.borderColor} overflow-hidden`}
      >
        {/* Header gradient */}
        <div
          className={`bg-gradient-to-r ${study.color} px-6 sm:px-8 py-6 sm:py-8`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${study.accentColor}`}
              >
                <T>{study.industry}</T> &middot; <T>{study.region}</T>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                {study.company}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                <T>{study.tagline}</T>
              </p>
            </div>
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-shrink-0 w-10 h-10 rounded-xl bg-background/80 flex items-center justify-center ${study.accentColor} hover:scale-110 transition-transform`}
            >
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 sm:px-8 py-5 sm:py-6 border-b border-border/50">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            <T>{study.description}</T>
          </p>
        </div>

        {/* AWS Services Grid */}
        <div className="px-6 sm:px-8 py-5 sm:py-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <T>AWS Services Deployed</T>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {study.services.map((service) => (
              <div
                key={service.name}
                className="flex items-start gap-3 p-3 rounded-xl bg-background/50 hover:bg-background/80 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <service.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {service.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    <T>{service.detail}</T>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudiesPage = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies | Jukel - AWS Cloud Solutions Partner"
        description="Explore how Jukel helped businesses across Africa and the Middle East build scalable, secure cloud solutions on AWS."
        path="/case-studies"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[hsl(var(--navy))]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-[#FF9900] tracking-wider uppercase">
              <T>Our Work</T>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-white">
              <T>Case</T> <span className="text-[#FF9900]"><T>Studies</T></span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl">
              <T>Real-world AWS solutions we've built for businesses across Africa and the Middle East — from IoT platforms to messaging infrastructure.</T>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding cloud-pattern relative overflow-hidden">
        <CloudWatermark variant="circuit" />
        <div className="container mx-auto relative z-10 space-y-8 sm:space-y-12">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.company} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[hsl(var(--navy))] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              <T>Ready to Build Your</T>{" "}
              <span className="text-[#FF9900]"><T>Success Story</T></span>?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              <T>Let's discuss how AWS cloud solutions can transform your business.</T>
            </p>
            <a
              href="mailto:support@jukel.com?subject=Cloud%20Readiness"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <T>Get Started</T>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CaseStudiesPage;
