import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-6 fixed bottom-0 left-0 w-full">
      {/* Song Info Section */}
      <div className="flex items-center gap-4">
        <img className="w-12 h-12 rounded-md" src={track.image} alt="Song Cover" />
        <div>
          <p className="font-bold">{track.name || "Unknown Song"}</p>
          <p className="text-sm text-gray-400">{track.desc?.slice(0, 12) || "No Description"}</p>
        </div>
      </div>

      {/* Control and Seekbar Section */}
      <div className="flex flex-col items-center flex-1 px-4">
        <div className="flex gap-6 mb-2">
          <img className="w-6 cursor-pointer hover:opacity-80" src={assets.shuffle_icon} alt="Shuffle" />
          <img onClick={previous} className="w-6 cursor-pointer hover:opacity-80" src={assets.prev_icon} alt="Previous" />
          {playStatus ? (
            <img onClick={pause} className="w-8 cursor-pointer hover:opacity-80" src={assets.pause_icon} alt="Pause" />
          ) : (
            <img onClick={play} className="w-8 cursor-pointer hover:opacity-80" src={assets.play_icon} alt="Play" />
          )}
          <img onClick={next} className="w-6 cursor-pointer hover:opacity-80" src={assets.next_icon} alt="Next" />
          <img className="w-6 cursor-pointer hover:opacity-80" src={assets.loop_icon} alt="Loop" />
        </div>

        {/* Time and Progress Bar */}
        <div className="flex items-center gap-4 w-full max-w-[600px]">
          <p>{`${time.currentTime.minute || 0}:${String(time.currentTime.second || 0).padStart(2, "0")}`}</p>
          <div  ref={seekBg} onClick={seekSong} className="flex-1 bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none bg-green-800 rounded-full w-0 transition-all" />
          </div>
          <p>{`${time.totalTime.minute || 0}:${String(time.totalTime.second || 0).padStart(2, "0")}`}</p>
        </div>
      </div>

      {/* Additional Controls */}
      <div className="flex items-center gap-2 opacity-75">
        <img className="w-4 cursor-pointer hover:opacity-80" src={assets.plays_icon} alt="Play Queue" />
        <img className="w-4 cursor-pointer hover:opacity-80" src={assets.mic_icon} alt="Microphone" />
        <img className="w-4 cursor-pointer hover:opacity-80" src={assets.queue_icon} alt="Queue" />
        <img className="w-4 cursor-pointer hover:opacity-80" src={assets.speaker_icon} alt="Speaker" />
        <img className="w-4 cursor-pointer hover:opacity-80" src={assets.volume_icon} alt="Volume" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4 cursor-pointer hover:opacity-80" src={assets.mini_player_icon} alt="Mini Player" />
        <img className="w-4 cursor-pointer hover:opacity-80" src={assets.zoom_icon} alt="Full Screen" />
      </div>
    </div>
  );
};

export default Player;
