const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

let T = parseInt(fileData[0]); // 라인개수
let result = '';
for (let i = 1; i <= T; i++) {
  let num = fileData[i].split(' ');
  result += parseInt(num[0]) + parseInt(num[1]) + '\n';
}

console.log(result);