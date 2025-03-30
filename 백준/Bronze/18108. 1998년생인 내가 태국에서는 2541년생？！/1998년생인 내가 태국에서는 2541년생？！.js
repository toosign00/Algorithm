const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim();

const year = parseInt(fileData);
const result = year - 543;

console.log(result);