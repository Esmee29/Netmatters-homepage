// ==========================================================================
// JavaScript Sidebar
// ==========================================================================

const btnHamburger = document.querySelector(".btn-hamburger");
const btnHamburgerSmall = document.querySelector(".hamburger-small");
const sideBar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const darkOverlay = document.querySelector(".dark-overlay");

btnHamburger.addEventListener("click", toggleSidebar);
btnHamburgerSmall.addEventListener("click", toggleSidebar);

function toggleSidebar() {
    darkOverlay.classList.toggle("dark-overlay-active");
    sideBar.classList.toggle("sidebar-active");
    main.classList.toggle("main-sidebar-active");
    btnHamburger.classList.toggle("hamburger-spin");
    btnHamburger.classList.toggle("hamburger-spin-backwards");
    btnHamburgerSmall.classList.toggle("hamburger-spin");
    btnHamburgerSmall.classList.toggle("hamburger-spin-backwards");
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
    document.body.style.overflow = "auto";
});


