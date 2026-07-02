// it make a playback controllbar by its own
export const changeUi = () => {
  const controlBar = document.getElementById("control-bar");
  if (!controlBar) return;

  // Clear static HTML content in controlBar to build dynamically
  controlBar.innerHTML = "";

  // 1. Creating all elements
  const leftDiv = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const textContainer = document.createElement("div");
  const songTitle = document.createElement("span");
  const artistName = document.createElement("span");

  const centerDiv = document.createElement("div");
  const controlsDiv = document.createElement("div");
  const shuffleBtn = document.createElement("button");
  const shuffleIcon = document.createElement("i");
  const prevBtn = document.createElement("button");
  const prevIcon = document.createElement("i");
  const playBtn = document.createElement("button");
  const playIcon = document.createElement("i");
  const nextBtn = document.createElement("button");
  const nextIcon = document.createElement("i");
  const repeatBtn = document.createElement("button");
  const repeatIcon = document.createElement("i");
  const seekbarDiv = document.createElement("div");
  const timeCurrent = document.createElement("span");
  const sliderBg = document.createElement("div");
  const sliderFill = document.createElement("div");
  const sliderKnob = document.createElement("div");
  const timeTotal = document.createElement("span");

  const rightDiv = document.createElement("div");
  const queueBtn = document.createElement("button");
  const queueIcon = document.createElement("i");
  const volumeContainer = document.createElement("div");
  const volumeBtn = document.createElement("button");
  const volumeIcon = document.createElement("i");
  const volumeSliderBg = document.createElement("div");
  const volumeSliderFill = document.createElement("div");
  const volumeSliderKnob = document.createElement("div");
  const fullscreenBtn = document.createElement("button");
  const fullscreenIcon = document.createElement("i");

  // 2. Initializing data & attributes
  img.src = "/alone-pt-2.jpg";
  img.alt = "Current Track";
  img.id = "current-img";

  songTitle.id = "current-song-name";
  songTitle.textContent = "Alone, Pt II";

  artistName.id = "current-artist-name";
  artistName.textContent = "Alan Walker, Ava Max";

  shuffleBtn.id = "suffle-current-song";
  shuffleBtn.title = "Shuffle";

  prevBtn.id = "prev-btn";
  prevBtn.title = "Previous";

  playBtn.id = "play-btn";
  playBtn.title = "Play";

  playIcon.id = "play-icon";

  nextBtn.id = "next-btn";
  nextBtn.title = "Next";

  repeatBtn.id = "repeat-btn";
  repeatBtn.title = "Repeat";

  repeatIcon.id = "repeat-icon";

  timeCurrent.id = "current-time";

  timeTotal.id = "total-time";

  sliderFill.id = "progress-fill";
  sliderKnob.id = "progress-knob";

  queueBtn.id = "queue-btn";
  queueBtn.title = "Queue";

  volumeBtn.id = "volume-btn";
  volumeBtn.title = "Mute/Unmute";

  volumeSliderFill.id = "volume-slider";
  volumeSliderKnob.id = "volume-knob";

  fullscreenBtn.id = "full-screen-btn";
  fullscreenBtn.title = "Fullscreen";

  // 3. Adding classList
  leftDiv.classList.add(
    "flex",
    "items-center",
    "gap-3",
    "sm:gap-4",
    "w-full",
    "sm:w-1/4",
    "min-w-[150px]",
    "sm:min-w-[200px]",
  );

  imgContainer.classList.add(
    "w-10",
    "h-10",
    "sm:w-14",
    "sm:h-14",
    "rounded-lg",
    "overflow-hidden",
    "shrink-0",
    "border",
    "border-white/10",
    "shadow-md",
  );

  img.classList.add("w-full", "h-full", "object-cover");
  textContainer.classList.add("flex", "flex-col", "truncate");

  songTitle.classList.add(
    "text-xs",
    "sm:text-sm",
    "font-bold",
    "text-white",
    "truncate",
    "hover:underline",
    "cursor-pointer",
  );

  artistName.classList.add(
    "text-[10px]",
    "sm:text-xs",
    "text-slate-400",
    "truncate",
    "hover:underline",
    "cursor-pointer",
  );



  centerDiv.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "gap-1.5",
    "sm:gap-2.5",
    "w-auto",
    "sm:w-2/4",
    "max-w-[600px]",
  );

  controlsDiv.classList.add("flex", "items-center", "gap-4", "sm:gap-6");

  shuffleBtn.classList.add(
    "hidden",
    "sm:inline-flex",
    "text-slate-400",
    "hover:text-white",
    "transition-colors",
    "cursor-pointer",
  );

  shuffleIcon.classList.add("fa-solid", "fa-shuffle", "text-base", "sm:text-lg");

  prevBtn.classList.add(
    "text-white",
    "transition-colors",
    "cursor-pointer",
  );

  prevIcon.classList.add("fa-solid", "fa-backward-step", "text-base", "sm:text-lg");

  playBtn.classList.add(
    "bg-white",
    "hover:scale-105",
    "text-black",
    "w-10",
    "h-10",
    "sm:w-12",
    "sm:h-12",
    "rounded-full",
    "shadow-md",
    "transition-all",
    "cursor-pointer",
    "flex",
    "items-center",
    "justify-center",
    "pl-0.5",
  );

  playIcon.classList.add("fa-solid", "fa-play", "text-base", "sm:text-lg");

  nextBtn.classList.add(
    "text-white",
    "transition-colors",
    "cursor-pointer",
  );

  nextIcon.classList.add("fa-solid", "fa-forward-step", "text-base", "sm:text-lg");

  repeatBtn.classList.add(
    "hidden",
    "sm:inline-flex",
    "text-slate-400",
    "hover:text-white",
    "transition-colors",
    "cursor-pointer",
  );

  repeatIcon.classList.add("fa-solid", "fa-repeat", "text-base", "sm:text-lg");

  seekbarDiv.classList.add(
    "hidden",
    "sm:flex",
    "items-center",
    "gap-3",
    "w-full",
    "text-xs",
    "font-semibold",
    "text-slate-400",
  );

  sliderBg.classList.add(
    "relative",
    "flex-1",
    "h-1.5",
    "bg-white/10",
    "hover:bg-white/20",
    "rounded-full",
    "cursor-pointer",
    "group",
  );

  sliderFill.classList.add(
    "absolute",
    "top-0",
    "left-0",
    "h-full",
    "bg-gradient-to-r",
    "from-indigo-500",
    "to-purple-500",
    "rounded-full",
    "group-hover:from-indigo-400",
    "group-hover:to-purple-400",
  );

  sliderKnob.classList.add(
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "-translate-x-1/2",
    "w-3.5",
    "h-3.5",
    "rounded-full",
    "bg-white",
    "opacity-0",
    "group-hover:opacity-100",
    "shadow-md",
    "transition-opacity",
    "duration-150",
  );

  rightDiv.classList.add(
    "hidden",
    "sm:flex",
    "items-center",
    "justify-end",
    "gap-4",
    "w-1/4",
    "min-w-[200px]",
  );

  queueBtn.classList.add(
    "text-slate-400",
    "hover:text-white",
    "transition-colors",
    "cursor-pointer",
  );

  queueIcon.classList.add("fa-solid", "fa-list-ul", "text-lg");

  volumeContainer.classList.add(
    "flex",
    "items-center",
    "gap-2",
    "group",
    "w-32",
  );

  volumeBtn.classList.add(
    "text-slate-400",
    "hover:text-white",
    "transition-colors",
    "cursor-pointer",
  );

  volumeIcon.classList.add("fa-solid", "fa-volume-high", "text-lg");

  volumeSliderBg.classList.add(
    "relative",
    "flex-1",
    "h-1",
    "bg-white/10",
    "hover:bg-white/20",
    "rounded-full",
    "cursor-pointer",
    "group",
  );

  volumeSliderFill.classList.add(
    "absolute",
    "top-0",
    "left-0",
    "h-full",
    "w-[70%]",
    "bg-indigo-500",
    "rounded-full",
    "group-hover:bg-indigo-400",
  );

  volumeSliderKnob.classList.add(
    "absolute",
    "top-1/2",
    "left-[70%]",
    "-translate-y-1/2",
    "-translate-x-1/2",
    "w-2.5",
    "h-2.5",
    "rounded-full",
    "bg-white",
    "opacity-0",
    "group-hover:opacity-100",
    "shadow",
    "transition-opacity",
    "duration-150",
  );

  fullscreenBtn.classList.add(
    "text-slate-400",
    "hover:text-white",
    "transition-colors",
    "cursor-pointer",
  );

  fullscreenIcon.classList.add("fa-solid", "fa-expand", "text-lg");

  // 4. Appending elements
  // Left Section
  imgContainer.appendChild(img);
  textContainer.appendChild(songTitle);
  textContainer.appendChild(artistName);
  leftDiv.appendChild(imgContainer);
  leftDiv.appendChild(textContainer);

  // Center Section
  shuffleBtn.appendChild(shuffleIcon);
  prevBtn.appendChild(prevIcon);
  playBtn.appendChild(playIcon);
  nextBtn.appendChild(nextIcon);
  repeatBtn.appendChild(repeatIcon);
  controlsDiv.appendChild(shuffleBtn);
  controlsDiv.appendChild(prevBtn);
  controlsDiv.appendChild(playBtn);
  controlsDiv.appendChild(nextBtn);
  controlsDiv.appendChild(repeatBtn);

  sliderBg.appendChild(sliderFill);
  sliderBg.appendChild(sliderKnob);
  seekbarDiv.appendChild(timeCurrent);
  seekbarDiv.appendChild(sliderBg);
  seekbarDiv.appendChild(timeTotal);
  centerDiv.appendChild(controlsDiv);
  centerDiv.appendChild(seekbarDiv);

  // Right Section
  queueBtn.appendChild(queueIcon);
  volumeBtn.appendChild(volumeIcon);
  volumeSliderBg.appendChild(volumeSliderFill);
  volumeSliderBg.appendChild(volumeSliderKnob);
  volumeContainer.appendChild(volumeBtn);
  volumeContainer.appendChild(volumeSliderBg);
  fullscreenBtn.appendChild(fullscreenIcon);
  rightDiv.appendChild(queueBtn);
  rightDiv.appendChild(volumeContainer);
  rightDiv.appendChild(fullscreenBtn);

  // Main Assembly
  controlBar.appendChild(leftDiv);
  controlBar.appendChild(centerDiv);
  controlBar.appendChild(rightDiv);
};

// determine the visibility of the footer player
export const updatePlayerVisibility = (footerVisible) => {
  const controlBar = document.getElementById("control-bar");
  if (!controlBar) return;
  if (footerVisible) {
    controlBar.style.display = "flex";
  } else {
    controlBar.style.display = "none";
  }
};

// formatting the time - making it user friendly
const formatTime = (time) => {
  if (isNaN(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};


export const updateCurrentTime = (songCurrentTime) => {
  const showcurrentTime = document.getElementById("current-time");
  const formattedCurrentTime = formatTime(songCurrentTime);
  showcurrentTime.textContent = formattedCurrentTime;
};


// update the player footer acc to the song user plays
export const updatePlayerUi = (currentSong, songTotalTime) => {
  if (!currentSong) return;

  // 1. accessing elements via their Ids.
  const currentSongImg = document.getElementById("current-img");
  const currentSongName = document.getElementById("current-song-name");
  const currentSongArtist = document.getElementById("current-artist-name");

  const totalTime = document.getElementById("total-time");

  // 2. Initializing attributes
  currentSongImg.src = currentSong.cover;
  currentSongImg.alt = currentSong.name;
  currentSongImg.loading = "lazy";
  currentSongName.textContent = currentSong.name;
  currentSongArtist.textContent = currentSong.artist;
  totalTime.textContent = formatTime(songTotalTime);
};

// update the play/pause button acc to isplaying
export const updatePlayButton = (isPlaying) => {
  const playBtn = document.getElementById("play-btn");
  const playIcon = document.getElementById("play-icon");
  playBtn.title = isPlaying ? "pause" : "play";

  if (isPlaying) {
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
};

// update the song progressbar acc to somg duration
export const updateProgressBar = (currentTime, songTotalTime) => {
  if (!songTotalTime) return; // if song duration is 0 so no error will cause
  const progressFill = document.getElementById("progress-fill");
  const progressKnob = document.getElementById("progress-knob");
  let calculatedPercentage = (currentTime / songTotalTime) * 100;

  progressFill.style.width = `${calculatedPercentage}%`;
  progressKnob.style.left = `${calculatedPercentage}%`;
};

// this will update the volume of the song
export const updateVolumeBar = (volume) => {
  const volumeSlider = document.getElementById("volume-slider");
  const volumeKnob = document.getElementById("volume-knob");
  let percentage = volume * 100; // audio.volume give numbers between 0 -> 1

  volumeSlider.style.width = `${percentage}%`;
  volumeKnob.style.left = `${percentage}%`;
};


export const shuffleSongs = (shuffle) => {
  const shuffleSong = document.getElementById("suffle-current-song");

  if (shuffle) {
    shuffleSong.classList.add("text-green-500");
    shuffleSong.classList.remove("text-red-500");
  } else {
    shuffleSong.classList.add("text-red-500");
    shuffleSong.classList.remove("text-green-500");
  }
};

export const repeatSongAgain = (repeatSong) => {
  const repeatBtn = document.getElementById("repeat-btn");

  if (repeatSong) {
    repeatBtn.classList.add("text-green-400");
    repeatBtn.classList.remove("text-slate-400");
  } else {
    repeatBtn.classList.remove("text-green-400");
    repeatBtn.classList.add("text-slate-400");
  }
};

export const upgradefullScreen = () => {
  const fullscreenBtn = document.getElementById("full-screen-btn");
};
