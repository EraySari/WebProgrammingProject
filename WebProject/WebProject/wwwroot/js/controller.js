"use strict";

import * as model from "./modelN.js";
import recipeView from "./recipeViewD.js";
import resultView from "./resultsView.js";
import searchView from "./searchView.js";
import buyTicket from "./buyTicket.js";

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
const about = document.querySelector(".aboutUs");
const section1 = document.getElementById("section--1");
const section2 = document.getElementById("section--2");

let currentFlight;
bookingBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //console.log(section2.getBoundingClientRect());
    section2.scrollIntoView({ behavior: "smooth" });
});
about.addEventListener("click", function (e) {
    e.preventDefault();
    //console.log(section2.getBoundingClientRect());
    console.log(model.flight.search.result);
});

const obsCallback = function (entries, observe) {
    const [entry] = entries;
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

const handleHover = async function (e) {
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

const searchResults = async function () {

        const querys = searchView.getQuery();
        const fromTo = querys.split("-");

        /*resultView.renderSpinner();*/

        await model.loadFlightsResults(fromTo[0], fromTo[1]);

        resultView.render(model.flight.search.result);


};
const controlFlight = function () {
    const id = window.location.hash.slice(1);
    currentFlight = model.loadFlight(id);
    const reservedSeat = localStorage.getItem(`${currentFlight.id}`);


    (reservedSeat != null && reservedSeat.length > 0) ? recipeView.setReservedSeat(reservedSeat) : recipeView.setReservedSeat(0);

    
    recipeView.render(currentFlight, true);
    controlBuying();

};

const controlBuying = function () {
    buyTicket.selectSeat();

    buyTicket.bookingTicket(currentFlight);

  
}



searchView.addHandlerRender(searchResults);
recipeView.addHandlerRender(controlFlight);


