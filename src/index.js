const socket = io();
const el = document.getElementById('server-time');

socket.on('time', (timeString) => {
  el.innerHTML = 'Server time: ' + timeString;
});
