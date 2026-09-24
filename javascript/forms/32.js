// forms experiment 32
const form=document.querySelector("form");form.addEventListener("submit",event=>{event.preventDefault();const data=new FormData(form);const errors=[...data.entries()].filter(([,value])=>!String(value).trim());document.querySelector(".message").textContent=errors.length?"Complete all required fields":"Form submitted successfully";});
