const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split(' ');

const a = parseInt(fileData[0]);
const b = parseInt(fileData[1]);
const c = parseInt(fileData[2]);

// 같은 눈이 2개인 경우의 변수 선언
let sameNumber;

if (a === b) {
  // a와 b가 같은 경우
  sameNumber = a;
} else if (b === c) {
  // b와 c가 같은 경우
  sameNumber = b;
} else {
  // a와 c가 같은 경우
  sameNumber = c;
}


if (a === b && b === c) {
  // 모두 같은 경우
  // a, b, c 중 아무거나 사용해도 상관없음
  console.log(10000 + a * 1000);
} else if (a === b || a === c || b === c) {
  // 같은 눈이 2개인 경우
  // sameNumber에 같은 눈의 값을 저장했으므로 sameNumber를 사용
  console.log(1000 + sameNumber * 100);
} else {
  // 모두 다른 경우
  // Math.max를 사용하여 가장 큰 눈을 찾음
  console.log(Math.max(a, b, c) * 100);
}