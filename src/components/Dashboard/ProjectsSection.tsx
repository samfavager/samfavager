import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "Led the complete redesign of a B2B e-commerce platform, increasing conversion rates by 45% through user-centered design.",
    tags: ["Product Strategy", "UX Research", "Agile"],
    year: "2024",
  },
  {
    title: "Mobile Banking App",
    description: "Managed the development of a mobile-first banking experience serving 2M+ users with seamless transactions.",
    tags: ["Fintech", "Mobile", "User Testing"],
    year: "2023",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Built and launched an analytics dashboard product from 0 to 1, reaching $1M ARR in just 12 months.",
    tags: ["B2B SaaS", "Data", "Launch"],
    year: "2023",
  },
  {
    title: "AI-Powered Search Feature",
    description: "Introduced intelligent search functionality that improved user engagement by 60% and reduced support tickets.",
    tags: ["AI/ML", "Search", "Innovation"],
    year: "2022",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
            Featured Work
          </h2>
          <p className="text-muted-foreground">
            Products I've built, launched, and scaled
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
