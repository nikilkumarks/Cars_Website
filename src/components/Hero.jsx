import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Car Image with parallax-like animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1542362567-b055002b91f4?q=80&w=2600"
          alt="Hero Luxury"
          className="w-full h-full object-cover brightness-[0.5]"
        />
      </motion.div>

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/20 z-10" />

      {/* Animated Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">A Legacy of Perfection</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] font-outfit uppercase tracking-tighter"
          >
            PURE <br />
            <span className="text-gradient-primary italic">VELOCITY.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gradient-white mt-12 max-w-lg leading-relaxed font-medium"
          >
            Curating the world's most extraordinary automotive masterpieces for a distinguished few.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 mt-12"
          >
            <Link to="/CarList">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl flex items-center gap-3 shadow-2xl shadow-primary/30 font-bold transition-all"
              >
                Browse Inventory <FaArrowRight />
              </motion.button>
            </Link>

            <Link to="/compare">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="border border-white/20 text-white px-10 py-5 rounded-2xl font-bold backdrop-blur-sm transition-all"
              >
                Compare Models
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Stat Cards (Bottom Right) */}
      <div className="absolute bottom-12 right-12 z-30 hidden xl:flex gap-8">
        {[
          { label: "Elite Models", value: "250+" },
          { label: "Happy Clients", value: "1.2k" },
          { label: "Top Speed", value: "400kmh" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.2 }}
            className="glass p-6 rounded-2xl min-w-[160px]"
          >
            <p className="text-primary font-black text-2xl font-outfit">{stat.value}</p>
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
