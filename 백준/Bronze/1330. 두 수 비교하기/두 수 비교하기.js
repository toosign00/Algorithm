const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split(' ');

const A = parseInt(fileData[0]);
const B = parseInt(fileData[1]);

if (A > B) {
  console.log('>');
} else if (A < B) {
  console.log('<');
} else {
  console.log('==');
}