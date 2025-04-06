const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(fileData[0]);
const numbers = fileData[1].split(' ');
const v = Number(fileData[2]);

let count = 0;
for (let i = 0; i < n; i++) {
  if (Number(numbers[i]) === v) {
    count++;
  }
}
console.log(count);