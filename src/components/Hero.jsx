import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Container and item animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Car Image with animation */}
      <motion.img
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        src="/assets/cars/sports.jpg"
        alt="Hero Car"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Discover Your Dream Car
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl"
        >
          Explore, compare, and find the perfect car that matches your style and performance needs.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-[#ff6a00] hover:bg-[#e65c00] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
        >
          Get Started <FaArrowRight />
        </motion.button>
      </motion.div>

      {/* Optional: Animated Car Engine Illustration (optional overlay) */}
      <motion.img
        src="/assets/cars/engine.png"
        alt="Engine Illustration"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.4 }}
        className="absolute bottom-8 right-8 w-32 md:w-40 opacity-20 pointer-events-none select-none"
      />
    </section>
  );
};

export default Hero;
