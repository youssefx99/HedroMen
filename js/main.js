import navbar from "./navbar.js";
// Append Navbar For The Current Page
const nav_container = document.querySelector(".navbar");
// nav_container.style.backgroundColor = red;

// document
//   .querySelector(".searchUsersBtn")
//   .addEventListener("click", function () {
//     console.log("sadsad");
//     window.location.href = "../HTML/searchUsers.html";
//   });

if (nav_container) {
  nav_container.innerHTML = navbar;
}
