// 1. 콜백함수
function main(value) {
  value();
}

function sub() {
//   console.log("i am sub");
}

main(sub);

// 위 식이랑 아래 식이랑 같음
// main(function sub() {
//   console.log("i am sub");
// });

// 2. 콜백함수의 활용
// function repeat (count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx)
//     }
// }

// function repeatDouble (count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2)
//     }
// }

// repeat(5)
// repeatDouble(5)

// 위 함수를 아래 함수로 바꾸면서 중복 코드 최소화
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5,(idx) => {
    console.log(idx)
})

repeat(5,(idx) => {
    console.log(idx * 2)
})

repeat(5,(idx) => {
    console.log(idx * 3)
})