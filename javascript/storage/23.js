// storage experiment 23
const key="app-data";localStorage.setItem(key,JSON.stringify({name:"Asha",theme:"dark"}));const data=JSON.parse(localStorage.getItem(key));console.log(data);sessionStorage.setItem("temporary","value");
