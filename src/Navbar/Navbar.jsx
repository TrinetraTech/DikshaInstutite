import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ import useLocation
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png"; // path to your logo image

const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Classes", to: "/classes" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // ✅ get current route

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <img
                src={logo}
                alt="Diksha Classes Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-white select-none">
                Diksha Classes
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                    location.pathname === link.to
                      ? "bg-blue-100 dark:bg-blue-950 font-bold"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right - Hamburger */}
            <div className="flex items-center gap-2">
              <button
                className="lg:hidden ml-2 p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open main menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center bg-white dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2 shadow-md">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  location.pathname === link.to
                    ? "bg-blue-100 dark:bg-blue-950 font-bold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
