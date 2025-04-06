const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; true; i++) {
  const data = fileData[i].split(' '); // i번째 줄에서 스페이스로 나누고
  const A = parseInt(data[0]); // i줄에서 첫번째로 받는 값이 A
  const B = parseInt(data[1]); // i줄에서 두번째로 받는 값이 B

  if (A === 0 && B === 0) break; // 0 0이 들어오면 종료
  console.log(A + B); // A+B 출력
}