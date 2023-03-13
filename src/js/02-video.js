import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

const setCurrentTimeToLocalStorage = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.on('timeupdate', throttle(setCurrentTimeToLocalStorage, 1000));

if (currentTime) {
  player.setCurrentTime(currentTime);
}
