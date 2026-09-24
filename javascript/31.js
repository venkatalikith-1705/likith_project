// JavaScript item 31
const fields = ["name", "email", "phone", "password"]; fields.forEach(id => { const field = document.querySelector(`#${id}`); field.addEventListener("input", () => field.setCustomValidity(field.value ? "" : "This field is required")); });
