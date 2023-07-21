

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_SONG_REQUEST_LIMIT } from "../../constants";
import SongContainer from "../../components/SongContainer";
import { setCurrentSong, setSerchedSong, setSongs } from "../../reducers/songReducer";
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
    try {
      const newSongs = await getSongs("Hollywood songs", page, DEFAULT_SONG_REQUEST_LIMIT);
      if (newSongs?.data !== null) {
        const refinedData = refineSongsData(newSongs?.data);
        if (currentSong.previewUrl === "") {
          dispatch(
            setCurrentSong({
              currentSong: refinedData[0],
            })
          );
        }
        dispatch(setSongs({ songs: refinedData }));
      }
    } catch (error) {
      console.error("Error while fetching songs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchSong = async () => {
    setIsLoading(true);
    try {
      const newSongs = await getSongs(search);
      if (newSongs?.data !== null && newSongs?.data !== undefined) {
        const refinedData = refineSongsData(newSongs?.data);
        dispatch(setSerchedSong({ searchSongs: refinedData }));
      }
    } catch (error) {
      console.error("Error while searching songs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    setPage((prev) => prev + 1);
    await getSongData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    if (search) {
      getSearchSong();
    }
  }, [search]);

  useEffect(() => {
    getSongData();
  }, []);

  return (
    <>
      <NavHeader />
      <SongsContainerWrapper>
        <SideBar />
        <div className="songs-container">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <SongContainer songs={search === "" ? songs : searchSongs} />
          )}
        </div>
      </SongsContainerWrapper>
    </>
  );
};

export default SongsContainer;

