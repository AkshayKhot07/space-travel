"use strict";

const navMenu = document.getElementById("nav-menu");
const navClose = document.querySelector(".close__icon");
const navMenuIcon = document.querySelector(".menu__icon");
const menuIconContainer = document.querySelector(".menu__container");

if (navMenuIcon) {
  navMenuIcon.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    menuIconContainer.classList.add("hide-menu-icon");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    menuIconContainer.classList.remove("hide-menu-icon");
  });
}
