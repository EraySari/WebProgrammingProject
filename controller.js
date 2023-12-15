"use strict";

const btnSignOpenModal = document.querySelector(".btn--open-sign");
const btnSignCloseModal = document.querySelector(".btn--close-sign");
const btnLoginOpenModal = document.querySelector(".btn--open-login");
const btnLoginCloseModal = document.querySelector(".btn--close-login");
const btnLogout = document.querySelector(".btn--logout");

const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");

const modalSign = document.querySelector(".modalSign");
const modalLogin = document.querySelector(".modalLogin");
const overlay = document.querySelector(".overlay");

const btnLogin = document.querySelector(".btnLogin");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

const logined = document.querySelectorAll(".logined");
const welcomeText = document.querySelector(".welcome");
const bookingBtn = document.querySelector(".bookingBtn");
const section1 = document.getElementById("section--1");
const section2 = document.getElementById("section--2");

let closed = true;

const closeModal = function () {
  this.classList.add("hidden");
  overlay.classList.add("hidden");
  closed = true;
};

const openModal = function () {
  if (closed) {
    this.classList.remove("hidden");
    overlay.classList.remove("hidden");
    closed = false;
    return;
  }
  return;
};
btnSignOpenModal.addEventListener("click", openModal.bind(modalSign));
btnLoginOpenModal.addEventListener("click", openModal.bind(modalLogin));

btnSignCloseModal.addEventListener("click", closeModal.bind(modalSign));
btnLoginCloseModal.addEventListener("click", closeModal.bind(modalLogin));

const account1 = {
  firstname: "Eray",
  lastname: "Sari",
  owner: "eraysari52",
  pin: 5252,
};

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    account1.owner === username.value &&
    account1.pin === Number(password.value)
  ) {
    logined.forEach((el) => el.classList.add("hidden"));

    welcomeText.textContent = `Welcome back ${account1.firstname}`;
    welcomeText.classList.remove("hidden");

    modalLogin.classList.add("hidden");
    overlay.classList.add("hidden");

    btnLogout.classList.remove("hidden");
  } else {
    document.querySelector(".login--error__cont").classList.remove("hidden");
  }
});

bookingBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //console.log(section2.getBoundingClientRect());
  section2.scrollIntoView({ behavior: "smooth" });
});
// window.addEventListener("scroll", function () {
//   const coords = section2.getBoundingClientRect();

//   // console.log(coords.top, window.scrollY);
//   // if (window.scrollY >= coords.top) {
//   //   header.classList.remove("hidden");
//   // } else {
//   //   header.classList.add("hidden");
//   // }

//   // if (
//   //   window.scrollY >= header.offsetHeight &&
//   //   window.scrollY < section2.offsetTop - header.offsetHeight
//   // ) {
//   //   header.classList.add("hidden");
//   // }
//   // if (
//   //   window.scrollY <= header.offsetHeight ||
//   //   window.scrollY >= section2.offsetTop - header.offsetHeight
//   // ) {
//   //   header.classList.remove("hidden");
//   // }
// });
const obsCallback = function (entries, observe) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    nav.classList.remove("sticky");
  } else {
    nav.classList.add("sticky");
  }
};
const obsOptions = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); //header dinlenecek

const handleHover = function (e) {
  const link = e.target;

  if (e.target.classList.contains("nav__link")) {
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));
