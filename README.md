# 🎵 MeloVibe — Your Calm Space

> A sleek, modern web-based music player built with Vanilla JavaScript and styled with Tailwind CSS v4. MeloVibe delivers a premium listening experience with a beautiful dark-themed UI, smooth animations, and intuitive playback controls.

---

## ✨ Features

- 🎶 **Playlist Playback** — Browse and play from a curated playlist of 12 tracks
- ⏯️ **Full Playback Controls** — Play, Pause, Previous, and Next song navigation
- 📊 **Live Progress Bar** — Real-time seekbar with gradient fill and hover knob
- 🔊 **Volume Control** — Interactive volume slider with mute/unmute toggle
- 🔀 **Shuffle & Repeat** — UI-ready shuffle and repeat buttons
- 🖼️ **Dynamic Player UI** — Footer player updates automatically with cover art, song title, and artist name
- ⬅️➡️ **Smart Button States** — Prev/Next buttons intelligently disable at playlist boundaries
- 📱 **Responsive Design** — Mobile-friendly layout with a collapsible sidebar drawer
- 🌗 **Ambient Glow Background** — Indigo and purple ambient glows for a premium dark mode feel
- 🔤 **Premium Typography** — Uses the *Plus Jakarta Sans* font from Google Fonts
- 🌐 **PWA-Ready** — Includes web app manifest, favicons, and apple-touch icons

---


## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Markup and page structure |
| **Vanilla JavaScript (ES Modules)** | Core app logic and DOM manipulation |
| **Tailwind CSS v4** | Utility-first styling |
| **Vite v8** | Build tool and dev server |
| **Font Awesome 6** | Icons (play, pause, shuffle, repeat, volume, etc.) |
| **Google Fonts** | Plus Jakarta Sans typography |
| **Web Audio API** | Native browser `Audio` object for playback |

---

## 📁 Project Structure

```
music-player/
├── public/                         # Static assets served at root
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   ├── icons.svg
│   ├── alone-pt-2.jpg              # Default player cover
│   └── site.webmanifest
│
├── src/
│   ├── assets/
│   │   ├── covers/                 # Album cover images (12 tracks)
│   │   ├── songs/                  # Audio files (.m4a / .mp3)
│   │   ├── icons/                  # Additional icon assets
│   │   ├── data/
│   │   │   └── playlistData.js     # Playlist metadata (id, name, artist, cover, link)
│   │   └── logo.png
│   │
│   ├── scripts/
│   │   ├── player.js               # Core playback logic & event listeners
│   │   ├── ui.js                   # DOM rendering & UI update functions
│   │   ├── playlist.js             # Playlist rendering & management
│   │   └── state.js                # Shared player state object
│   │
│   ├── pages/
│   │   └── playlist.html           # Playlist view page
│   │
│   ├── main.js                     # App entry point
│   └── style.css                   # Global styles
│
├── index.html                      # Main app shell
├── vite.config.js                  # Vite + Tailwind CSS plugin config
├── package.json
└── README.md
```

---

## ⚙️ Architecture Overview

MeloVibe follows a **modular ES module** architecture:

### `state.js` — Single Source of Truth
Holds the shared `playerState` object used across all modules:
```js
{
  audio,          // Native Audio instance
  currentSong,    // Currently playing song object
  currentIndex,   // Index in the playlist
  isPlaying,      // Boolean playback flag
  repeatSong,     // Repeat toggle flag
  shuffle,        // Shuffle toggle flag
  footerVisible   // Controls footer player visibility
}
```

### `player.js` — Playback Engine
- Initializes click listeners on song cards
- Handles `loadedmetadata`, `timeupdate`, and `ended` audio events
- Manages play/pause, previous/next song navigation
- Dynamically updates prev/next button colors based on playlist boundaries

### `ui.js` — UI Renderer
Exports a set of pure UI update functions:
- `changeUi()` — Dynamically builds the footer control bar via DOM
- `updatePlayerVisibility()` — Shows/hides the footer player
- `updatePlayerUi()` — Updates cover, song name, artist, and total time
- `updatePlayButton()` — Toggles the play/pause icon
- `updateProgressBar()` — Updates seekbar fill and knob position
- `updateVolumeBar()` — Syncs volume slider visually
- `updateCurrentTime()` — Updates the live playback time display

### `playlist.js` — Playlist Management
Handles rendering of song cards in the main playlist view.

### `playlistData.js` — Data Layer
An array of song objects, each containing:
```js
{ id, name, artist, cover, link }
```
Asset URLs are resolved at build time using Vite's `import.meta.url`.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/music-player.git
cd music-player

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 UI Design Highlights

- **Dark Background** — Deep `#07090e` base color for a premium feel
- **Ambient Glow** — Fixed indigo & purple radial blurs in the background
- **Glassmorphism** — Sidebar uses backdrop blur with transparent dark overlays
- **Custom Scrollbar** — Slim, rounded scrollbar styled to match the dark theme
- **Gradient Progress Bar** — Indigo-to-purple gradient for the seekbar fill
- **Responsive Layout** — Mobile sidebar drawer hidden on desktop; full layout on `md+` screens

---

## 📜 License

This project is intended for educational and personal use. All songs belong to their respective artists and labels.

---

> Made with ❤️ using Vite + Tailwind CSS v4
