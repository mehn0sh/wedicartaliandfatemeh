"use client";
import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => {});
      }

      // فقط یکبار اجرا شود
      document.removeEventListener("click", playMusic);
    };

    // اولین تعامل کاربر
    document.addEventListener("click", playMusic);

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/wedding.mp3"
      loop
      preload="auto"
    />
  );
}