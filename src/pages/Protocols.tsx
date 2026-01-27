import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { CheckCircle2, ArrowRight } from "lucide-react";

const frameworks = [
  {
    title: "Discovery & Research",
    description: "Understanding user needs through qualitative and quantitative research methods.",
    steps: [
      "User interviews and surveys",
      "Competitive analysis",
      "Market research and trend analysis",
      "Data analysis and insights synthesis",
    ],
  },
  {
    title: "Strategy & Prioritization",
    description: "Aligning product decisions with business objectives and user value.",
    steps: [
      "OKR definition and alignment",
      "RICE/ICE prioritization frameworks",
      "Roadmap planning and communication",
      "Stakeholder alignment sessions",
    ],
  },
  {
    title: "Execution & Delivery",
    description: "Shipping high-quality products through iterative development.",
    steps: [
      "Agile/Scrum methodology",
      "Sprint planning and retrospectives",
      "Cross-functional collaboration",
      "Quality assurance and testing",
    ],
  },
  {
    title: "Measurement & Iteration",
    description: "Data-driven decision making and continuous improvement.",
    steps: [
      "KPI definition and tracking",
      "A/B testing and experimentation",
      "User feedback loops",
      "Post-launch analysis and iteration",
    ],
  },
];

const tools = [
  "Figma",
  "Jira",
  "Notion",
  "Amplitude",
  "Mixpanel",
  "Linear",
  "Miro",
  "Slack",
];

const Protocols = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="max-w-2xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-pixel text-3xl md:text-5xl text-foreground mb-6">
              Protocols & Frameworks
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach to product management is grounded in proven frameworks 
              while remaining flexible to adapt to unique challenges and contexts.
            </p>
          </motion.div>

          {/* Frameworks Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                className="p-6 md:p-8 bg-card rounded-xl border border-border card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{framework.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{framework.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-11">
                  {framework.steps.map((step) => (
                    <li key={step} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            className="p-8 bg-card rounded-xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-6">Tools I Work With</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">Interested in working together?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Let's connect
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Protocols;
