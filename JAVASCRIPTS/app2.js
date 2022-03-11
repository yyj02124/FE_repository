const title = document.getElementById("title");

// title.innerText = "Got you!";

console.log(title.id);
console.log(title);
// console.log(title.className);
/*
const hellos = document.getElementsByClassName("hello");

console.log(hellos);
*/
// const title = document.querySelector(".hello h1");

/*const titles = document.querySelectorAll(".hello h1");

console.log(title);

console.log(titles);

title.style.color = "blue";*/

function handleTitleClick() {
  console.log("title was clicked!");
  title.style.color = "rgb(0, 0, 255)";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseleave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseleave);
