import {createSlice} from '@reduxjs/toolkit'
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
     addToFavourite(state:any,action){
       state.favSongs.push(action.payload.favSong);
     },
     setPlay(state, action) {
       state.songAction.isPlaying = action.payload.isPlaying;
     },
     setSerchedSong(state:any, action) {
       state.searchSongs.push(...action.payload.searchSongs);
     },
     setSearch(state, action) {
       state.songAction.search = action.payload.search;
     },
   },
 });
 
 export const {addToFavourite, setCurrentSong, setSongs, setPlay, setSerchedSong, setSearch } =
   actions;
 
 export default songReducer;