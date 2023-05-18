import React, { useState } from 'react';
import './index.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState([
    { title: 'Song 1', artist: 'Artist 1' },
    { title: 'Song 2', artist: 'Artist 2' },
    // Add more songs as needed
  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  
  const [musicInfo, setMusicInfo] = useState({
    title: 'Song Title',
    artist: 'Artist',
  });

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = currentTrackIndex + 1;
    if (nextIndex < playlist.length) {
      setCurrentTrackIndex(nextIndex);
      setMusicInfo(playlist[nextIndex]);
      setIsPlaying(true); // Automatically play the next song
    }
  };
  

  const handlePrevious = () => {
    // Handle previous song logic
  };

  return (
    <div className="music-player">
      <div className="music-info">
        <div className="music-title">{musicInfo.title}</div>
        <div className="music-artist">{musicInfo.artist}</div>
      </div>
      <div className="music-controls">
        <button className="control-btn" onClick={handlePrevious}>Previous</button>
        <button className="control-btn" onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button className="control-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
