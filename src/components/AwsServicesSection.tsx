import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaAws } from "react-icons/fa";
import {
  BsGlobe,
  BsCreditCard2Front,
  BsRobot,
  BsCloudArrowUp,
  BsShieldCheck,
  BsSpeedometer,
} from "react-icons/bs";

const awsServices = [
  {
    category: "Web Applications",
    categoryIcon: BsGlobe,
    service: "Amazon EC2 & Elastic Beanstalk",
    description:
      "Scalable compute for web apps with auto-scaling, load balancing, and managed deployments — powering millions of websites worldwide.",
    useCases: ["E-commerce platforms", "Content management", "API backends"],
  },
  {
    category: "SaaS Platforms",
    categoryIcon: BsCloudArrowUp,
    service: "AWS Lambda & API Gateway",
    description:
      "Serverless compute that scales to zero when idle and handles millions of requests — perfect for multi-tenant SaaS products.",
    useCases: ["Multi-tenant backends", "Event-driven processing", "Webhooks"],
  },
  {
    category: "Fintech & Payments",
    categoryIcon: BsCreditCard2Front,
    service: "Amazon RDS & DynamoDB",
    description:
      "High-availability databases with encryption at rest, automated failover, and single-digit millisecond latency for financial transactions.",
    useCases: ["Transaction processing", "Ledger systems", "Real-time analytics"],
  },
  {
    category: "Automation & DevOps",
    categoryIcon: BsRobot,
    service: "AWS CodePipeline & CloudFormation",
    description:
      "End-to-end CI/CD automation with infrastructure as code — deploy faster, roll back safely, and maintain consistency across environments.",
    useCases: ["CI/CD pipelines", "Infrastructure provisioning", "Auto-remediation"],
  },
  {
    category: "Security & Compliance",
    categoryIcon: BsShieldCheck,
    service: "AWS IAM & GuardDuty",
    description:
      "Zero-trust identity management with intelligent threat detection — protecting critical workloads across every industry.",
    useCases: ["Access control", "Threat monitoring", "Compliance auditing"],
  },
  {
    category: "Performance & CDN",
    categoryIcon: BsSpeedometer,
    service: "Amazon CloudFront & Route 53",
    description:
      "Global content delivery with sub-50ms latency and DNS routing — ensuring your apps are fast for users everywhere.",
    useCases: ["Static asset delivery", "Video streaming", "Global routing"],
  },
];

const AwsServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="aws-services" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl float-animation" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl float-animation-delayed" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            Powering Critical Apps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-white">
            AWS Services for{" "}
            <span className="gradient-text">Every Workload</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            From web apps and SaaS platforms to fintech and automation — these are the
            AWS services powering modern businesses every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awsServices.map((item, i) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <item.categoryIcon className="text-lg text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <FaAws className="text-xl text-white/40 flex-shrink-0" />
                <h3 className="text-lg font-bold text-white">{item.service}</h3>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwsServicesSection;
