const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let totalPrice = parseInt(input[0]); // 영수증에 적힌 총 금액
let T = parseInt(input[1]); // 물건의 종류 수

for (let i = 2; i < T + 2; i++) {
  const price = input[i].split(' ');
  const itemPrice = parseInt(price[0]); // 물건의 가격
  const itemCount = parseInt(price[1]); // 물건의 개수

  totalPrice -= itemPrice * itemCount; // 총 금액에서 물건의 가격과 개수를 곱한 값을 빼기
}

if (totalPrice === 0) {
  console.log('Yes'); // 총 금액이 0이면 일치함
}
else {
  console.log('No'); // 총 금액이 0이 아니면 일치하지 않음
}