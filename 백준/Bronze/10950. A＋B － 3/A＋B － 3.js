const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

const testCase = parseInt(fileData[0]);

for (let i = 1; i <= testCase; i++) {
  const A = parseInt(fileData[i].split(' ')[0]);
  const B = parseInt(fileData[i].split(' ')[1]);

  const result = A + B;

  console.log(result);
}