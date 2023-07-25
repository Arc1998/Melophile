import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentSong,
  setPlay,
  addToFavourite,
  setCurrentIndex,
} from "../../reducers/songReducer";
import { StyledSongContainer, StyledImage, StyledTrackInfo, StyledTrackName, StyledArtistName, StyledHeartIcon, StyledMusicEmoji, StyledAwaitingMessage } from "../SongContainer/StyledSongContainer"
import { useNavigate } from "react-router-dom";
import { NotificationIconType, showToast } from "../../atom/Notification";

const SongContainer = (props: SongContainerProps) => {
  const {
    currentSong,
    songAction: { isPlaying },
  } = useSelector((state: { song: SongState }) => state.song);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: {user: InitialStateType}) => state.user);

  const setSong = (song: Song) => {
    if (currentSong?.previewUrl === song.previewUrl && isPlaying) {
      dispatch(setPlay({ isPlaying: false }));
    } else if (currentSong?.previewUrl === song.previewUrl && !isPlaying) {
      dispatch(setPlay({ isPlaying: true }));
    } else {
      dispatch(setCurrentSong({ currentSong: song }));
      dispatch(setPlay({ isPlaying: isPlaying ? isPlaying : !isPlaying }));
    }
  };

  return (
    <>
      {props.songs?.length ? (
        props.songs.map((song: Song, index: number) => (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <StyledSongContainer key={index} onClick={() => {
                setSong(song)
                dispatch(setCurrentIndex({ currentIndex: index }))
              }}>
                <StyledImage src={song?.artworkUrl100} alt="pic" />
                <StyledTrackInfo>
                  <StyledTrackName>
                    {song?.trackCensoredName}
                  </StyledTrackName>
                  <StyledArtistName>
                    {song?.artistName?.slice(0, 10)}
                  </StyledArtistName>
                </StyledTrackInfo>
              </StyledSongContainer>
              {currentSong?.previewUrl === song.previewUrl && isPlaying ? (
                <StyledMusicEmoji role="img" aria-label="music-emoji">
                  🎵
                </StyledMusicEmoji>
              ) : null}

              <StyledHeartIcon
                onClick={() => {
                  if (!user.isLoggedIn) {
                    showToast({
                      message: "Please log in to access this feature.",
                      description: "",
                      iconType: NotificationIconType.EXCLAMATORY,
                    });
                    navigate("/login");
                  } else {
                    dispatch(addToFavourite({ favSong: song }));

                  }
                }}
              />
            </div>
          </>
        ))
      ) : (
        <StyledAwaitingMessage>Awaiting New Favorites. Stay Excited</StyledAwaitingMessage>
      )}
    </>
  );
};

export default SongContainer;
