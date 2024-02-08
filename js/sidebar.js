// ==========================================================================
// JavaScript Sidebar
// ==========================================================================

const btnHamburger = document.querySelector(".btn-hamburger");
const sideBar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const sideBarActive = document.querySelector(".sidebar-active");
const darkOverlay = document.querySelector(".dark-overlay");
 
btnHamburger.addEventListener("click", () => { // Default hamburger button on the main header
    darkOverlay.classList.add("dark-overlay-active");
    sideBar.classList.add("sidebar-active");
    btnHamburger.classList.add("hamburger-spin");
    btnHamburger.classList.remove("hamburger-spin-backwards");
    document.body.style.overflow = "hidden";
})
 
darkOverlay.addEventListener("click", () => { // Click anywhere on the dark overlay next to the sidebar
    darkOverlay.classList.remove("dark-overlay-active");
    sideBar.classList.remove("sidebar-active");
    btnHamburger.classList.add("hamburger-spin-backwards");
    btnHamburger.classList.remove("hamburger-spin");
    document.body.style.overflow = "auto";
})