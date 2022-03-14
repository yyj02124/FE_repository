// const title = document.getElementsByClassName("hello");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title);
// console.log(title.className);
/*
const hellos = document.getElementsByClassName("hello");

console.log(hellos);
*/
// const title = document.querySelector(".hello test1");

/*const titles = document.querySelectorAll(".hello test1");

console.log(title);

console.log(titles);

title.style.color = "blue";*/

const test1 = document.querySelector(".hello1");

function handleTitleClick() {
  console.log("title was clicked!");
  test1.style.color = "rgb(0, 0, 255)";
}
function handleMouseEnter() {
  test1.innerText = "Mouse is here!";
}

function handleMouseleave() {
  test1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS noWIFI");
}
function handleWindowOnline() {
  alert("All Goooood!!");
}

test1.onclick = handleTitleClick;
test1.addEventListener("mouseenter", handleMouseEnter);
test1.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// const test2 = document.querySelector(".hello2");

// function handleTitleClick() {
//   console.log("title was clicked!");
//   test2.style.color = "rgb(0, 255, 0)";
// }
// function handleMouseEnter() {
//   test2.
//   test2.innerText = "Mouse is here!";
// }

// function handleMouseleave() {
//   test2.innerText = "Mouse is gone!";
// }

// test2.addEventListener("click", handleTitleClick);
// test2.addEventListener("mouseenter", handleMouseEnter);
// test2.addEventListener("mouseleave", handleMouseleave);
