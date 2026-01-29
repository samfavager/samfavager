import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Built with curiosity & caffeine by Sam Favager
        </motion.p>
        <motion.p
          className="text-xs text-muted-foreground/60 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Inspired by{" "}
          <a
            href="https://pierrelouis.webflow.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Pierre-Louis Labonne
          </a>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
