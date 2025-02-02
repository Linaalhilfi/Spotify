import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Music", "Podcasts"];

  return (
    <div className="w-full p-4 text-white shadow-md ">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-700"
            src={assets.arrow_left}
            alt="Left Arrow"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-700"
            src={assets.arrow_right}
            alt="Right Arrow"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300 transition-all duration-300">
            Explore Premium
          </p>
          <p className="bg-black text-white text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-gray-700 transition-all duration-300">
            Install App
          </p>
          <div className="bg-purple-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
            L
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <p
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm px-4 py-1 rounded-full cursor-pointer transition-all duration-300 ${
              activeCategory === category
                ? "bg-white text-black"
                : "bg-black text-white hover:bg-gray-700"
            }`}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
