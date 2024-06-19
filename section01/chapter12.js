function funcA() {
  //   console.log("funcA");
}

let varA = funcA;

// console.log(varA);
varA();

// 1. 함수 표현식
// 함수 이름 생략해도 됨
// 호이스팅 안됨
let varB = function () {
  //   console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};

// 위 식이랑 아래 식이랑 똑같음
// let varC = () => 1;

console.log(varC());

let varD = (value) => value + 1;
console.log(varD(10))
