import {createSlice} from '@reduxjs/toolkit'
import { NotificationIconType, showToast } from '../../atom/Notification';
const initialState = {
   songs: [],
   currentSong: {
     artistName: "",
     trackCensoredName: "",
     previewUrl: "",
     collectionName: "",
     trackTimeMillis: 0,
     artworkUrl100: "",
   },
   songAction: {
     search: "",
     isPlaying: false,
   },
   searchSongs: [],
   currentIndex:0,
   favSongs:[]
 };
 
 const { actions, reducer: songReducer } = createSlice({
   name: "song",
   initialState,
   reducers: {
     setCurrentSong(state, action) {
       state.currentSong = action.payload.currentSong;
     },
     setSongs(state:any, action) {
       state.songs.push(...action.payload.songs);
     },
     addToFavourite(state: any, action) {
      const favSong = action.payload.favSong;
      const songIndex = state.favSongs.findIndex(
        (song : any) => song.previewUrl === favSong.previewUrl
      );
      if (songIndex !== -1) {
        state.favSongs.splice(songIndex, 1);
        showToast({
          message: "Hooray! Song successfully added to favorites.",
          description: "",
          iconType: NotificationIconType.CHECKED,
        });
      } else {
        state.favSongs.push(favSong);
        showToast({
          message: "Song removed from favorites. We'll miss it!",
          description: "",
          iconType: NotificationIconType.CHECKED,
        });
      }
    },
     setPlay(state, action) {
       state.songAction.isPlaying = action.payload.isPlaying;
     },
     setSerchedSong(state:any, action) {
       state.searchSongs.splice(0,state.searchSongs.length)
       state.searchSongs.push(...action.payload.searchSongs);
     },
     setSearch(state, action) {
       state.songAction.search = action.payload.search;
     },
     setCurrentIndex(state, action){
       state.currentIndex=action.payload.currentIndex
     },
     addIndex(state){
      state.currentIndex++
     },
     reduceIndex(state){
      state.currentIndex--
     }
   },
 });
 
 export const {addToFavourite, setCurrentSong, setSongs, setPlay, setSerchedSong, setSearch,setCurrentIndex,addIndex,reduceIndex} =
   actions;
 
 export default songReducer;