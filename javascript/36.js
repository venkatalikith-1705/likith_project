// JavaScript item 36
let remaining = 10; const timer = setInterval(() => { document.querySelector("#countdown").textContent = remaining; if (remaining-- <= 0) clearInterval(timer); }, 1000);
