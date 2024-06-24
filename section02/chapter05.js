let o1 = { name: "이정환" };

// 얕은 복사
// 원본 객체가 수정될 수 있음
let o2 = o1;

// 깊은 복사
// 원본 객체가 수정되지 않아 안전함
let o3 = { ...o1 };

console.log(o1 === o2); // 주소가 같음
console.log(o1 === o3); // 주소가 다름

// 객체 간의 비교는 기본적으로 참조값을 기준으로 이루어짐
// 얕은 비교
// 참조값을 기준으로 비교
console.log(o1 === o2)

// 깊은 비교
// 객체를 문자열로 변환하여 비교
// 내장함수 사용
console.log(JSON.stringify(o1) === JSON.stringify(o2))
