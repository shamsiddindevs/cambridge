import React, { useState, useRef } from 'react';

const Contact = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <video
        ref={videoRef}
        className="w-full h-auto"
        src="https://www.w3schools.com/html/mov_bbb.mp4" // Video manzilingizni qo'ying
        muted
      />
      <button
        onClick={handlePlayPause}
        className="absolute inset-0 absolute top-1/2 left-1/2  -translate-y-1/2  -translate-x-1/2 bg-black bg-opacity-50 text-white text-lg rounded-full w-16 h-16"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Contact;
