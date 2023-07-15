import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_SONG_REQUEST_LIMIT } from "../../constants";
import SongContainer from "../../components/SongContainer";
import {setCurrentSong,setSerchedSong,setSongs} from "../../reducers/songReducer";
import { getSongs, refineSongsData } from "./helper";
import NavHeader from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar";
import { SongsContainerWrapper } from "./SongsContainerStyles";

const SongsContainer = () => {
  const {
    songs,
    currentSong,
    songAction: { search },
    searchSongs,
  } = useSelector((state: { song: any }) => state.song);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getSongData = async () => {
    setIsLoading(true);
    console.log(search)
    const newSongs = await getSongs(
      "Hollywood",
      page,
      DEFAULT_SONG_REQUEST_LIMIT
    );
    setIsLoading(false);
    if (newSongs?.data !== null) {
      const refinedData = refineSongsData(newSongs?.data);
      if (currentSong.previewUrl === "") {
        dispatch(
          setCurrentSong({
            currentSong: refinedData[0]
          })
        );
      }
      dispatch(setSongs({ songs: refinedData }));
    }
    console.log(songs)
  };

  const getSearchSong = async () => {
    setIsLoading(true);
    const newSongs = await getSongs(search);
    setIsLoading(false);

    if (newSongs?.data !== null && newSongs?.data !== undefined) {
      const refinedData = refineSongsData(newSongs?.data);
      dispatch(
        setCurrentSong({
          currentSong: refinedData[0]
        })
      );
      dispatch(setSerchedSong({ searchSongs: refinedData }));
    }
  };

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    setPage(prev => prev + 1);

    await getSongData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    if (search) {
      getSearchSong();
    }
    // eslint-disable-next-line
  },[search]);

  useEffect(() => {
     getSongData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavHeader />
      <SongsContainerWrapper>
        <SideBar />
        <div className="songs-container">
          <SongContainer songs={search===""?songs:searchSongs} />
        </div>
      </SongsContainerWrapper>
    </>
  );
};

export default SongsContainer;
