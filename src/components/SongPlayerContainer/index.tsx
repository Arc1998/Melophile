import { useEffect, useRef } from "react";
import { Button } from "../../atom/Button";
import {
  StyledSongPlayerContainer,
  StyledPlayIcon,
  StyledPauseIcon,
  StyledPreviousIcon,
  StyledNextIcon
} from "./StyledSongPlayerContainer";


const SongPlayerContainer = (props :SongPlayerContainerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (props.isPlaying) {
        audioRef.current
          .play()
          .catch((error) => console.log("Autoplay prevented:", error));
      } else {
        audioRef.current.pause();
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused || !props.isPlaying) {
        props.setPlay(true);
      } else {
        props.setPlay(false);
      }
    }
  };

  const handlePrevClick = () => {
    if (props.currentIndex > 0) {
      props.reduceIndex();
      props.setCurrentSong(
        props.search === "" ? props.songs[props.currentIndex - 1] : props.searchSongs[props.currentIndex - 1]
      );
    }
  };

  const handleNextClick = () => {
    if (props.currentIndex < props.songs.length - 1) {
      props.addIndex();
      props.setCurrentSong(
        props.search === "" ? props.songs[props.currentIndex + 1] : props.searchSongs[props.currentIndex + 1]
      );
    }
  };

  useEffect(() => {
    togglePlayback();
    // eslint-disable-next-line
  }, [props?.currentSong?.previewUrl, props.isPlaying]);

  const isPrevButtonDisabled = props.currentIndex === 0;

  return (
    <StyledSongPlayerContainer>
      <div>
        <img src={props.currentSong?.artworkUrl100} alt="pic" />
      </div>
      <div>
        <p>{props.currentSong?.artistName}</p>
      </div>
      <div>
      <StyledPreviousIcon
          onClick={handlePrevClick}
          className={isPrevButtonDisabled ? "disabled" : ""}
        />
        
          {props.isPlaying ? <StyledPauseIcon onClick={togglePlay} /> : <StyledPlayIcon onClick={togglePlay} />}
        <StyledNextIcon onClick={handleNextClick} />
      </div>
      <audio ref={audioRef} src={props.currentSong?.previewUrl} />
    </StyledSongPlayerContainer>
  );
};

export default SongPlayerContainer;
