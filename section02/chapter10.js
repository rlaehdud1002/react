// 1. Date 객체를 생성하는 방법

// 현재 시간
let date1 = new Date(); // 생성자
// console.log(date1);

// 특정 날짜 (-, ., / 모두 사용 가능)
// 시간은 / 뒤에 :, ,, 사용
let date2 = new Date("1997-01-07/23:59:59");
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값

let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
// 1월 -> 0, 2월 -> 1, 3월 -> 2, 4월 -> 3 ... 12월 -> 11 이렇게 나오기 때문에 +1을 해줘야 함
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
// 2를 넣으면 3월로 수정됨
date1.setMonth(2);
date1.setDate(30);

date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString()); // 우리나라에 맞게 출력
