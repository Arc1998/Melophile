import axios from "axios";
import { DEFAULT_SONG_REQUEST_LIMIT } from "../../constants";
export const getSongs = async (
  term?: string,
  offset?: number,
  limit?: number
) => {
  try {
    const url = `https://itunes.apple.com/search/?term=${
      term || `term`
    }&offset=${offset || `term`}&limit=${limit || DEFAULT_SONG_REQUEST_LIMIT}`;

    const songs = await axios(url);
    // console.log(songs)
    if (songs.data) {
      // console.log(songs)
      return { data: songs?.data?.results || [], error: null };
    }
  } catch (error: any) {
    return { data: null, error: error?.message || "Failed to get songs" };
  }
};

export const refineSongsData = (data: any) => {
  const songsList:any = [];
  for (const song of data) {
    if (!song.previewUrl) {
      continue;
    }
    const refinedSong = {
      artistName: song.artistName,
      trackCensoredName: song.trackCensoredName,
      previewUrl: song.previewUrl,
      collectionName: song.collectionName,
      trackTimeMillis: song.trackTimeMillis,
      artworkUrl100: song.artworkUrl100,
    };
    songsList.push(refinedSong);
  }
  return songsList;
};