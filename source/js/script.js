const navMain = document.querySelector(".main-nav");
const mainNavDropdown = document.querySelector(".main-nav__dropdown");

navMain.classList.remove("main-nav--nojs");

mainNavDropdown.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
