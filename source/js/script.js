const navMain = document.querySelector(".main-nav");
const mainNavDropdown = document.querySelector(".main-nav__dropdown");
const promoButtonLink = document.querySelector(".promo__button-link");
const modal = document.querySelector(".modal");
const productButton = document.querySelector(".product__button");

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

promoButtonLink.addEventListener('click', function() {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  } else {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
  }
});
