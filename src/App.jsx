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
import FootballMatches from "./pages/FootballMatches";
import AddPlayer from "./pages/AddPlayer";
import TeamPage from "./pages/TeamPage";
import BadmintonMatches from "./pages/BadmintonMatches";
import Profile from "./pages/profile";
import AddMatch from "./pages/AddMatch";
import MatchScoreMaintain from "./pages/matchScoreMaintain";
import Status from "./pages/AdminPage/matchScore/Status";

function App() {
  const location = useLocation();
  const hideNavbarFooter = [
    "/",
    "/signup",
    "/landing",
    "/admin",
    "/admin/teams",
    "/admin/add-player",
    "/admin/cricket-matches",
    "/admin/",
    "/admin/cricket-matches",
    "/admin/add-player",
  ].includes(location.pathname);

  return (
    <div>
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
        <Route path="/admin/teams" element={<TeamPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/addmatch" element={<AddMatch />} />
        <Route
          path="/admin/matchscoremaintain"
          element={<MatchScoreMaintain />}
        />
        <Route
          path="/admin/matchscoremaintain/status/:matchid"
          element={<Status />}
        />
      </Routes>
    </div>
  );
}

export default App;
