// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// export default를 쓰면 다른 파일에서 불러올 때 중괄호({}) 없이 사용 가능
// 이름을 바꿔서 불러오는 것도 가능
export default function multiply (a, b) {
    return a * b
}

// 모듈 내보내기

// module.exports = {
//   // 변수의 이름과 함수의 이름이 같을 때는 키 값만 써줘도 됨
//   add,
//   sub,
// };

// EM 모듈 시스템 사용
// 함수 선언할 때 앞에 export 써도 똑같이 동작됨
export { add, sub };

