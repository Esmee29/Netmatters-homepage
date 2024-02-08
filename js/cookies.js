//Javascript Cookies
const btnAcceptCookies = document.querySelector(".accept-cookies-btn");
const btnManageConsent = document.querySelector(".cookie-settings-btn");
const cookieSection = document.getElementById("cookie-consent");
const body = document.body;
let testDate = new Date();
console.log(testDate);

btnAcceptCookies.addEventListener("click", () => {
    cookieSection.style.display = "none";
    setCookie("cookie", true, 1); // number in days
    
    body.style.overflow = "auto";
    console.log("cookie should be stored now");
});

btnManageConsent.addEventListener("click", () => {
    cookieSection.style.display = "flex";
    body.style.overflow = "hidden";
});

function setCookie(name, value, duration) {
    let date = new Date();
    date.setTime(date.getTime() + (duration * 24 * 60 * 60 * 1000)); // sets the numeric value inputted into 'duration' in days
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + "; path=/";
}

function getCookie(name) {
    const cName = name + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let value;
    
    cArray.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    });

    return value;
}

function cookieMessage() {
    if (!getCookie("cookie")) {
        console.log("cookie not here");
        cookieSection.style.display = "flex";
        body.style.overflow = "hidden";
    }
}

window.addEventListener("load", cookieMessage);
