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

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    menuIconContainer.classList.remove("hide-menu-icon");
  });
});

///////// CREW //////////
const allSliderImages = document.querySelectorAll(".crew__slider-image");
const sliderNavs = document.querySelectorAll(".crew__slide-nav");
const resetSlider = () => {
  allSliderImages.forEach((s, i) => {
    s.style.transform = `translateX(${i * 100}%)`;
    s.dataset.count = i * 100;
    sliderNavs[i].dataset.count = i * 100;
  });
  activeSliderNav();
};
resetSlider();

let currSlide = 0;
const sliderBothSides = function () {
  this ? currSlide++ : currSlide--;
  // console.log(currSlide);
  if (currSlide < allSliderImages.length && currSlide > 0) {
    allSliderImages.forEach((s, i) => {
      s.style.transform = `translateX(${i * 100 - 100 * currSlide}%)`;
      s.dataset.count = i * 100 - 100 * currSlide;
      sliderNavs[i].dataset.count = i * 100 - 100 * currSlide;
    });
    activeSliderNav();
  } else {
    currSlide = 0;
    resetSlider();
  }
};

window.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    sliderBothSides.bind(true)();
  } else if (e.key == "ArrowLeft") {
    sliderBothSides.bind(false)();
  }
});

function activeSliderNav() {
  sliderNavs.forEach((s) => {
    // console.log(s.getAttribute("data-count"));
    if (s.getAttribute("data-count") === "0") {
      s.style.backgroundColor = "white";
      // console.log(s.classList);
      activeSlideContent(s);
    } else if (s.getAttribute("data-count") !== "0") {
      s.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
    }
  });
}

function activeSlideContent(element) {
  const crewSubHeader = document.querySelector(".crew__sub-header");
  const crewHeader = document.querySelector(".crew__header");
  const crewDesp = document.querySelector(".crew__desp");

  if (element.classList.contains("crew__slider-nav1")) {
    crewSubHeader.textContent = "Commander";
    crewHeader.textContent = "Douglas Hurley";
    crewDesp.textContent = `Douglas Gerald Hurley is an American engineer,
                            former Marine Corps pilot and former NASA astronaut. 
                            He launched into space for the third time as commander of Crew Dragon Demo-2.`;
  }

  if (element.classList.contains("crew__slider-nav2")) {
    crewSubHeader.textContent = "Mission Specialist";
    crewHeader.textContent = "Mark Shuttleworth";
    crewDesp.textContent = `Mark Richard Shuttleworth is the founder and CEO of Canonical, 
                            the company behind the Linux-based Ubuntu operating system. 
                            Shuttleworth became the first South African to travel to space as a space tourist.`;
  }

  if (element.classList.contains("crew__slider-nav3")) {
    crewSubHeader.textContent = "Pilot";
    crewHeader.textContent = "Victor Glover";
    crewDesp.textContent = `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station.
                            Glover is a commander in the U.S. 
                            Navy where he pilots an F/A-18.
                            He was a crew member of Expedition 64, and served as a station systems flight engineer.`;
  }

  if (element.classList.contains("crew__slider-nav4")) {
    crewSubHeader.textContent = "Flight Engineer";
    crewHeader.textContent = "Anousheh Ansari";
    crewDesp.textContent = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                            Ansari was the fourth self-funded space tourist, 
                            the first self-funded woman to fly to the ISS, and the first Iranian in space.`;
  }
}
