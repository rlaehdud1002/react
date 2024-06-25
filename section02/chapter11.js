// JavaScript는 "동기적"으로 코드를 실행

console.log(1);
// setTimeout을 이용하면 비동기적으로 코드가 실행
// 단위가 ms
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);
