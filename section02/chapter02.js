// 단락평가
// function returnFalse () {
//     console.log("False 함수")
//     return false
// }

// function returnTrue () {
//     console.log("True 함수")
//     return true
// }

// console.log(returnFalse() && returnTrue())
// console.log(returnTrue() && returnFalse())
// console.log(returnTrue() || returnFalse())
// console.log(returnFalse() || returnTrue())

// // 연산의 결과가 truthy하거나 falsy 하면 리턴 값 자체가 출력됨

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
