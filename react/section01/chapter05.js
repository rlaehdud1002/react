// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// // 모듈러 연산
// console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;

// 연산이 실패했을 때의 값
let nan = NaN;

// console.log(1 * "hello")

// 2. String Type
let myName = "김도영";
let myLocation = "광주";
let introduce = myName + myLocation
// console.log(introduce)

// `` -> 변수 값을 동적으로 만들어줌
// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
// console.log(introduceText)

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;
console.log(empty)

// 5. Undefined Type -> 자동으로 들어가는 값
let none;
console.log(none)