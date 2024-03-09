"use strict";
const navLinks = document.querySelector(".nav-links");
const mobileNavMenu = document.getElementById("hamburger");
const navClose = document.querySelector(".nav-close");
console.log(navLinks);

mobileNavMenu.addEventListener("click", function () {
  navLinks.classList.add("nav-active");
  navLinks.classList.remove("hidden");
  navClose.classList.remove("hidden");
  mobileNavMenu.style.display = "none";
});
