const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim();

const year = parseInt(fileData);

if ((year % 4 === 0) && !(year % 100 === 0) || (year % 400 === 0)) {
  console.log('1');
} else {
  console.log('0');
}