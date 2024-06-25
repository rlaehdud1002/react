// PromiseState
// pending : 대기 상태
// resolve : 성공(fulfilled)
// reject : 실패

// promise 생성자의 인수는 콜백함수를 넣어줌
// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업
//   // executor
//   // resolve 호출 -> 성공
//   // reject 호출 -> 실패
//   setTimeout(() => {
//     const num = null;
//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다");
//     }
//   }, 2000);
// });

// console.log(promise);

// setTimeout(() => {
//     console.log(promise)
// }, 3000)

// then 메서드
// 그 후에
// promise의 비동기 작업이 성공했을 때 실행
// promise 객체를 그대로 반환
// 그래서 뒤에 바로 catch 붙여도 됨 -> promise의 chaining
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// catch
// promise의 비동기 작업이 실패했을 때 실행
// promise.catch((error) => {
//   console.log(error);
// });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(null);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error)
  })
