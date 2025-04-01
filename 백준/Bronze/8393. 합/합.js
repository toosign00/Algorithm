const fs = require('fs');
const fileData = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(fileData);

let sum = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
}

console.log(sum);