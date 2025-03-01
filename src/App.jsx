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
import TeamPage from "./pages/TeamPage";

function App() {
<<<<<<< HEAD
  const location = useLocation();
  const hideNavbarFooter = ["/", "/signup", "/landing", "/admin"].includes(
    location.pathname
  ); // ✅ Now hides on Landing Page too

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {!hideNavbarFooter && <Navbar />}{" "}
      {/* ✅ Navbar hidden on Landing & Signup & Landing Page */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />{" "}
          {/* ✅ Route for explicit Landing Page */}
=======
  const location = useLocation(); 
  const hideNavbarFooter = ["/", "/signup", "/landing", "/admin", "/admin/cricket-matches", "/admin/add-player","/admin/teams"].includes(location.pathname);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {!hideNavbarFooter && <Navbar />} 
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
>>>>>>> cd4356a495889cd89f9cfedfd742b4fbed5ad6dd
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
          <Route path="/admin/teams" element={<TeamPage />}/>
        </Routes>
      </div>
<<<<<<< HEAD
      {!hideNavbarFooter && <Footer />}
=======

      {!hideNavbarFooter && <Footer />} 
>>>>>>> cd4356a495889cd89f9cfedfd742b4fbed5ad6dd
    </div>
  );
}

export default App;
