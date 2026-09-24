// JavaScript item 44
async function displayUsers() { const response = await fetch("https://jsonplaceholder.typicode.com/users"); const users = await response.json(); document.querySelector("#users").innerHTML = users.map(user => `<p>${user.name} - ${user.email}</p>`).join(""); } displayUsers().catch(console.error);
