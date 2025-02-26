import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";
import Analytics from "./pages/Analytics";
import PlayerDetails from "./pages/PlayerDetails";
import Admin from "./pages/Admin";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";

function App() {
  const location = useLocation(); // ✅ Get current route
  const hideNavbarFooter = ["/", "/signup"].includes(location.pathname); // ✅ Hide on Landing & Signup

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* ✅ Show Navbar only if not on Landing or Signup */}
      {!hideNavbarFooter && <Navbar />}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/players/:playerName" element={<PlayerDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

      {/* ✅ Show Footer only if not on Landing or Signup */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
