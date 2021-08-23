const navMain = document.querySelector(".main-nav");
const siteList = document.querySelector(".main-nav__list");
const userList = document.querySelector(".user-list");
const link = document.querySelector(".main-nav__dropdown");
const dropdownImg = document.querySelector(".main-nav__dropdown-img");

navMain.classList.remove("main-nav--nojs");
siteList.classList.add("main-nav--closed");
userList.classList.add("main-nav--closed");
link.addEventListener("click", function(evt) {
  link.classList.add("main-nav__dropdown-closed");
  dropdownImg.classList.add("main-nav--closed");
  siteList.classList.remove("main-nav--closed");
  userList.classList.remove("main-nav--closed");
});

