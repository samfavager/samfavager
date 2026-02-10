import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-background.png";

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Full-bleed image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-primary/10" />

      {/* Icons overlaid on image */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        {/* Social links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://substack.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-black/70 transition-colors"
            aria-label="Substack"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-black/70 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/sam-favager-26488119/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-black/70 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Burger menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="z-20 text-black hover:text-black/70 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Full screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-10 flex items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            <Link
              to="/work"
              onClick={() => setMenuOpen(false)}
              className="text-4xl md:text-6xl font-bold text-white hover:text-primary transition-colors"
            >
              Work
            </Link>
            <Link
              to="/thinking"
              onClick={() => setMenuOpen(false)}
              className="text-4xl md:text-6xl font-bold text-white hover:text-primary transition-colors"
            >
              Thinking
            </Link>
            <Link
              to="/how-i-can-help"
              onClick={() => setMenuOpen(false)}
              className="text-4xl md:text-6xl font-bold text-white hover:text-primary transition-colors"
            >
              How I Can Help
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-4xl md:text-6xl font-bold text-white hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Footer with definition text - overlaid at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 md:px-10 md:py-6 text-left z-10">
        <p className="text-white text-xl md:text-3xl lg:text-4xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ven·ture Ar·chi·tect <span className="text-base md:text-xl lg:text-2xl italic text-white/80">(noun)</span>
        </p>
        <p 
          className="text-white/90 text-sm md:text-lg lg:text-xl"
          style={{ fontFamily: "'Google Sans', 'Product Sans', sans-serif" }}
        >
          Bridging the gap between mature business models and advancing technologies.
          <br />
          Specializes in designing, building and commercializing new products and services.
        </p>
      </div>
    </div>
  );
};

export default Landing;
