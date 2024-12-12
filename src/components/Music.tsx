"use client";

import { useState, useRef } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      });
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reinicia a música
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex justify-center w-full h-10 items-center mt-2 ">
      {!isPlaying ? (
        <button
          onClick={playAudio}
          className="btn btn-primary cursor-pointer flex items-center gap-1 text-secondary font-narnoor justify-center"
        >
          <FaPlayCircle size={35} className="text-secondary" />
        </button>
      ) : (
        <button
          onClick={stopAudio}
          className="btn btn-primary cursor-pointer flex items-center gap-1 text-secondary font-narnoor justify-center"
        >
          <FaPauseCircle size={35} className="text-secondary" />
        </button>
      )}
      <audio ref={audioRef} loop>
        <source src="/music/music.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}
