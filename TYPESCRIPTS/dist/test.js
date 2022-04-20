function makeSon(c, firstName) {
    return new c(firstName);
}
function getFullName(son) {
    return `${son.firstName} ${son.lastName}`;
}
class Anderson {
    constructor(firstName) {
        this.firstName = firstName;
        this.lastName = "Anderson";
    }
}
const tomas = makeSon(Anderson, "Tomas");
const jack = makeSon(Anderson, "Jack");
getFullName(tomas); // Tomas Anderson
getFullName(jack); // Jack Anderson
console.log(getFullName(tomas));
console.log(getFullName(jack));
class Smith {
    constructor(firstName, agentCode) {
        this.firstName = firstName;
        this.lastName = `Smith ${agentCode}`;
    }
}
// const smith = makeSon(Smith, 7); // Error'typeof Smith' 형식의 인수는 'IFullNameConstructor' 형식의 매개 변수에 할당될 수 없습니다.
// //error TS2345: Argument of type 'typeof Smith' is not assignable to parameter of type 'IFullNameConstructor'.
// getFullName(smith);
//# sourceMappingURL=test.js.map