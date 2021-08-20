const navBarBrand = document.querySelector('.navbar-brand');
navBarBrand.innerText += "!";
navBarBrand.style.color="red";
navBarBrand.classList.add("selected");
setInterval(updateTime, 1000)
function updateTime(){
const clockContainer = document.querySelector('.clock');
clockContainer.innerText = new Date().toLocaleTimeString();}