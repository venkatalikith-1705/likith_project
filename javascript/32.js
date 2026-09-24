// JavaScript item 32
document.querySelector("#add").addEventListener("click", () => { const item = document.createElement("li"); item.textContent = document.querySelector("#input").value; document.querySelector("#list").append(item); });
