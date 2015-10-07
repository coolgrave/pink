
var link = document.querySelector(".main-nav__icon");
var nav = document.querySelector(".main-nav");

link.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.toggle("main-nav--open");
});

