
$(document).ready(function(){
    // Header Banner Slider using Slick
    $('.banner-carousel-container').slick({
        autoplay: true,
        dots: true,
        nextArrow: false,
        prevArrow: false,
    });
    // Partner Banner Slider using Slick
    $('.partner-slideshow').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        prevArrow: false,
        nextArrow: false,
        draggable: false,
        swipe: false
    });
    // Client Banner Slider using Slick
    $('.affiliation-banner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        variableWidth: true,
        prevArrow: false,
        nextArrow: false,
        draggable: false,
        swipe: false,
    });
});