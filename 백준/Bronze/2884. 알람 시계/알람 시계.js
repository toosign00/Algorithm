const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split(' ');

const H = parseInt(fileData[0]);
const M = parseInt(fileData[1]);

if (M >= 45) {
  console.log(`${H} ${M - 45}`);
} else if (H >= 1 && M < 45) {
  console.log(`${H - 1} ${60 + (M - 45)}`);
} else {
  console.log(`23 ${60 + (M - 45)}`);
}