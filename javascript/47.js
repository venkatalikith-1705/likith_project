// JavaScript item 47
const app = document.querySelector("#app"); app.innerHTML = "<button id=go>Start</button><p id=result></p>"; document.querySelector("#go").onclick = () => document.querySelector("#result").textContent = "Interactive page loaded";
