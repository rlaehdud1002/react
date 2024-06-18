// 1. 변수
let age;
age = 30;
console.log(age);

// 2. 상수
const birth = "2000.10.02"
console.log(birth)

// 3. 변수 명명 규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없음
let $_name;

// 3-2. 숫자로 시작 불가
let name1;
// let 2name;

// 3-3. 예약어를 사용할 수 없음
// let let;
// let if;

// 4. 변수 명명 가이드
// 의미 있는 변수명 사용
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;