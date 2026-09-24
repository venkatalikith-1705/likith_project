// JavaScript item 46
document.querySelector("form").addEventListener("submit", event => { const password = document.querySelector("#password"); if (!event.target.checkValidity() || password.value.length < 8) { event.preventDefault(); password.setCustomValidity("Password must contain at least 8 characters"); } });
