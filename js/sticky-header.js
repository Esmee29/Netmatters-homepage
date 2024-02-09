// ==========================================================================
// JavaScript Sticky Header
// ==========================================================================
const stickyEle = document.querySelector("#sticky");
const stickyEleHeight = stickyEle.offsetHeight;

let prevScrollPos = window.pageYOffset;

window.addEventListener('DOMContentLoaded', function() {
    stickyHeaderScroll();
});

window.onscroll = function() {stickyHeaderScroll()};

function stickyHeaderScroll() {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos && currentScrollPos > stickyEleHeight) {
        stickyEle.classList.add("sticky-hide");
        stickyEle.classList.remove("sticky-show");
    } else {
        stickyEle.classList.add("sticky-show");     
        stickyEle.classList.remove("sticky-hide");
    }

    if (currentScrollPos === 0) {
        stickyEle.classList.add("sticky-remove");
        stickyEle.classList.remove("sticky-add");
        console.log("sticky removed at top of page");
    } else if (currentScrollPos > stickyEleHeight) {
        stickyEle.classList.add("sticky-add");
        stickyEle.classList.remove("sticky-remove");
    }

    // New condition to hide #sticky when at the top of the page
    if (currentScrollPos === 0) {
        stickyEle.classList.add("sticky-hidden");
    } else {
        stickyEle.classList.remove("sticky-hidden");
    }

    prevScrollPos = currentScrollPos;
}


