import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
   const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white lg:flex">
      {/* Top Menu */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around gap-2">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#242424] p-2 rounded transition-all">
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#242424] p-2 rounded transition-all">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] h-[85%] rounded mt-2">
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Library Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5 cursor-pointer" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5 cursor-pointer" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>

        {/* Playlist Section */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-2">
          <h1>Create your first playlist</h1>
          <p className="font-light text-sm">It's easy, we will help you</p>
          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4 hover:bg-gray-200 transition-all">
            Create Playlist
          </button>
        </div>

        {/* Podcast Section */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-2 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light text-sm">We'll keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4 hover:bg-gray-200 transition-all">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
