import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlay,
  setCurrentSong,
  addIndex,
  reduceIndex
} from "../../reducers/songReducer";
import {
  StyledSongPlayerContainer,
  StyledPlayIcon,
  StyledPauseIcon
} from "./StyledSongPlayerContainer";
import { Button } from "../../atom/Button";

const SongPlayerContainer = () => {
  const dispatch = useDispatch();
  const {
    songs,
    currentSong,
    songAction: { search, isPlaying },
    searchSongs,
    currentIndex
  } = useSelector((state: { song: any }) => state.song);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((error) => console.log("Autoplay prevented:", error));
      } else if (!isPlaying) {
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

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      dispatch(reduceIndex());
      dispatch(
        setCurrentSong({
          currentSong:
            search === "" ? songs[currentIndex - 1] : searchSongs[currentIndex - 1]
        })
      );
    }
  };

  const handleNextClick = () => {
    if (currentIndex < songs.length - 1) {
      dispatch(addIndex());
      dispatch(
        setCurrentSong({
          currentSong:
            search === "" ? songs[currentIndex + 1] : searchSongs[currentIndex + 1]
        })
      );
    }
  };

  useEffect(() => {
    togglePlayback();
    // eslint-disable-next-line
  }, [currentSong.previewUrl, isPlaying]);

  const isPrevButtonDisabled = currentIndex === 0;

  return (
    <StyledSongPlayerContainer>
      <div>
        <img src={currentSong?.artworkUrl100} alt="pic" />
      </div>
      <div>
        <p>{currentSong?.artistName}</p>
      </div>
      <div>
        <Button
          variant="primary"
          size={"large"}
          text={"Prev"}
          onClick={handlePrevClick}
          isDisable={isPrevButtonDisabled}
        />
        <Button
          className="play-button"
          size={"medium"}
          text={isPlaying ? <StyledPauseIcon /> : <StyledPlayIcon />}
          onClick={togglePlay}
        />
        <Button
          variant="primary"
          size={"large"}
          text={"Next"}
          onClick={handleNextClick}
        />
      </div>
      <audio ref={audioRef} src={currentSong?.previewUrl} />
    </StyledSongPlayerContainer>
  );
};

export default SongPlayerContainer;
