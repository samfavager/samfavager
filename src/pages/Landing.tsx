import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-background.png";

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fullscreen background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay to hide watermark in bottom right */}
      <div className="absolute bottom-0 right-0 w-20 h-16 bg-gradient-to-tl from-[#2a3a2a] to-transparent" />

      {/* Social links - top left */}
      <div className="absolute top-6 left-6 flex items-center gap-4 z-10">
        <a 
          href="https://substack.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-white/70 transition-colors"
          aria-label="Substack"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="1" width="18" height="4" rx="1" fill="currentColor" stroke="none"/>
            <rect x="3" y="7" width="18" height="4" rx="1" fill="currentColor" stroke="none"/>
            <path d="M3 13h18v2L12 22 3 15v-2z" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        <a 
          href="https://x.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-white/70 transition-colors"
          aria-label="X (Twitter)"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-white/70 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      {/* Burger menu - top right */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-6 right-6 z-20 text-white hover:text-white/70 transition-colors"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

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

      {/* Value proposition box */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 max-w-lg mx-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 text-center border border-white/20">
          <p className="text-white text-sm md:text-base font-medium">
            Fractional CPO & Product Director — helping startups build products users love
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
