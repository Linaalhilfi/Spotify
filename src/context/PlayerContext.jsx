import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = (id) => {
    setTrack(songsData[id]);  // Uppdatera aktuellt spår
    if (audioRef.current) {
      audioRef.current.src = songsData[id].src;  // Ställ in ny ljudkälla
      audioRef.current.play();  // Starta uppspelning
      setPlayStatus(true);
    }
  };

   const previous = async () => {
    if (track.id>0){
        await setTrack(songsData[track.id-1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
   }
    const seekSong = async (e) => {
      audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)

      
    }

   const next = async () => {
    if (track.id< songsData.length-1){
        await setTrack(songsData[track.id+1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
   }

  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        // Uppdatera progress barens bredd
        const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        seekBar.current.style.width = `${progress}%`;

        // Uppdatera tid
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      }
    };

    // Lägg till eventlistener
    audioRef.current.addEventListener("timeupdate", updateTime);

    // Ta bort eventlistener när komponenten avmonteras
    return () => {
      audioRef.current.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,next,
    seekSong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
