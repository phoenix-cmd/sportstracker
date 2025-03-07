import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-blue-950  text-white py-6 mt-auto">
      {/* ✅ Full-Width Background, Centered Content */}
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white-300">LFC</h3>
          <p className="text-white-300 text-sm">
            Tracking college tournaments with ease.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-white-300 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray">
            About
          </a>
          <a href="#" className="hover:text-white">
            Careers
          </a>
          <a href="#" className="hover:text-white">
            Support
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            📷
          </a>{" "}
          {/* Instagram */}
          <a href="#" className="hover:text-white">
            🐦
          </a>{" "}
          {/* Twitter */}
          <a href="#" className="hover:text-white">
            ▶️
          </a>{" "}
          {/* YouTube */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
