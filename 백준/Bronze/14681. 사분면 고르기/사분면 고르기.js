const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

const X = parseInt(fileData[0]);
const Y = parseInt(fileData[1]);

if (X > 0 && Y > 0) {
  console.log('1');
} else if (X < 0 && Y > 0) {
  console.log('2');
} else if (X < 0 && Y < 0) {
  console.log('3');
} else if (X > 0 && Y < 0) {
  console.log('4');
} else {
  console.log('유효하지 않은 좌표입니다.');
}