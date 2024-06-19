// 함수 선언

function greeting() {
  console.log("안녕하세요");
}

// 함수 호출
// console.log("호출 전")
// greeting();
// console.log("호출 후")

function getArea(width, height) {
  function another() {
    console.log("another");
  }

  another();
  //   let width = 10;
  //   let height = 20;
  let area = width * height;

  return area; // 반환값
  console.log("hello"); // return 뒤의 문장은 실행되지 않음
}

let area1 = getArea(10, 20);
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);

console.log(area1);
console.log(area2);
console.log(area3);


// 호이스팅
// 끌어올리다
// 함수를 맨 아래에 선언해도 맨 위로 끌어올려짐