<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // ✅ Base64 Logo
  const logo =
    "data:image/jpeg;base64,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"; // Your full Base64 string

  return (
    <nav className="w-full bg-dark h-16 text-white p-3 fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* ✅ Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="LFC Logo" className="h-9 w-9" />
          <span className="text-2xl font-bold">LFC</span>
        </div>

        {/* ✅ Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/players" className="hover:text-gray-400">
            Players
          </Link>
          <Link to="/teams" className="hover:text-gray-400">
            Teams
          </Link>
          <Link to="/matches" className="hover:text-gray-400">
            Matches
          </Link>
          <Link to="/analytics" className="hover:text-gray-400">
            Analytics
          </Link>
          <Link to="/admin" className="hover:text-gray-400">
            Admin
          </Link>
        </div>
      </div>
    </nav>
=======
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Only change transparency if mobile menu is closed
      if (window.innerWidth < 768 && !isOpen) {
        setIsScrolled(window.scrollY > 20);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isOpen]); // Add isOpen as dependency

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/players", label: "Players" },
    { path: "/teams", label: "Teams" },
    { path: "/matches", label: "Matches" },
    { path: "/analytics", label: "Analytics" },
    { path: "/admin", label: "Admin" },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="relative">
      <nav className="fixed w-full z-50 transition-all duration-300 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={logo}
                  alt="LFC Logo"
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-2xl font-bold text-white hidden sm:block">
                  LFC
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm transition-colors duration-200 ${
                    isActivePath(link.path)
                      ? "text-blue-400 font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Always visible on mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isOpen}
              >
                <span className="sr-only">
                  {isOpen ? "Close menu" : "Open menu"}
                </span>
                {isOpen ? (
                  <HiX className="block h-6 w-6" />
                ) : (
                  <HiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Slide in menu */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden fixed inset-0 z-40 w-full bg-dark transform transition-transform duration-300 ease-in-out`}
        >
          <div className="pt-20 pb-3 space-y-1 px-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              {isOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActivePath(link.path)
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </div>
>>>>>>> c3d914d7738cdab3d25e67ea32c92b006f8c5f37
  );
}

export default Navbar;
