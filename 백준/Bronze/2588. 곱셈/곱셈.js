const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

const A = parseInt(fileData[0]);
const B = parseInt(fileData[1]);

console.log(A * (B % 10));
console.log(A * (Math.floor(B / 10) % 10 ));
console.log(A * Math.floor(B / 100));
console.log(A * B);