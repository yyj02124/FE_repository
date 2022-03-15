const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  // console.log(loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello " + username;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = `Hello ${username} keep going`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(username);
  console.log(username);
}

function paintGreeting(username) {
  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
// }

loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  // greeting.innerText = "Hello " + savedUsername;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(savedUsername);
}
