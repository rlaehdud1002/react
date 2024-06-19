// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 객체 리터럴 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key : value
let person = {
  name: "이정환", // 문자열을 key로 사용할때는 따옴표 없어도 됨
  age: 27,
  hobby: "테니스",
  extra: {},
  10: 20, // 숫자도 key로 사용 가능
  "like cat": true, // 띄어쓰기가 있는 문자열을 key로 사용하고 싶으면 따옴표가 있어야 함
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
// 존재하지 않는 프로퍼티에 접근하면 undefined 반환
let name = person.name;
console.log(name);

let age = person["age"]; // 문자열인 key 값은 문자열로 접근해야 함
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1);
