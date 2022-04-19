"use strict";
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// } //인터페이스 : js에는 없고 ts에만 있다.
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name; //이 클래스 속성(property)의 이름인 name은 생성자(constructor)의 name과 같다.
        this.age = age;
        this.gender = gender;
    }
} //클래스가 어떤 속성(properties)을 가져야 하는지 선언 해야한다.  또한 그런 속성(properties)들이 가지고 있는 권한(permission)도 설명 해야한다.
//constructor는 메서드(method)인데, 클래스가 시작 할 때 마다,클래스로부터 객체(object)를 만들 떄 마다 호출 되어진다.
//생성자에 몇 개의 인자(argument)를 준다.
// const person = {
//   name: "nada",
//   age: 22,
//   gender: "male",
// };인터페이스를 쓸떄 사용
const lynn = new Human("Lynn", 18, "female");
const nada = new Human("Nada", 23);
//class를 활용하는 법
const sayHi = (person) => {
    return (`Hello ${person.name}, you are ${person.age}` +
        ` and ${person.gender === undefined ? "no gender" : person.gender}!`);
}; // parameter뒤 ?는 optional이다.
let myFunc;
myFunc = function (x, y) {
    return x + y;
};
console.log(sayHi(lynn));
console.log(sayHi(nada));
function getText(text) {
    return text;
}
console.log(getText("hi"));
console.log(getText(10));
console.log(getText(true));
var Week;
(function (Week) {
    Week[Week["sun"] = 0] = "sun";
    Week[Week["mon"] = 12] = "mon";
    Week[Week["tue"] = 13] = "tue";
    Week[Week["wed"] = 14] = "wed";
    Week[Week["thu"] = 15] = "thu";
    Week[Week["fri"] = 16] = "fri";
    Week[Week["sat"] = 17] = "sat";
})(Week || (Week = {}));
console.log(Week.wed);
//# sourceMappingURL=index.js.map