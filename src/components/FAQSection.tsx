import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "What AWS services does Jukel specialize in?",
    a: "We specialize in EC2, S3, RDS, Lambda, CloudFront, EKS, and many more. Our team holds multiple AWS certifications and can handle any AWS service requirement.",
  },
  {
    q: "How long does a typical cloud migration take?",
    a: "Migration timelines vary based on complexity, but most projects are completed within 4-12 weeks. We provide a detailed timeline after our initial assessment.",
  },
  {
    q: "Do you offer 24/7 support?",
    a: "Yes, we provide round-the-clock monitoring and support with guaranteed response times based on your service level agreement.",
  },
  {
    q: "Can you help reduce our current AWS costs?",
    a: "Absolutely! Our cost optimization audits typically identify 20-40% savings through rightsizing, reserved instances, and architectural improvements.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve fintech, healthcare, e-commerce, SaaS, media, and enterprise clients across the globe with tailored cloud solutions.",
  },
];

const FAQItem = ({ q, a, index, isInView }: { q: string; a: string; index: number; isInView: boolean }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FiChevronDown className="text-primary text-xl flex-shrink-0" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faqs" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
