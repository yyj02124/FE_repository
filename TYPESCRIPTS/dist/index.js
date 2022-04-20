"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fullNAme = {
    firstName: "s",
    middleName: "j",
    lastName: "t",
};
console.log(`firstname is ${fullNAme.firstName}, middlename is ${fullNAme.middleName} and lastname is ${fullNAme.lastName}`);
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// } //인터페이스 : js에는 없고 ts에만 있다.
//인터페이스에서도 클래스 처럼 extends키워드를 활용해 상속할 수 있다.
//같은 이름의 인터페이스를 여러개 만들수 있으며, 기존에 만들어진 인터페이스에 내용을 추가할때 유용하다.
class Human {
    constructor(name, age, gender) {
        this.name = name; //이 클래스 속성(property)의 이름인 name은 생성자(constructor)의 name과 같다.
        this.age = age;
        this.gender = gender;
    }
} //클래스가 어떤 속성(properties)을 가져야 하는지 선언 해야한다.  또한 그런 속성(properties)들이 가지고 있는 권한(permission)도 설명 해야한다.
const me = {}; // 가능
const you = { email: "test@abc.com" }; // 가능
const all = { email: "capt@hero.com", address: "Pangyo" }; // 가능
const ageOnly = { age: 23 };
const nameOnly = { name: "Tony" };
const ironman = { age: 23, name: "tony" };
const empty = {};
//Assertion타입?
//Generics타입은 사용 시점에 타입을 선언 할 수 있는 방법을 제공한다. 타입을 인수로 받아서 사용한다고 생각하기.
//타입을 마치 함수의 파라미터 처럼 사용
function toArray(a, b) {
    return [a, b];
} //함수가 인수로 받은 값을 배열로 반환
//타입을 인수로 받아서 사용한다고 생각했을때 타입을 제공해주지 않을수도 있으면 JS랑차이는 그저 문법차이인가?
toArray(1, 2);
toArray("1", "2");
toArray(1, "2");
// toArray<number>(1, '2');
//타입추론을 사용해서 타입을 제공해 주지 않을수도 있다.
// const person = {
//   name: "nada",
//   age: 22,
//   gender: "male",
// };인터페이스를 쓸떄 사용
const lynn = new Human("Lynn", 18, "female");
const nada = new Human("Nada", 23);
//class를 활용하는 법 : new키워드를 사용 해야 한다.
//함수의 반환값에 타입선언을 무조건 해줘야 하는가? 안해줘도 타입추론으로 타입이 결정이 되어 상관없는게 아닌가?
const sayHi = (person) => {
    return (`Hello ${person.name}, you are ${person.age}` +
        ` and ${person.gender === undefined ? "no gender" : person.gender}!`);
};
// 매개 변수 이름이 인터페이스와 일치할 필요가 없다.
// 또한 타입 추론을 통해 매개 변수를 순서에 맞게 암시적 타입으로 제공할 수 있다.
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
// const heropy: IUser = {
//   name: 'Heropy',
//   age: 36,
//   isValid: true // Error -'{ name: string; age: number; isValid: boolean; }' 형식은 'IUser' 형식에 할당할 수 없습니다. 개체 리터럴은 알려진 속성만 지정할 수 있으며 'IUser' 형식에 'isValid'이(가) 없습니다.
// };
const neo = {
    name: "Neo",
    age: 85,
    isValid: true,
};
console.log(neo);
const evan = {
    name: "Evan",
    age: 36,
    isValid: false,
};
console.log(evan);
// function someFunc(val: string | number, isNumber: boolean) {
//   if (isNumber) {
//     val.toFixed(2); //string | number' 형식에 'toFixed' 속성이 없습니다. 'string' 형식에 'toFixed' 속성이 없습니다.
//   }
// }
//타입 단언
function someFunc(val, isNumber) {
    if (isNumber) {
        //변수 as 타입
        val.toFixed(2);
        //<타입>변수
        val.toFixed(2);
    }
}
let userA = {
    name: "Neo",
    age: 85,
    isValid: true,
};
let userB = ["Evan", 36, false];
function typeAliasesFunc(arg) {
    switch (arg) {
        case "s":
            return arg.toString();
        case "n":
            return parseInt(arg);
        default:
            return true;
    }
}
console.log(typeAliasesFunc("asdf"));
//# sourceMappingURL=index.js.map