const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const n = (fileData[0]);
const arr = fileData[1].split(' ');

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(min, max);