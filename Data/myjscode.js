"use strict";

/*
// Document selections
// Start-UP
const newName = document.querySelector(".form-label-name");
const newMail = document.querySelector(".form-label-mail");
const newPassword = document.querySelector(".form-label-password");
const newCountry = document.querySelector(".form-label-country");
const newPhone = document.querySelector(".form-label-phone");
const termsCheckBox = document.querySelector(".form-check-input-terms");
const createNewAccountBtn = document.querySelector(
  ".buttonFormCreateNewAccount"
);

// Login
const mailLogin = document.querySelector(".mail-input-login");
const passwordLogin = document.querySelector(".password-input-login");
const loginBtn = document.querySelector(".login-btn-enter");

// Main Page
// nav-bar
const navBarName = document.querySelector(".nav-bar-userName");

// Course Template
const starBtn = document.querySelector(".star-fav");
const favContainerContent = document.querySelector(".favContainer");

// starBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   starBtn.classList.toggle("fav-selected");
//   favContainerContent.insertBefore();
// });
// Alerts
const wrongDataLogin = document.querySelector(".alert-wrong-data");

//////////////////////////////////////////////////////////////////

////////////////////////////////////  IMPORTANT  ///////////////////////////
let currentAccount = null;
let NumberOfAccounts = 0;



//////////////////////////////// Start-Up Page ///////////////////////////////
// Validataion Of Creating Account\

// Create Account Button

//////////////////////////////// Login-in Page ///////////////////////////////

const acc1 = {
  name: "ali Dawoud",
  mail: "alidawoud99@gmail.com",
  password: "123456",
  country: "Egypt",
  Phone: "01094263212",
  balance: 500,
};

let systemAccounts = [acc1];

//////////////////////////////// Sign-Up Page ///////////////////////////////
//////////////////////////////// Courses Page ///////////////////////////////
//////////////////////////////// Daily Page ///////////////////////////////
//////////////////////////////// Rank Page ///////////////////////////////
//////////////////////////////// Bank Page ///////////////////////////////
////////////////////////////////  Page ///////////////////////////////
//////////////////////////////// Bank Page ///////////////////////////////

*/
/////////////////////////////////////////////////////////////////////

// Get a reference to the "Daily" card element by its class name
// Get a reference to the "Daily" card element by its class name
/*
const dailyCard = document.querySelector(".daily");

// Function to set the background color
function setBackground() {
  dailyCard.style.backgroundImage =
    "linear-gradient(to bottom right, rgb(255, 255, 255), rgb(91, 91, 91))";

  // Store the background color in localStorage
  localStorage.setItem("backgroundColor", dailyCard.style.backgroundImage);
}

// Check if there's a saved background color and apply it
const savedBackgroundColor = localStorage.getItem("backgroundColor");
if (savedBackgroundColor) {
  dailyCard.style.backgroundImage = savedBackgroundColor;
}
// Add a click event listener to the card
dailyCard.addEventListener("click", function () {
  setBackground();
});
*/
/////////////////////////////////////////////////////////////////////

// Back to courses and upgrade the balance
/*
const doneBtn = document.querySelector(".doneBtnReal");
doneBtn.addEventListener("click", function () {
  console.log("sdgasdgdsf");
  // window.location.href = "../HTML/courses.html";
});
*/
/////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Get the form and search button elements
  const form = document.querySelector(".search-bar");
  const searchButton = form.querySelector(".searchUsersBtn");

  // Add an event listener to the form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Redirect to 'searchUsers.html'
    window.location.href = "searchUsers.html";
  });
});
/////////////////////////////////////////////////////////////////////


/*
// Assuming you have the user data stored in an array called "userData"

// Sort the user data by rank
userData.sort((a, b) => a.rank - b.rank);

// Get the container element
const rankContainer = document.querySelector(".rank--Container");

// Create and append the heading element
const h1head = document.createElement("h1");
h1head.className = "h1head";
h1head.textContent = "Users Rank";
rankContainer.appendChild(h1head);

// Create and append the rankData container
const rankData = document.createElement("div");
rankData.className = "rankData";
rankContainer.appendChild(rankData);

// Iterate over the sorted user data and create elements for each user
userData.forEach((user) => {
  const theRank = document.createElement("div");
  theRank.className = "theRank";

  const userRankName = document.createElement("h4");
  userRankName.className = "user--rank--name";
  userRankName.textContent = user.name;

  const rankNumber = document.createElement("div");
  rankNumber.className = "rank--number";
  rankNumber.textContent = `${user.rank} 💧`;

  theRank.appendChild(userRankName);
  theRank.appendChild(rankNumber);

  rankData.appendChild(theRank);
});
*/
/////////////////////////////////////////////////////////////////////
class User {
  balance = 0;
  rank = ++NumberOfAccounts;
  favVideos = [];
  favArticales = [];

  constructor(name, country, phone, mail, password) {
    this.name = name;
    this.country = country;
    this.phone = phone;
    this.mail = mail;
    this.password = password;
  }
}

// Saving data to local storage

//////////////////////////// Comunity   Script  /////////////////////////////////
const createPostBtn = document.querySelector(".createPostBtn");
const createNewPostPlace = document.querySelector(".createNewPostPlace");
const titlePostValue = document.querySelector(".titlePostValue");
const questionPostValue = document.querySelector(".questionPostValue");
const communiteContainerAll = document.querySelector(".communiteContainerAll");

createPostBtn.addEventListener("click", function () {
  createNewPostPlace.style.display = "flex";
});

const CreateInPostBtn = document.querySelector(".CreateInPostBtn");

CreateInPostBtn.addEventListener("click", function () {
  const postDiv = createNewPost(titlePostValue.value, questionPostValue.value);
  communiteContainerAll.appendChild(postDiv);

  titlePostValue.value = "";
  questionPostValue.value = "";

  createNewPostPlace.style.display = "none";
});

function createNewPost(title, content) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post1");

  const thePostDiv = document.createElement("div");
  thePostDiv.classList.add("thePost");

  const postMaker = document.createElement("h4");
  postMaker.classList.add("postMaker");
  postMaker.textContent = "Ali Maher";

  const postTitle = document.createElement("h3");
  postTitle.classList.add("postTitle");
  postTitle.textContent = title;

  const postContent = document.createElement("h5");
  postContent.classList.add("postContent");
  postContent.textContent = content;

  thePostDiv.appendChild(postMaker);
  thePostDiv.appendChild(postTitle);
  thePostDiv.appendChild(postContent);

  const postComments = document.createElement("div");
  postComments.classList.add("postComments");

  const newCommentDiv = document.createElement("div");
  newCommentDiv.classList.add("newPost");

  const commentInput = document.createElement("input");
  commentInput.classList.add("commentInputField");
  commentInput.type = "text";

  const commentButton = document.createElement("button");
  commentButton.classList.add("newCommentBtn");
  commentButton.textContent = "Comment";

  commentButton.addEventListener("click", function () {
    if (commentInput.value === "") {
      alert("Please do not add empty comments");
    } else {
      addComment(postDiv, commentInput.value);
      commentInput.value = "";
    }
  });

  newCommentDiv.appendChild(commentInput);
  newCommentDiv.appendChild(commentButton);

  postComments.appendChild(newCommentDiv);

  postDiv.appendChild(thePostDiv);
  postDiv.appendChild(postComments);

  return postDiv;
}

function addComment(postDiv, commentContent) {
  const theCommentDiv = document.createElement("div");
  theCommentDiv.classList.add("theComment");

  const commentMaker = document.createElement("h6");
  commentMaker.classList.add("commentMaker");
  commentMaker.textContent = "User"; // Replace with the actual user's name

  const commentContentElement = document.createElement("p");
  commentContentElement.classList.add("commmentContent");
  commentContentElement.textContent = commentContent;

  theCommentDiv.appendChild(commentMaker);
  theCommentDiv.appendChild(commentContentElement);

  const postComments = postDiv.querySelector(".postComments");
  postComments.appendChild(theCommentDiv);
}

// Add comment functionality for existing posts
const existingCommentButtons = document.querySelectorAll(".newCommentBtn");

existingCommentButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const postId = button.closest(".post1").id;
    const postDiv = document.getElementById(postId);
    const commentInput = postDiv.querySelector(".commentInputField");

    const commentContent = commentInput.value;

    if (commentContent.trim() !== "" && commentContent !== "") {
      addComment(postDiv, commentContent);
      commentInput.value = "";
    } else {
      alert("Dont add empty comment");
    }
  });
});
