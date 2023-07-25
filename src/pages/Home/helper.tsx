import axios from "axios";
import { DEFAULT_SONG_REQUEST_LIMIT } from "../../constants";

interface Song {
  artistName: string;
  trackCensoredName: string;
  previewUrl: string;
  collectionName: string;
  trackTimeMillis: number;
  artworkUrl100: string;
}

interface SongsResponse {
  results: Song[];
}

export const getSongs = async (
  term?: string,
  offset?: number,
  limit?: number
): Promise<{ data: Song[] | null; error: string | null }> => {
  try {
    const url = `https://itunes.apple.com/search/?term=${term || `term`
      }&offset=${offset || `term`}&limit=${limit || DEFAULT_SONG_REQUEST_LIMIT}`;

    const response = await axios.get<SongsResponse>(url);
    if (response.data) {
      return { data: response.data.results || [], error: null };
    }
  } catch (error: any) {
    return { data: null, error: error?.message || "Failed to get songs" };
  }

  return { data: null, error: "Failed to get songs" };
};

export const refineSongsData = (data: Song[]): Song[] => {
  const songsList: Song[] = [];
  for (const song of data) {
    if (!song.previewUrl) {
      continue;
    }
    const refinedSong: Song = {
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
