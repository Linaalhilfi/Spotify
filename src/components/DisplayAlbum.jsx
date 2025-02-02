import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  // Hantera om albumData är undefined
  if (!albumData) {
    return <p className="text-white text-center mt-10">Album not found.</p>;
  }

  return (
    <>
      <Navbar />

      {/* Album Layout */}
      <div className="mt-10 flex gap-8 items-center text-white">
        <img className="w-48 rounded-lg shadow-lg" src={albumData.image} alt={`${albumData.name} Cover`} />
        <div className="flex flex-col gap-4">
          <p className="text-slate-400">Playlist</p>
          <h2 className="text-5xl font-bold">{albumData.name}</h2>
          <p className="text-lg text-slate-300">{albumData.desc}</p>
          <div className="flex items-center gap-2 text-slate-400 mt-4">
            <img className="w-5" src={assets.spotify_logo} alt="Spotify Logo" />
            <span>Spotify</span>
            <span className="mx-2">·</span>
            <span>1,323,154 likes</span>
            <span className="mx-2">·</span>
            <span><b>50 songs,</b> about 2 hr 30 min</span>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] items-center text-sm">
        <p className="flex items-center font-semibold text-left">
          <b className="mr-4">#</b> Title
        </p>
        <p className="font-semibold text-left">Album</p>
        <p className="font-semibold text-left">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Duration Icon" />
      </div>
      <hr className="border-[#a7a7a7] mb-4" />

      {/* Song List */}
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-4 gap-4 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white flex items-center gap-4">
            <b className="text-[#a7a7a7]">{index + 1}</b>
            <img className="w-10 rounded" src={item.image} alt={`${item.name} Cover`} />
            <span>{item.name}</span>
          </p>
          <p className="text-[15px] text-left">{albumData.name}</p>
          <p className="text-[15px] text-left">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
