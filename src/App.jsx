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
import CricketMatches from "./pages/CricketMatches";
import AddPlayer from "./pages/AddPlayer";

function App() {
  const location = useLocation(); 
  const hideNavbarFooter = ["/", "/signup", "/landing", "/admin", "/admin/cricket-matches", "/admin/add-player"].includes(location.pathname);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {!hideNavbarFooter && <Navbar />} 
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/players/:playerName" element={<PlayerDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/cricket-matches" element={<CricketMatches />} />
          <Route path="/admin/add-player" element={<AddPlayer />} />
        </Routes>
      </div>

      {!hideNavbarFooter && <Footer />} 
    </div>
  );
}

export default App;
