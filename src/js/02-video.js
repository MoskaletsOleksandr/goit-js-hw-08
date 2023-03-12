import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENTTIME = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
const setItemToLocalStorage = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.on('timeupdate', throttle(setItemToLocalStorage, 1000));

if (CURRENTTIME) {
  player.setCurrentTime(CURRENTTIME);
}
