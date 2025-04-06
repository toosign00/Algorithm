const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

let i = 0;
while (i < fileData.length) {
  const data = fileData[i].split(' ');
  const A = parseInt(data[0]);
  const B = parseInt(data[1]);
  i++;

  console.log(A + B); // A+B 출력
}