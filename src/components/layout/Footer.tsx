import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-auto">
      <div className="container-narrow">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-pixel text-lg text-foreground">Sam Favager</span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
