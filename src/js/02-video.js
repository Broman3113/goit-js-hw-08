import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime || 0); 

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

function onTimeUpdate(e) {
    console.log('timeupdate!', e);
    localStorage.setItem('videoplayer-current-time', e.seconds);
}