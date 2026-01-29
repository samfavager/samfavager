import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

const thoughts = [
  {
    title: "On User Obsession",
    content: "The best products come from genuinely caring about the people who use them. Not in a 'we did user research' checkbox way, but in a 'I lie awake thinking about their problems' way.",
  },
  {
    title: "On Moving Fast",
    content: "Speed isn't about cutting corners—it's about cutting scope ruthlessly. Ship the smallest thing that teaches you something real.",
  },
  {
    title: "On Saying No",
    content: "Every feature you add is a feature you have to maintain forever. The best products are defined as much by what they don't do as what they do.",
  },
  {
    title: "On Data vs Intuition",
    content: "Data tells you what happened. Intuition tells you what might happen. The magic is knowing when to trust each one.",
  },
  {
    title: "On Cross-Functional Magic",
    content: "The best ideas emerge at the intersection of design, engineering, and product. My job isn't to have all the answers—it's to create space for collective genius.",
  },
];

const MyThoughts = () => {
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
              My Thoughts
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Opinions forged in the trenches. These are the principles I've learned 
              building products—some the hard way.
            </p>
          </motion.div>

          {/* Thoughts List */}
          <div className="space-y-6 mb-16">
            {thoughts.map((thought, index) => (
              <motion.div
                key={thought.title}
                className="p-6 md:p-8 bg-card rounded-xl border border-border card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {thought.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {thought.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">Want to swap product war stories?</p>
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

export default MyThoughts;
