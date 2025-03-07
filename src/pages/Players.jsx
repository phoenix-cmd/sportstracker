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
    </div>
  );
}

export default Players;
