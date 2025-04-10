const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const [n, x] = fileData[0].split(" ").map(Number);
const arr = fileData[1].split(" ").map(Number);

const result = arr.filter((num) => num < x);

console.log(result.join(" "));