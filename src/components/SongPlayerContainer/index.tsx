import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlay } from "../../reducers/songReducer";
import { StyledSongPlayerContainer, StyledPlayIcon, StyledPauseIcon } from "./StyledSongPlayerContainer";
import { Button } from "antd";

const SongPlayerContainer = () => {
  const dispatch = useDispatch();
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector((state: { song: any }) => state.song);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [initial, setinitial] = useState(true);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (audioRef.current.paused || isPlaying) {
        audioRef.current
          .play()
          .catch((error) => console.log("Autoplay prevented:", error));
      } else if (!audioRef.current.paused || !isPlaying) {
        audioRef.current.pause();
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused || !isPlaying) {
        dispatch(setPlay({ isPlaying: true }));
      } else if (!audioRef.current.paused || isPlaying) {
        dispatch(setPlay({ isPlaying: false }));
      }
    }
  };
  console.log({ currentSong })

  useEffect(() => {
    if (initial) {
      setinitial(false);
    } else {
      togglePlayback();
    }
    // eslint-disable-next-line
  }, [currentSong.previewUrl, isPlaying]);


  return (
    <StyledSongPlayerContainer>
      <div>
        <img src={currentSong?.artworkUrl100} alt="pic" />
     </div>
     <div>
        <p>{currentSong?.artistName}</p>
      </div>
      <div>
        <Button onClick={togglePlay} className="play-button">
          {isPlaying ? <StyledPauseIcon /> : <StyledPlayIcon />}
        </Button>
      </div>
      <audio ref={audioRef} src={currentSong?.previewUrl} />
    </StyledSongPlayerContainer>
  );
};

export default SongPlayerContainer;
