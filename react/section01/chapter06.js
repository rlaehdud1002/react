// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num + str;
// num이 묵시적으로 string으로 변환
// console.log(result)

// 2. 명시적 형 변환
// 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1)
console.log(10 + strToNum1)

let str2 = "10개";
// 숫자가 아닌 다른 값이 들어있는 문자열을 숫자로 변환할 때 -> parseInt
// 숫자 앞에 문자가 있으면 안됨
let strToNum2 = parseInt(str2);

console.log(strToNum2)

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다")