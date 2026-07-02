export const playerState = {
  audio: new Audio(), // creating a music player
  currentSong: null, // currentSong value will be null untill user selects a song
  isPlaying: false, // check a song is playing or not
  currentIndex: 0, // check the current song index
  repeatSong: false, // check weather user wants to repeat the current song
  shuffle: false, // check weather user want to suffle the playlist
  footerVisible:false
};