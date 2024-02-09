// ==========================================================================
// JavaScript Sidebar
// ==========================================================================

const btnHamburger = document.querySelector(".btn-hamburger");
const sideBar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const darkOverlay = document.querySelector(".dark-overlay");

btnHamburger.addEventListener("click", () => {
    darkOverlay.classList.toggle("dark-overlay-active");
    sideBar.classList.toggle("sidebar-active");
    main.classList.toggle("main-sidebar-active");
    btnHamburger.classList.toggle("hamburger-spin");
    btnHamburger.classList.toggle("hamburger-spin-backwards");
    document.body.style.overflow = "hidden";
});

darkOverlay.addEventListener("click", () => {
    darkOverlay.classList.remove("dark-overlay-active");
    sideBar.classList.remove("sidebar-active");
    main.classList.remove("main-sidebar-active");
    btnHamburger.classList.remove("hamburger-spin");
    btnHamburger.classList.remove("hamburger-spin-backwards");
    document.body.style.overflow = "auto";
});
