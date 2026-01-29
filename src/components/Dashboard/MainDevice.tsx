import { motion } from "framer-motion";
import { useState } from "react";
import DeviceFace from "./DeviceFace";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

interface MainDeviceProps {
  onContactClick: () => void;
}

const MainDevice = ({ onContactClick }: MainDeviceProps) => {
  const [isPoweredOn, setIsPoweredOn] = useState(false);

  return (
    <div className="relative">
      {/* Spring */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-8 h-16">
        <svg viewBox="0 0 32 64" className="w-full h-full">
          <path
            d="M16 0 C8 8, 24 16, 16 24 C8 32, 24 40, 16 48 C8 56, 24 64, 16 64"
            stroke="hsl(220, 10%, 40%)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* Main device */}
      <motion.div
        className="device rounded-3xl p-6 spring-animation"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Dots overlay */}
        <div className="dots-overlay absolute inset-0 rounded-3xl pointer-events-none" />

        {/* Screen area */}
        <div className="device-screen rounded-2xl p-6 relative">
          {/* Header with name */}
          <div className="text-center mb-6">
            <h1 className="font-display text-2xl md:text-3xl text-white mb-2">
              I'm Sam Favager
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Product Manager & builder of things. Welcome to my personal dashboard.
            </p>
          </div>

          {/* Face */}
          <div className="flex justify-center mb-6">
            <DeviceFace onClick={() => setIsPoweredOn(!isPoweredOn)} />
          </div>

          {/* Power button */}
          {!isPoweredOn && (
            <motion.button
              className="mx-auto block glow-button bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-display font-semibold"
              onClick={() => setIsPoweredOn(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                Turn On
              </span>
            </motion.button>
          )}

          {/* Content when powered on */}
          {isPoweredOn && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Action buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                <motion.button
                  className="glow-button bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                  onClick={onContactClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </motion.button>
                
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button bg-[#0077B5] text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </motion.a>
              </div>

              {/* Status */}
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="status-dot bg-green-400 text-green-400" />
                <span className="text-green-400">Available for hire</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Device label */}
        <div className="mt-4 text-center">
          <span className="text-xs font-display text-white/60 tracking-wider uppercase">
            Sam Favager • Product Manager
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default MainDevice;
