// for mobile menu
const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const dropMenu = document.querySelector(".mobile");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  dropMenu.style.display = "block";
  dropMenu.style.top = "263";
}

function close() {
  dropMenu.style.display = "none";
}
