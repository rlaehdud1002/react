// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 기본값 설정도 가능
let [one, two, three, four, five = 5] = arr;

// console.log(one, two, three, four, five);

// 2. 객체의 구조 분해 할당

let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 키 값의 이름을 바꿀 수 있음
// 기본값 설정 가능
let { name, age : myAge, hobby, extra, say = "hello" } = person;

// console.log(name, myAge, hobby, extra, say)

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra)
}

func(person)