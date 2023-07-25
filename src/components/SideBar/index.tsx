import { Layout } from "antd";
import { SidebarPanel, StyledHeading } from "./style";
import SongPlayerContainer from "../SongPlayerContainer";
import SongContainer from "../SongContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlay,
  setCurrentSong,
  addIndex,
  reduceIndex,  
} from "../../reducers/songReducer";

const { Sider } = Layout;

const SideBar: React.FC = () => {
  const {
    favSongs,
    songs,
    currentSong,
    songAction: { search, isPlaying },
    searchSongs,
    currentIndex,
  } = useSelector((state: { song: SongState }) => state.song);

  const dispatch = useDispatch();

  const handleSetPlay = (isPlaying: boolean) => {
    dispatch(setPlay({ isPlaying }));
  };

  const handleSetCurrentSong = (song: Song) => {
    dispatch(setCurrentSong({ currentSong: song }));
  };

  const handleAddIndex = () => {
    dispatch(addIndex());
  };

  const handleReduceIndex = () => {
    dispatch(reduceIndex());
  };

  return (
    <SidebarPanel>
      <Layout>
      <Sider
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "100%",
            position: "fixed",
            overflow: "auto",
            marginTop:"100px"
          }}
        >
          <SongPlayerContainer
            currentSong={currentSong}
            isPlaying={isPlaying}
            setPlay={handleSetPlay}
            setCurrentSong={handleSetCurrentSong}
            addIndex={handleAddIndex}
            reduceIndex={handleReduceIndex}
            songs={songs}
            search={search}
            searchSongs={searchSongs}
            currentIndex={currentIndex}
          />
          <div style={{ marginTop: "12px" }}>
          <StyledHeading> Favourites</StyledHeading>
            <SongContainer songs={favSongs} />
          </div>
        </Sider>
        </Layout>
    </SidebarPanel>
  );
};

export default SideBar;
