import { motion } from "framer-motion";
import { Eye, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  year: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, year, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card rounded-2xl p-5 hover-lift cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-primary" />
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>
        <motion.div
          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <h3 className="font-display text-lg text-white mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
