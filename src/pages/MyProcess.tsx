import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Sparkles, Zap, Target, Repeat } from "lucide-react";

const processSteps = [
  {
    icon: Sparkles,
    title: "Dream It",
    description: "Every great product starts with a spark. I dig deep into user needs, market gaps, and wild possibilities to uncover what could be.",
  },
  {
    icon: Target,
    title: "Define It",
    description: "Turning chaos into clarity. I shape vague ideas into concrete visions with clear goals, success metrics, and a path forward.",
  },
  {
    icon: Zap,
    title: "Build It",
    description: "Where the magic happens. Collaborating with designers and engineers to ship fast, learn faster, and iterate relentlessly.",
  },
  {
    icon: Repeat,
    title: "Evolve It",
    description: "Products are never done. I measure what matters, listen to users, and continuously refine to create lasting impact.",
  },
];

const MyProcess = () => {
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
              My Process
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building products isn't linear—it's a dance between chaos and clarity. 
              Here's how I navigate the beautiful mess of product development.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative p-6 md:p-8 bg-card rounded-xl border border-border card-hover"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-10 -bottom-4 w-0.5 h-8 bg-border" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Philosophy Quote */}
          <motion.div
            className="mt-16 p-8 bg-primary/5 rounded-xl border border-primary/20 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-foreground italic">
              "The best products aren't built—they're discovered through endless curiosity and relentless iteration."
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MyProcess;
