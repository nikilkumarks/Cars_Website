import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaCarSide,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "Compare", "CarList", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const isActive = (item) => {
    const route = item === "Home" ? "/" : `/${item === "CarList" ? "CarList" : item.toLowerCase()}`;
    return location.pathname === route;
  };

  return (
    <nav className={clsx(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      scrolled
        ? "bg-bg-dark/80 backdrop-blur-2xl py-3 border-b border-white/5"
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold tracking-tighter group"
        >
          <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <FaCarSide className="text-white text-xl" />
          </div>
          <span className="text-white font-outfit uppercase">Torque<span className="text-primary italic">Zone</span></span>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const route = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                to={route}
                className={clsx(
                  "px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 relative group overflow-hidden",
                  isActive(item)
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                )}
              >
                <span className="relative z-10">{item}</span>
                {isActive(item) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-6">
          {/* Profile */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors font-medium"
            >
              <FaUserCircle className="text-2xl" />
              <span>Account</span>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-3 w-48 glass rounded-2xl shadow-2xl border border-white/10 z-50 overflow-hidden"
                >
                  <Link
                    to="/collection"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 text-sm text-white/80 hover:bg-primary/10 hover:text-white transition-colors"
                  >
                    My Collection
                  </Link>
                  <Link
                    to="/preferences"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 text-sm text-white/80 hover:bg-primary/10 hover:text-white transition-colors"
                  >
                    Preferences
                  </Link>
                  <div className="h-px bg-white/5 mx-2" />
                  <button
                    onClick={() => setDropdownOpen(false)}
                    className="w-full text-left px-5 py-3 text-sm text-red-400 hover:bg-red-400/10 transition-colors"
                  >
                    Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
          >
            Inquiry
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl p-2"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-dark/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => {
                const route = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <Link
                    key={item}
                    to={route}
                    onClick={() => setMenuOpen(false)}
                    className={clsx(
                      "block text-2xl font-bold font-outfit transition-colors",
                      isActive(item) ? "text-primary" : "text-white"
                    )}
                  >
                    {item}
                  </Link>
                );
              })}

              <div className="pt-6 mt-6 border-t border-white/5 flex flex-col gap-4">
                <Link
                  to="/collection"
                  className="text-white/60 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  My Collection
                </Link>
                <Link
                  to="/preferences"
                  className="text-white/60 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  General Preferences
                </Link>
                <Link
                  to="/contact"
                  className="bg-primary text-center py-4 rounded-2xl font-bold text-white shadow-xl shadow-primary/20"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Expert
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
