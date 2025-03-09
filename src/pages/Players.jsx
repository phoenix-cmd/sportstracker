<<<<<<< HEAD
import React from "react";
import Card from "../components/Card"; // Import the reusable Card component

const players = [
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnpCr3xMG3KwrXYYNY8Qwe0VYIn9KlmyHjE5wMcK35SquMbRsDbSOTIM&usqp=CAE&s", name: "Cristiano Ronaldo", category: "Football" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVfD7jt0ws7S7psRIMChaewxLpFeOeqTWIlP1rgup4sBJTAcYVAgzSN4&usqp=CAE&s", name: "Lionel Messi", category: "Football" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-TJn1VUs1vgRqW6tsQp4lEleJnRxOxTq9Ng&s", name: "LeBron James", category: "Basketball" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTQa5JZZ3-qwGX4I8dtdDWXZ4en3SNb538nSQGKInVJ6egRjxHa17cww&usqp=CAE&s", name: "Michael Jordan", category: "Basketball" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjDE4yqjSwOxOX_e6RERiTRgFwLy6OYdde93FVquD7eJtV_9j_FMyvdI&usqp=CAE&s", name: "Serena Williams", category: "Tennis" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5CFf3HoRTWuv8ENs8f6qS9w5hc1vcJS_YUMaclOZ6KNwRlAyFCcTG5-s&usqp=CAE&s", name: "Roger Federer", category: "Tennis" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0LqiD5onA02jb4Vdpk4io-6F8uxRlRZIo3PVwbCL6Ho2gcwKCRu9lu8&usqp=CAE&s", name: "Virat Kohli", category: "Cricket" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0p61uaaEk_YypdYevMgt_S_JaRIRZjKagcgNxXaauw0yRFyRTaCk8FU&s", name: "Usain Bolt", category: "Athletics" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatLorcseSjedWzRIPAuGWJ1n_5Cr8sGHEI4Oi2m0gfQGhaMv7kcBwhkE&usqp=CAE&s", name: "Simone Biles", category: "Gymnastics" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsaLAdAVKFsvGnxdTvjzBFvMfRbYkH4hnp2eVj5dtH0hmLuaT8c7sZWE&s", name: "Tom Brady", category: "American Football" },
];

function Players() {
  return (
    <div className="flex flex-col flex-grow min-h-screen justify-center items-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mt-10">Players</h1>
      <p className="text-gray-400 text-center">Browse all registered players.</p>

      {/* ✅ Grid Layout for Player Cards */}
      <div className="mt-10 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player, index) => (
          <Card key={index} image={player.image} name={player.name} category={player.category} />
        ))}
      </div>
=======
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { showToast } from "../components/Ui/Toastify";
import ErrorHandler from "../components/Ui/StatusCodeError";
function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchPlayers = async () => {
      try {
        const response = await fetch(
          `http://localhost:2000/api/v2/admin/allplayers`
        );
        const data = await response.json();
        if (response.status === 200) {
          setPlayers(data.data || []);
        } else {
          if (response.status === 400) {
            setError({
              statusCode: 400,
              message: data.message || "Bad request",
            });
            return null;
          }
          if (response.status === 404) {
            setError({ statusCode: 404, message: "Failed to fetch" });
            return null;
          }
        }
      } catch (error) {
        setError({ statusCode: 500, message: "Resource not found" });
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  if (error) {
    return (
      <ErrorHandler statusCode={error.statusCode} message={error.message} />
    );
  }

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center w-full py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="relative">
      <Navbar />
      <main className="bg-midnight min-h-screen relatives">
        <div className="flex flex-col flex-grow min-h-screen justify-start items-center  text-white p-6">
          <h1 className="text-4xl font-bold text-center mt-10">Players</h1>
          <p className="text-gray-400 text-center">
            Browse all registered players.
          </p>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="mt-10 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
              {players.length > 0 ? (
                players.map((player) => (
                  <Card
                    key={player._id}
                    image={
                      !player.photo
                        ? "https://img.freepik.com/free-vector/young-prince-royal-attire_1308-176144.jpg?ga=GA1.1.482852627.1738911374&semt=ais_hybrid"
                        : player.photo
                    }
                    name={player.name}
                    category={player.category || player.sport}
                  />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-400 py-10">
                  No players found
                </div>
              )}
            </div>
          )}
          <ToastContainer />
        </div>
      </main>
      <Footer />
>>>>>>> c3d914d7738cdab3d25e67ea32c92b006f8c5f37
    </div>
  );
}

export default Players;
