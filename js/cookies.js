// JavaScript Cookies //

const btnAcceptCookies = document.getElementsByClassName("accept-cookies-btn"); // Get the accept cookies button element
const btnManageConsent = document.getElementsByClassName("cookie-settings-btn"); // Get the manage consent button element
const cookieSection = document.getElementById("cookie-consent"); // Get the cookie section element
const body = document.querySelector("body");// Get the body element

// Check if the user has consented to the use of cookies
if (!localStorage.getItem("cookieConsent")) {
  // Display the cookie consent popup
  cookieSection.style.display = "block";

  // Add event listener to the accept cookies button
  btnAcceptCookies.addEventListener("click", function() {
    // Store the user's consent locally
    localStorage.setItem("cookieConsent", true);

    // Hide the cookie consent popup
    cookieSection.style.display = "none";
  });
}

// Add event listener to the manage consent button
btnManageConsent.addEventListener("click", function() {
  // Display the cookie consent popup
  cookieSection.style.display = "block";
});