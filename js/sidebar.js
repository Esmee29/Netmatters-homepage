const sideBar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const body = document.querySelector("body");
const sideBarActive = document.querySelector(".sidebar-active");
const darkOverlay = document.querySelector(".dark-overlay");

// Selecting the hamburger buttons
const btnHamburgerBig = document.querySelector("#header-hamburger.ham-big");
const btnHamburgerSmall = document.querySelector("#header-hamburger.ham-small");

// Adding event listener to the big hamburger button
btnHamburgerBig.addEventListener("click", () => {
    // Toggle sidebar visibility
    darkOverlay.classList.toggle("dark-overlay-active");
    main.classList.toggle("sidebar-active");
    // Toggle hamburger animation
    btnHamburgerBig.classList.toggle("hamburger-spin");
    btnHamburgerBig.classList.toggle("hamburger-spin-backwards");
    // Toggle body overflow
    body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
});

// Adding event listener to the small hamburger button
btnHamburgerSmall.addEventListener("click", () => {
    // Toggle sidebar visibility
    darkOverlay.classList.toggle("dark-overlay-active");
    main.classList.toggle("sidebar-active");
    // Toggle hamburger animation
    btnHamburgerSmall.classList.toggle("hamburger-spin");
    btnHamburgerSmall.classList.toggle("hamburger-spin-backwards");
    // Toggle body overflow
    body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
});