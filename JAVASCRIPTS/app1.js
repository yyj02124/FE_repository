/*
const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
*/
/*
function plus(a, b) {
  return a + b;
}

let calculator = {
  add: function (a, b) {
    return a + b;
  },

  minus: function (a, b) {
    return a - b;
  },

  multi: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  },

  square: function (a, b) {
    return a ** b;
  },
};

function multiple(a, b, c) {
  console.log(a * b * c);
}

const plusreturn = plus(2, 3);
const minusreturn = calculator.minus(plusreturn, 2);
const multireturn = calculator.multi(minusreturn, 4);
const dividereturn = calculator.divide(minusreturn, 2);
const squarereturn = calculator.square(dividereturn, minusreturn);

console.log(plusreturn);

calculator.square(2, 5);
calculator.multi(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.add(5, 2);

multiple(2, 2, 3);
*/

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("please write a real age");
} else if (age < 19) {
  console.log("you are to young");
} else if (age > 70) {
  console.log("you can do everything you want");
} else if (age >= 50 && age <= 70) {
  console.log("you have to excercise");
} else {
  console.log("you can drink");
}
