import React, { useState } from "react";
import { FiHome, FiFileText, FiSettings, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const SidebarLink = ({ to, icon, label, active, onClick }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-300 text-left ${
        active
          ? "bg-blue-700 text-white"
          : "text-white hover:bg-blue-500 hover:text-white"
      }`}
    >
      <span className="text-lg mr-3">{icon}</span>
      <span>{label}</span>
    </Link>
  </li>
);

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // ✅ track current route

  const links = [
    { to: "/student/dashboard", icon: <FiHome />, label: "Dashboard" },
    { to: "/student/notes", icon: <FiFileText />, label: "Notes" },
    { to: "/", icon: <FiSettings />, label: "Exit" },
  ];

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex justify-between items-center bg-[#0d2a6c] text-white p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded">
            <img
              src={logo}
              alt="Diksha Classes Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="font-semibold text-lg">Diksha Classes</span>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar for desktop */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-[#0d2a6c] text-white min-h-screen p-6 flex flex-col
          transition-transform duration-300
          ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-50`}
      >
        {/* Logo Section */}
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 flex items-center justify-center rounded mr-3">
            <img
              src={logo}
              alt="Diksha Classes Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="text-xl font-semibold">Diksha Classes</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <SidebarLink
              key={link.label}
              to={link.to}
              icon={link.icon}
              label={link.label}
              active={location.pathname === link.to}
              onClick={() => setMobileOpen(false)} // ✅ close sidebar after click
            />
          ))}
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
