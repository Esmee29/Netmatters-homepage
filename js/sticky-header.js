// ==========================================================================
// JavaScript Sticky Header
// ==========================================================================
const stickyEle = document.querySelector("#sticky");
const stickyEleHeight = stickyEle.offsetHeight;


let prevScrollPos = window.pageYOffset;

window.onscroll = function() {stickyHeaderScroll()};

function stickyHeaderScroll() {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos && currentScrollPos > stickyEleHeight) // user is scrolling down and is past the default header at the top of page
    {
        stickyEle.classList.add("sticky-hide");
        stickyEle.classList.remove("sticky-show");
    }
    else // user is scrolling upwards
    {
        stickyEle.classList.add("sticky-show");     
        stickyEle.classList.remove("sticky-hide");
    }

    if (currentScrollPos == 0) // removes sticky header at the top of the page, adds it back in if the webpage is scrolled past the height of the header
    {
        stickyEle.classList.add("sticky-remove");
        stickyEle.classList.remove("sticky-add");
        console.log("sticky removed at top of page");
    }
    else if (currentScrollPos > stickyEleHeight)
    {
        stickyEle.classList.add("sticky-add");
        stickyEle.classList.remove("sticky-remove");
    }

    prevScrollPos = currentScrollPos;
}

