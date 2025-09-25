import "./MoodSongs.css";
import { useState } from "react";

const MoodSongs = ({ Songs }) => {
  const [isPlaying, setIsPlaying] = useState(null);

  const handlePlayPause = (index) => {
    if (isPlaying === index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };

  return (
    <div className="mood-songs">
      <h2>Recommended Songs For You 🎵</h2>
      {Songs.map((song, index) => (
        <div className="song" key={index}>
          <div className="title">
            <h3>{song.songName}</h3>
            <h3>({song.singerName})</h3>
          </div>
          <div className="play-pause-button">
            {isPlaying === index && (
              <audio
                src={song.audio}
                style={{ display: "none" }}
                autoPlay={isPlaying === index}
              ></audio>
            )}
            <button onClick={() => handlePlayPause(index)}>
              {isPlaying === index ? (
                <i className="ri-pause-line"></i>
              ) : (
                <i className="ri-play-line"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
