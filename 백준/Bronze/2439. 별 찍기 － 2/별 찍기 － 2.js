const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split(' ');

const inputData = parseInt(fileData[0]);

for (let i = 1; i <= inputData; i++) {
  let star = '';

  for (let j = 0; j < inputData - i; j++) {
    star += ' ';
  }

  for (let j = 0; j < i; j++) {
    star += '*';
  }

  console.log (star);
}