// 스코프
// 전역 스코프 / 지역 스코프
// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 지역 스코프
}

funcA();
// console.log(b) -> 오류남

if (true) {
  let c = 1; // 지역 스코프
}

// console.log(c); -> 오류남

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역 스코프

  function funcC() {} // 얘는 지역 스코프 아님, 함수 선언식 안에서만 지역 스코프를 가지고, if 문이나 for 문에서는 전역 스코프를 가짐
}

// console.log(d); -> 오류남
