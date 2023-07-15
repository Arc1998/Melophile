import {  useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlay,setCurrentSong,addIndex,reduceIndex } from "../../reducers/songReducer";
import { StyledSongPlayerContainer, StyledPlayIcon, StyledPauseIcon } from "./StyledSongPlayerContainer";
import { Button } from "antd";

const SongPlayerContainer = () => {
  const dispatch = useDispatch();
  const {
    songs,
    currentSong,
    songAction: { search,isPlaying },
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

  useEffect(() => {
      togglePlayback();
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
        <Button onClick={()=>{
            dispatch(reduceIndex())
            dispatch(setCurrentSong({currentSong:search===""?songs[currentIndex]:searchSongs[currentIndex]}))
        }}>prev</Button>
        <Button onClick={togglePlay} className="play-button">
          {isPlaying ? <StyledPauseIcon /> : <StyledPlayIcon />}
        </Button>
        <button onClick={()=>{
           dispatch(addIndex())
           dispatch(setCurrentSong({currentSong:search===""?songs[currentIndex]:searchSongs[currentIndex]}))
     }}>next</button>
      </div>
      <audio ref={audioRef} src={currentSong?.previewUrl} />
    </StyledSongPlayerContainer>
  );
};

export default SongPlayerContainer;
