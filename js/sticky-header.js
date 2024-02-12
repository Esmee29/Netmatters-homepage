// ==========================================================================
// JavaScript Sticky Header
// ==========================================================================
// Add the sticky-hide class to the sticky header on page load
window.onload = function() {
    const stickyHeader = document.querySelector("#sticky");
    stickyHeader.classList.add("sticky-hide");
};

// Sticky header logic
const stickyHeader = document.querySelector("#sticky");
const stickyHeaderHeight = stickyHeader.offsetHeight;

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {stickyHeaderScroll()};

function stickyHeaderScroll() {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos && currentScrollPos > stickyHeaderHeight) // user is scrolling down and is past the default header at the top of page
    {
        stickyHeader.classList.add("sticky-hide");
        stickyHeader.classList.remove("sticky-show");
    }
    else // user is scrolling upwards
    {
        stickyHeader.classList.add("sticky-show");     
        stickyHeader.classList.remove("sticky-hide");
    }

    if (currentScrollPos == 0) // removes sticky header at the top of the page, adds it back in if the webpage is scrolled past the height of the header
    {
        stickyHeader.classList.add("sticky-remove");
        stickyHeader.classList.remove("sticky-add");
        console.log("sticky removed at top of page");
    }
    else if (currentScrollPos > stickyHeaderHeight)
    {
        stickyHeader.classList.add("sticky-add");
        stickyHeader.classList.remove("sticky-remove");
    }

    prevScrollPos = currentScrollPos;
}