// ==========================================================================
// JavaScript Sidebar
// ==========================================================================

const btnHamburger = document.querySelector(".btn-hamburger");
const btnHamburgerSmall = document.querySelector(".hamburger-small");
const sideBar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const darkOverlay = document.querySelector(".dark-overlay");
const btnHamburgerSticky = document.querySelector(".hamburger-sticky");
const btnHamburgerSmallSticky = document.querySelector(".hamburger-small-sticky");

btnHamburger.addEventListener("click", toggleSidebar);
btnHamburgerSmall.addEventListener("click", toggleSidebar);
btnHamburgerSticky.addEventListener("click", toggleSidebar);
btnHamburgerSmallSticky.addEventListener("click", toggleSidebar);

function toggleSidebar() {
    darkOverlay.classList.toggle("dark-overlay-active");
    sideBar.classList.toggle("sidebar-active");
    main.classList.toggle("main-sidebar-active");
    btnHamburger.classList.toggle("hamburger-spin");
    btnHamburger.classList.toggle("hamburger-spin-backwards");
    btnHamburgerSmall.classList.toggle("hamburger-spin");
    btnHamburgerSmall.classList.toggle("hamburger-spin-backwards");
    btnHamburgerSticky.classList.toggle("hamburger-spin");
    btnHamburgerSticky.classList.toggle("hamburger-spin-backwards");
    btnHamburgerSmallSticky.classList.toggle("hamburger-spin");
    btnHamburgerSmallSticky.classList.toggle("hamburger-spin-backwards");
    document.body.style.overflow = sideBar.classList.contains("sidebar-active") ? "hidden" : "auto";
}

darkOverlay.addEventListener("click", () => {
    darkOverlay.classList.remove("dark-overlay-active");
    sideBar.classList.remove("sidebar-active");
    main.classList.remove("main-sidebar-active");
    btnHamburger.classList.remove("hamburger-spin");
    btnHamburger.classList.remove("hamburger-spin-backwards");
    btnHamburgerSmall.classList.remove("hamburger-spin");
    btnHamburgerSmall.classList.remove("hamburger-spin-backwards");
    btnHamburgerSticky.classList.remove("hamburger-spin");
    btnHamburgerSticky.classList.remove("hamburger-spin-backwards");
    btnHamburgerSmallSticky.classList.remove("hamburger-spin");
    btnHamburgerSmallSticky.classList.remove("hamburger-spin-backwards");
    document.body.style.overflow = "auto";
});


