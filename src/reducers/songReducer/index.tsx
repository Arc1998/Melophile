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
     addToFavourite(state:any,action){
      let flag=false
      state.favSongs.map((item:any)=>{
           if(item.previewUrl===action.payload.favSong.previewUrl){
           flag=true
           }
      })
       if(!flag)
        state.favSongs.push(action.payload.favSong);
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
      state.currentIndex+=1
     },
     reduceIndex(state){
      state.currentIndex-=1
     }
   },
 });
 
 export const {addToFavourite, setCurrentSong, setSongs, setPlay, setSerchedSong, setSearch,setCurrentIndex,addIndex,reduceIndex} =
   actions;
 
 export default songReducer;