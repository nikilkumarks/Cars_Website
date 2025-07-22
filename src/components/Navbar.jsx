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

const navItems = ["Home", "Compare", "CarList", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const isActive = (item) => {
    const route = item === "Home" ? "/" : `/${item.toLowerCase()}`;
    return location.pathname === route;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold text-white tracking-wide"
        >
          <FaCarSide className="text-teal-400 animate-pulse" />
          <span className="text-white">TorqueZone</span>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center bg-gray-700/40 px-4 py-2 rounded-full shadow-inner space-x-1">
          {navItems.map((item) => {
            const route = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                to={route}
                className={clsx(
                  "px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  isActive(item)
                    ? "bg-white text-black"
                    : "text-white/80 hover:bg-white/20"
                )}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search cars..."
            className="px-4 py-2 rounded-full bg-[#1c1c1c] text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-white text-lg hover:text-yellow-400 transition"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white text-xl hover:text-teal-400"
            >
              <FaUserCircle />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#1c1c1c] text-sm text-white rounded-md shadow-lg border border-gray-700 z-50">
                <Link
                  to="/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2a2a2a]"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-[#2a2a2a]"
                >
                  Settings
                </Link>
                <button
                  onClick={() => setDropdownOpen(false)}
                  className="w-full text-left px-4 py-2 hover:bg-[#2a2a2a]"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="text-white">
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-gray-800 px-6 py-4 space-y-4">
          {navItems.map((item) => {
            const route = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                to={route}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "block px-4 py-2 rounded-md",
                  isActive(item)
                    ? "bg-white text-black"
                    : "text-gray-300 hover:bg-white/20"
                )}
              >
                {item}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-gray-700">
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-teal-400"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-teal-400"
            >
              Settings
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="block w-full text-left text-gray-300 hover:text-red-400"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
