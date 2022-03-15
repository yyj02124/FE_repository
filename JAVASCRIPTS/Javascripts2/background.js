const images = ["0.png ", "1.png", "2.png"];
const chosenimg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `${chosenimg}`; //=> html의 <img src="img/0.png">와 같다.
// bgImg.src = `img/${chosenimg}`; => html의 <img src="img/0.png">와 같다.

document.body.appendChild(bgImg);
