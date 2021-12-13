const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-link");

hamburger.addEventListener("click",function(){
  navLinks.classList.toggle("open");
});