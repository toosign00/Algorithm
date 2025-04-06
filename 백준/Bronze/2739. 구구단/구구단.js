const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim();

const N = parseInt(fileData);

for (let i = 1; i <= 9; i++) {
  const result = N * i;
  console.log(`${N} * ${i} = ${result}`);
}