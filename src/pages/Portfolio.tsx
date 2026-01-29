import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Briefcase, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "Led the complete redesign of a B2B e-commerce platform, increasing conversion rates by 45%.",
    tags: ["Product Strategy", "UX Research", "Agile"],
    year: "2024",
  },
  {
    title: "Mobile Banking App",
    description: "Managed the development of a mobile-first banking experience serving 2M+ users.",
    tags: ["Fintech", "Mobile", "User Testing"],
    year: "2023",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Built and launched an analytics dashboard product from 0 to 1, reaching $1M ARR in 12 months.",
    tags: ["B2B SaaS", "Data", "Launch"],
    year: "2023",
  },
];

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "8+" },
  { icon: Users, label: "Products Launched", value: "15" },
  { icon: Lightbulb, label: "Users Impacted", value: "10M+" },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Product Manager passionate about building products that make a difference. 
              I bridge the gap between user needs, business goals, and technical possibilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:opacity-90"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium transition-all hover:bg-secondary"
              >
                View My Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Playful Style */}
      <section className="py-16">
        <div className="container-narrow">
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="p-6 bg-card rounded-2xl border-2 border-border shadow-lg transform transition-transform">
                  <stat.icon className="w-8 h-8 mb-3 text-primary" />
                  <p className="font-pixel text-3xl md:text-4xl text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="p-6 md:p-8 bg-card rounded-xl border border-border card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
