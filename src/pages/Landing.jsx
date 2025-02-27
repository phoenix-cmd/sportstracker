import React from "react";
import { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaInstagram, FaFacebookF, FaTwitter, FaArrowCircleRight } from "react-icons/fa";


// ✅ Dummy logo placeholder (You can replace this with an actual logo)
const logoPlaceholder = "https://via.placeholder.com/40";

// ✅ Athlete Data
const athleteSlides = [
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnpCr3xMG3KwrXYYNY8Qwe0VYIn9KlmyHjE5wMcK35SquMbRsDbSOTIM&usqp=CAE&s", name: "Cristiano Ronaldo", category: "Football" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVfD7jt0ws7S7psRIMChaewxLpFeOeqTWIlP1rgup4sBJTAcYVAgzSN4&usqp=CAE&s", name: "Lionel Messi", category: "Football" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-TJn1VUs1vgRqW6tsQp4lEleJnRxOxTq9Ng&s", name: "LeBron James", category: "Basketball" },
];

const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* ✅ Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-blue-950" : "bg-transparent"} bg-opacity-90`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* ✅ Logo Placeholder */}
          <a href="/" className="flex items-center text-xl sm:text-3xl font-bold text-white gap-1.5">
            <img src={logoPlaceholder} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-dark">Lc Tournament</span>
          </a>

          {/* ✅ Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            <FaArrowCircleRight className="w-6 h-6" />
          </button>

          {/* ✅ Sign-Up Button (Desktop) */}
          <a href="/signup" className="hidden md:flex items-center bg-midnight px-3 py-2 rounded-md hover:bg-blue-600 transition">
            <span className="text-white flex items-center gap-2">Get Started <FaArrowCircleRight className="w-5 h-5 ml-1" /></span>
          </a>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <main className="relative bg-blue-900 min-h-screen">
        <div className="relative min-h-[600px] h-screen">
          <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/flat-lay-baseball-bat-with-ball-gloves_23-2148523182.jpg" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Sports League</h1>
            <p className="text-lg text-gray-200 mb-8">Join the ultimate sports community and showcase your talent.</p>
            <a href="/signup" className="bg-blue-500 px-8 py-5 rounded-md font-semibold hover:bg-blue-600 transition">Get Started Today</a>
          </div>
        </div>

        {/* ✅ Footer */}
        <footer className="bg-blue-950 text-white p-5 sm:p-12">
          <div className="md:w-full flex flex-col md:flex-row justify-center items-start md:items-center mx-auto space-y-8 md:space-y-0">
            <div className="flex flex-col md:flex-row items-start gap-5">
              <img src={logoPlaceholder} alt="Logo" className="h-1/4 w-1/4" />
              <div>
                <h3 className="font-bold text-3xl sm:text-4xl">College Sports Tracker</h3>
                <p className="text-gray-400 text-xl">Track and manage college sports teams and players.</p>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-white"><FaInstagram className="h-10 w-10" /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="h-10 w-10" /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF className="h-9 w-9" /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Landing;
