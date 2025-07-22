import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-gray-400 py-10 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-white tracking-wide">
            TorqueZone
          </h1>
          <p className="text-sm mt-1 text-gray-500">
            Premium Car Experience for Everyone.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Contact Us
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-500 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-pink-500 transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-sky-400 transition duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-6 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} TorqueZone. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
