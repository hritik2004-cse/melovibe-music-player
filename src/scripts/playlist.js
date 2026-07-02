import { playlistData } from "../assets/data/playlistData";

const renderPlaylistData = () => {
  const album = document.getElementById("album");
  if (!album) return;

  playlistData.forEach((song) => {
    // 1. Creating all elements
    const mainDiv = document.createElement("div");
    const coverImgDiv = document.createElement("div");
    const coverImg = document.createElement("img");
    const buttonDiv = document.createElement("div");
    const button = document.createElement("button");
    const icon = document.createElement("i");
    const infoDiv = document.createElement("div");
    const songName = document.createElement("h4");
    const artistName = document.createElement("p");

    // 2. Initializing data
    coverImg.src = song.cover;
    coverImg.alt = song.name;
    songName.title = song.name;
    songName.textContent = song.name;
    artistName.title = song.artist;
    artistName.textContent = song.artist;
    mainDiv.dataset.songId = song.id;

    // 3. Adding classList
    mainDiv.classList.add(
      "card-div",
      "group",
      "relative",
      "bg-[#131622]/40",
      "hover:bg-[#1a1e30]/80",
      "p-4",
      "rounded-2xl",
      "border",
      "border-white/5",
      "hover:border-white/10",
      "hover:shadow-2xl",
      "transition-all",
      "duration-300",
      "flex",
      "flex-col",
      "justify-between",
      "cursor-pointer",
    );

    coverImgDiv.classList.add(
      "relative",
      "aspect-square",
      "w-full",
      "rounded-xl",
      "overflow-hidden",
      "mb-4",
      "shadow-lg",
    );

    coverImg.classList.add(
      "w-full",
      "h-full",
      "object-cover",
      "transition-transform",
      "duration-500",
      "group-hover:scale-105",
    );

    buttonDiv.classList.add(
      "absolute",
      "bottom-3",
      "right-3",
      "opacity-0",
      "translate-y-2",
      "group-hover:opacity-100",
      "group-hover:translate-y-0",
      "transition-all",
      "duration-300",
      "ease-out",
      "z-10",
    );

    button.classList.add(
      'btn',
      "bg-[#10b981]",
      "hover:bg-[#1ed760]",
      "hover:scale-105",
      "active:scale-95",
      "text-white",
      "w-10",
      "h-10",
      "rounded-full",
      "flex",
      "items-center",
      "justify-center",
      "pl-0.5",
      "shadow-xl",
      "transition-all",
      "cursor-pointer",
    );

    icon.classList.add("fa-solid", "fa-play", "icon");

    songName.classList.add(
      "text-white",
      "font-bold",
      "text-sm",
      "truncate",
      "mb-1",
    );

    artistName.classList.add("text-slate-400", "text-xs", "truncate");

    // 4. Appending elements
    album.appendChild(mainDiv);
    mainDiv.appendChild(coverImgDiv);
    mainDiv.appendChild(infoDiv);
    coverImgDiv.appendChild(coverImg);
    coverImgDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(button);
    button.appendChild(icon);
    infoDiv.appendChild(songName);
    infoDiv.appendChild(artistName);
  });

  // to print total no of songs
  const totalLength = document.getElementById("total-length");
  if (totalLength) {
    totalLength.innerHTML = `${playlistData.length} Songs`;
  }
};

export { renderPlaylistData };