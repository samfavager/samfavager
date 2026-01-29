import { motion } from "framer-motion";
import { useState } from "react";

interface DeviceFaceProps {
  onClick?: () => void;
}

const DeviceFace = ({ onClick }: DeviceFaceProps) => {
  const [isHappy, setIsHappy] = useState(false);

  return (
    <motion.div
      className="relative w-32 h-32 cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHappy(true)}
      onMouseLeave={() => setIsHappy(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: -5 }}
    >
      {/* Face container */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 border-4 border-yellow-500 shadow-lg face-idle flex items-center justify-center">
        {/* Eyes */}
        <div className="flex gap-4 mb-2">
          <motion.div
            className="w-4 h-6 bg-gray-900 rounded-full blink-animation"
            animate={isHappy ? { scaleY: 0.6, y: 2 } : { scaleY: 1, y: 0 }}
          />
          <motion.div
            className="w-4 h-6 bg-gray-900 rounded-full blink-animation"
            style={{ animationDelay: "0.1s" }}
            animate={isHappy ? { scaleY: 0.6, y: 2 } : { scaleY: 1, y: 0 }}
          />
        </div>
      </div>
      
      {/* Mouth */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={isHappy ? { scale: 1.2 } : { scale: 1 }}
      >
        {isHappy ? (
          <div className="w-8 h-4 border-b-4 border-gray-900 rounded-b-full" />
        ) : (
          <div className="w-6 h-3 bg-gray-900 rounded-full" />
        )}
      </motion.div>

      {/* Glasses */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-6 h-5 border-2 border-gray-700 rounded bg-blue-400/20" />
        <div className="w-2 h-0.5 bg-gray-700 mt-2" />
        <div className="w-6 h-5 border-2 border-gray-700 rounded bg-blue-400/20" />
      </div>
    </motion.div>
  );
};

export default DeviceFace;
