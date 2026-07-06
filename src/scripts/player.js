import { playlistData } from "../assets/data/playlistData";
import {
  updatePlayerVisibility,
  updateProgressBar,
  updatePlayButton,
  updatePlayerUi,
  updateCurrentTime,
  updateVolumeBar,
} from "./ui";
import { playerState } from "./state";

// this function will play audio when user click play button on cards
export const initializePlayer = () => {
  const playCard = document.querySelectorAll(".card-div");
  updatePlayerVisibility(playerState.footerVisible);

  // play song on button click
  playCard.forEach((card, index) => {
    card.addEventListener("click", () => {
      playSong(index);
    });
  });

  playerState.audio.addEventListener("loadstart", () => console.log("loadstart"));

  playerState.audio.addEventListener("waiting", () => console.log("waiting"));

  playerState.audio.addEventListener("canplay", () => console.log("canplay"));

  playerState.audio.addEventListener("playing", () => console.log("playing"));

  // the loadedmetadata update both times when the metadata is loaded like total time, volume etc
  playerState.audio.addEventListener("loadedmetadata", () => {
    updatePlayerUi(playerState.currentSong, playerState.audio.duration);
    updateVolumeBar(playerState.audio.volume);
    playerState.footerVisible = true;
    updatePlayerVisibility(playerState.footerVisible);
  });

  // this function constantly update the playing time of song so that currentTime can update
  playerState.audio.addEventListener("timeupdate", () => {
    updateProgressBar(
      playerState.audio.currentTime,
      playerState.audio.duration,
    );
    updateCurrentTime(playerState.audio.currentTime);
  });

  // this event listner change the song to next when previous song ended
  playerState.audio.addEventListener("ended", () => {
    const nextIndex = playerState.currentIndex + 1;
    if (nextIndex > playlistData.length - 1) {
      playerState.isPlaying = false;
      return;
    }
    playSong(nextIndex);
  });

  // play the song of the perticular index
  const playSong = (index) => {
    playerState.currentSong = playlistData[index]; // this will update the currentSong to prevSongIndex playlistData object
    playerState.currentIndex = index; // update the current index of song's playlist
    playerState.isPlaying = true;
    playerState.audio.src = playerState.currentSong.link; // now just take link from playListData object
    playerState.audio.play(); // play the previous audio
    updateButtons();
    updatePlayButton(playerState.isPlaying); // update the play/pause icons
    // changePlayIcon(index);
  };

  // update song play/pause state
  const updatePlayState = () => {
    const playBtn = document.getElementById("play-btn");

    playBtn.addEventListener("click", () => {
      if (playerState.isPlaying) {
        playerState.isPlaying = false;
        playerState.audio.pause();
        updatePlayButton(playerState.isPlaying);
      } else {
        playerState.isPlaying = true;
        playerState.audio.play();
        updatePlayButton(playerState.isPlaying);
      }
    });
  };

  // updates previous/next buttons

  // plays previous song
  const playPrevSong = () => {
    const prevBtn = document.getElementById("prev-btn");
    prevBtn.addEventListener("click", () => {
      const prevSongIndex = playerState.currentIndex - 1; // the index should be one less for previous song
      if (prevSongIndex < 0) return;
      playSong(prevSongIndex);
    });
  };

  // plays next song
  const playNextSong = () => {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", () => {
      const nextSongIndex = playerState.currentIndex + 1; // the index should be one more for next song
      if (nextSongIndex > playlistData.length - 1) return;
      playSong(nextSongIndex);
    });
  };
  updatePlayState();
  playNextSong();
  playPrevSong();

  // updates the prev/nextbtn colors acc to their index positions
  const updateButtons = () => {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (playerState.currentIndex === 0) {
      prevBtn.classList.add("text-slate-400");
      prevBtn.classList.remove("text-white");
      nextBtn.classList.add("text-white");
      nextBtn.classList.remove("text-slate-400");
    } else if (playerState.currentIndex < playlistData.length - 1) {
      prevBtn.classList.add("text-white");
      prevBtn.classList.remove("text-slate-400");
      nextBtn.classList.add("text-white");
      nextBtn.classList.remove("text-slate-400");
    } else if (playerState.currentIndex === playlistData.length - 1) {
      nextBtn.classList.add("text-slate-400");
      nextBtn.classList.remove("text-white");
    }
  };
};
