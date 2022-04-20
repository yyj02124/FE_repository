interface IFullName {
  firstName: string;
  lastName: string;
}
interface IFullName {
  middleName: string;
}
const fullNAme: IFullName = {
  firstName: "s",
  middleName: "j",
  lastName: "t",
};
console.log(
  `firstname is ${fullNAme.firstName}, middlename is ${fullNAme.middleName} and lastname is ${fullNAme.lastName}`
);

// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// } //인터페이스 : js에는 없고 ts에만 있다.
//인터페이스에서도 클래스 처럼 extends키워드를 활용해 상속할 수 있다.
//같은 이름의 인터페이스를 여러개 만들수 있으며, 기존에 만들어진 인터페이스에 내용을 추가할때 유용하다.
class Human {
  public name: string;
  readonly age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name; //이 클래스 속성(property)의 이름인 name은 생성자(constructor)의 name과 같다.
    this.age = age;
    this.gender = gender;
  }
} //클래스가 어떤 속성(properties)을 가져야 하는지 선언 해야한다.  또한 그런 속성(properties)들이 가지고 있는 권한(permission)도 설명 해야한다.
//constructor는 메서드(method)인데, 클래스가 시작 할 때 마다,클래스로부터 객체(object)를 만들 떄 마다 호출 되어진다.
//interface로 클래스를 정의 할경우 implements키워드를 사용한다.(test.ts참조)
//그냥 클래스로 정의 하는 것과 interface로 클래스를 정의 하는것에 대한 차이?
//생성자에 몇 개의 인자(argument)를 준다.
//?를 사용하면 선택적 속성으로 정의 할수 있다, parameter뒤 ?는 optional이다.
//readonly : 읽기 전용 속성 <-> private과 차이는?
//모든 속성이 readonly일때 utility타입이나 단언(Assertion)타입을 활용가능
//utility타입은 이미 정의해 놓은 타입을 변환할때 사용하기 좋은 문법이다.
//유틸리티 타입을 꼭 쓰지 않더라도 기존의 인터페이스, 제네릭등의 기본 문법으로 타입을 변화시킬수 있지만, 유틸리티 타입을 쓰면 더 간결한 문법으로 타입을 정의 할 수 있다.

interface Address {
  email: string;
  address: string;
}
type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: "test@abc.com" }; // 가능
const all: MayHaveEmail = { email: "capt@hero.com", address: "Pangyo" }; // 가능
//partial타입 : 특정 타입의 부분집합을 만족하는 타입을 정의

//Mapped Type : 맵드타입이란 기존에 정의 되어있는 타입을 새로운 타입으로 변환해 주는 문법을 의미한다.
//자바스크립트 map() API함수를 타입에 적용한 것과 같은 효과를 가진다
//Mapped Type 기본문법 => {[P in K] : T} / {[P in K] ? : T} / {readonly [P in K] : T} / {readonly [P in K]? : T}
type Subset<T> = {
  [K in keyof T]?: T[K];
}; // 키와 값이 있는 객체를 정의하는 타입을 받아 그 객체의 부분집합을 만족하는 타입으로 변환해 주는 문법.
//의 예시
interface Person {
  age: number;
  name: string;
}

const ageOnly: Subset<Person> = { age: 23 };
const nameOnly: Subset<Person> = { name: "Tony" };
const ironman: Subset<Person> = { age: 23, name: "tony" };
const empty: Subset<Person> = {};

//Assertion타입?

//Generics타입은 사용 시점에 타입을 선언 할 수 있는 방법을 제공한다. 타입을 인수로 받아서 사용한다고 생각하기.
//타입을 마치 함수의 파라미터 처럼 사용
function toArray<T>(a: T, b: T): T[] {
  return [a, b];
} //함수가 인수로 받은 값을 배열로 반환
//타입을 인수로 받아서 사용한다고 생각했을때 타입을 제공해주지 않을수도 있으면 JS랑차이는 그저 문법차이인가?
toArray<number>(1, 2);
toArray<string>("1", "2");
toArray<string | number>(1, "2");
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
const sayHi = (person: Human): string => {
  return (
    `Hello ${person.name}, you are ${person.age}` +
    ` and ${person.gender === undefined ? "no gender" : person.gender}!`
  );
};
// 매개 변수 이름이 인터페이스와 일치할 필요가 없다.
// 또한 타입 추론을 통해 매개 변수를 순서에 맞게 암시적 타입으로 제공할 수 있다.

let myFunc: (arg1: number, arg2: number) => number;
myFunc = function (x, y) {
  return x + y;
};

console.log(sayHi(lynn));
console.log(sayHi(nada));

function getText(text: any) {
  return text;
}
console.log(getText("hi"));
console.log(getText(10));
console.log(getText(true));

//enum 사용
//enum 타입은 number타입과 호환되지만,  enum타입 끼리는 호환되지 않는다.
// enum Week {
//   sun,
//   mon = 12,
//   tue,
//   wed,
//   thu,
//   fri,
//   sat,
// }

// console.log(Week.sun);
// console.log(Week.wed);

// 기존 타입들이 조합 가능하다면 인터섹션을 활용할 수 있다.
interface IUser {
  name: string;
  age: number;
}
interface IValidation {
  isValid: boolean;
}
// const heropy: IUser = {
//   name: 'Heropy',
//   age: 36,
//   isValid: true // Error -'{ name: string; age: number; isValid: boolean; }' 형식은 'IUser' 형식에 할당할 수 없습니다. 개체 리터럴은 알려진 속성만 지정할 수 있으며 'IUser' 형식에 'isValid'이(가) 없습니다.
// };
const neo: IUser & IValidation = {
  name: "Neo",
  age: 85,
  isValid: true,
};

console.log(neo);

// 혹은 기존 타입(IUser, IValidation)과 비슷하지만, 정확히 일치하는 타입이 없다면 새로운 타입을 생성해야 한다.
interface IUserNew {
  name: string;
  age: number;
  isValid: boolean;
}
const evan: IUserNew = {
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
function someFunc(val: string | number, isNumber: boolean) {
  if (isNumber) {
    //변수 as 타입
    (val as number).toFixed(2);
    //<타입>변수
    (<number>val).toFixed(2);
  }
}

//type키워드를 사용해 새로운 타입 조합을 만들 수 있다.
//하나 이상의 타입을 조합해 이름을 부여하며, 정확히는 조합한 각 타입들을 참조하는 이ㅡㅁ을 만드는것
type MyType = string;
type YourType = string | number | boolean;
type TUser =
  | {
      name: string;
      age: number;
      isValid: boolean;
    }
  | [string, number, boolean];
let userA: TUser = {
  name: "Neo",
  age: 85,
  isValid: true,
};
let userB: TUser = ["Evan", 36, false];
function typeAliasesFunc(arg: MyType): YourType {
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

//non-null 단언 연산자???

//타입 가드

export {};
