import './style.css';
import { renderPlaylistData } from './scripts/playlist';
import { initializePlayer } from './scripts/player';
import { changeUi, updatePlayerUi } from './scripts/ui';

renderPlaylistData();
changeUi();
initializePlayer();
updatePlayerUi();