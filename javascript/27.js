// JavaScript item 27
function updateClock(){ document.querySelector("#clock").textContent = new Date().toLocaleTimeString(); } updateClock(); setInterval(updateClock, 1000);
