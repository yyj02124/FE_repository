/*
const a = 6;
const b = 3;
let myName = "DANA";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(myName);
console.log("Hello " + myName);

myName = "Nicol";
console.log("your name is " + myName);

const amIFat = null;
let somthing;
console.log(amIFat);
console.log(somthing);
*/
/*
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sund = "sund";*/
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sund"];

/*const nonsence = [1, 2, "hello", false, true, null, undefined];*/
//어레이에서 아이템 받아오기
console.log(daysOfWeek[3]); /*0,1,2,3 => 4번째 값을 알려줌 =>thu */
//어레이에 아이템 추가하기
daysOfWeek.push("newday");
console.log(daysOfWeek);
/*
const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("chick");
console.log(toBuy);
console.log(toBuy[2]);
*/
/*
const player = {
  name: "dana",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);

player.fat = false;
console.log(player);
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);
*/
/*
console.log("Hello my name is dana"); //여러번 써서 인사를 하려면 이름을 바꿔 여러번 써야한다.

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and my age is " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("dana", 21);
sayHello("lynn", 19);

function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide(90, 20);
*/
/*
const player = {
  name: "nico",
  sayHello: function (otherPersonName) {
    console.log("hello! " + otherPersonName + " nice to meet you");
  },
};
console.log(player.name);
player.sayHello("lynn");
player.sayHello("Dana");
*/

function plus(a, b) {
  console.log(a + b);
}

let calculator = {
  add: function (a, b) {
    console.log(a + b);
  },

  minus: function (a, b) {
    console.log(a - b);
  },

  multi: function (a, b) {
    console.log(a * b);
  },

  divide: function (a, b) {
    console.log(a / b);
  },

  square: function (a, b) {
    console.log(a ** b);
  },
};

function multiple(a, b, c) {
  console.log(a * b * c);
}

plus(3, 8);

calculator.square(2, 5);
calculator.multi(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.add(5, 2);

multiple(2, 2, 3);
