// JavaScript item 35
let seconds = 0; let stopwatch; document.querySelector("#start").onclick = () => { stopwatch = setInterval(() => document.querySelector("#display").textContent = ++seconds, 1000); }; document.querySelector("#stop").onclick = () => clearInterval(stopwatch);
