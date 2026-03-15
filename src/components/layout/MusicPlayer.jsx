// src/components/layout/MusicPlayer.jsx
import { useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    if (audio) {
      // Coba play
      audio.volume = 0.3;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay gagal:", error);
          // Browser block autoplay
        });
      }
    }
  }, []);

  return (
    <audio 
      ref={audioRef}
      src="/music/music.mp3"  // ← GANTI DENGAN NAMA FILE ANDA
      loop
    />
  );
}