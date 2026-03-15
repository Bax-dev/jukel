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
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl float-animation" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl float-animation-delayed" />

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">
            AWS Services for{" "}
            <span className="gradient-text">Every Workload</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From web apps and SaaS platforms to fintech and automation — these are the
            AWS services powering modern businesses every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {awsServices.map((item, i) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-5 sm:p-8 group hover:border-primary/30 shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <item.categoryIcon className="text-lg text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 p-1">
                  <svg viewBox="0 0 304 182" className="w-full h-full">
                    <path d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4h.1zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9l-23.5-77.3c-.6-2-0.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z" fill="#232F3E"/>
                    <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6zm13.7-15.6c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" fill="#FF9900"/>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">{item.service}</h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
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
