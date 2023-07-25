import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationIconType, showToast } from '../../atom/Notification';

const initialState: SongState = {
  songs: [],
  currentSong: {
    artistName: '',
    trackCensoredName: '',
    previewUrl: '',
    collectionName: '',
    trackTimeMillis: 0,
    artworkUrl100: '',
  },
  songAction: {
    search: '',
    isPlaying: false,
  },
  searchSongs: [],
  currentIndex: 0,
  favSongs: [],
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setCurrentSong(state, action: PayloadAction<{ currentSong: Song }>) {
      state.currentSong = action.payload.currentSong;
    },
    setSongs(state, action: PayloadAction<{ songs: Song[] }>) {
      state.songs.push(...action.payload.songs);
    },
    addToFavourite(state, action: PayloadAction<{ favSong: Song }>) {
      const favSong = action.payload.favSong;
      const songIndex = state.favSongs.findIndex((song) => song.previewUrl === favSong.previewUrl);
      if (songIndex !== -1) {
        state.favSongs.splice(songIndex, 1);
        showToast({
          message: "Song removed from favorites. We'll miss it!",
          description: '',
          iconType: NotificationIconType.CHECKED,
        });
      } else {
        state.favSongs.push(favSong);
        showToast({
          message: 'Hooray! Song successfully added to favorites.',
          description: '',
          iconType: NotificationIconType.CHECKED,
        });
      }
    },
    setPlay(state, action: PayloadAction<{ isPlaying: boolean }>) {
      state.songAction.isPlaying = action.payload.isPlaying;
    },
    setSerchedSong(state, action: PayloadAction<{ searchSongs: Song[] }>) {
      state.searchSongs.splice(0, state.searchSongs.length);
      state.searchSongs.push(...action.payload.searchSongs);
    },
    setSearch(state, action: PayloadAction<{ search: string }>) {
      state.songAction.search = action.payload.search;
    },
    setCurrentIndex(state, action: PayloadAction<{ currentIndex: number }>) {
      state.currentIndex = action.payload.currentIndex;
    },
    addIndex(state) {
      state.currentIndex++;
    },
    reduceIndex(state) {
      state.currentIndex--;
    },
  },
});

export const {
  addToFavourite,
  setCurrentSong,
  setSongs,
  setPlay,
  setSerchedSong,
  setSearch,
  setCurrentIndex,
  addIndex,
  reduceIndex,
} = songSlice.actions;

export default songSlice.reducer;
