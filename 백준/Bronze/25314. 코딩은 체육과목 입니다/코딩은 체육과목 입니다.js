const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const inputData = parseInt(fileData[0]);

let N = inputData / 4 - 1; // long의 개수
let longString = "long"; // long 문자열

for (let i = 0; i < N; i++) {
  longString += " long"; // long을 추가
}

console.log(`${longString} int`); // 결과 출력