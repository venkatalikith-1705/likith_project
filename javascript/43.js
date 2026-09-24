// JavaScript item 43
fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json()).then(data => console.log(data)).catch(console.error);
