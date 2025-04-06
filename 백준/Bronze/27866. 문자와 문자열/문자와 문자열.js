const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

const S = fileData[0];
const i = Number(fileData[1]);

console.log(S[i - 1]);