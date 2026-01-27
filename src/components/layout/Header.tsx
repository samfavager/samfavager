import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Portfolio", path: "/" },
  { name: "Protocols & Frameworks", path: "/protocols" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <motion.span
            className="font-pixel text-2xl text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sam Favager
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path
                    ? "text-primary active"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <MobileNav />
      </div>
    </header>
  );
};

const MobileNav = () => {
  const location = useLocation();

  return (
    <div className="md:hidden">
      <nav className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-xs font-medium transition-colors ${
              location.pathname === item.path
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.name.split(" ")[0]}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
