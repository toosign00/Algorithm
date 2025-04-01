const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

const now = fileData[0].split(' ');

const hour = parseInt(now[0]); // 17
const minute = parseInt(now[1]); // 40

const cookingTime = parseInt(fileData[1]); // 80

let totalMinutes = hour * 60 + minute + cookingTime;
let completedHour = Math.floor(totalMinutes / 60) % 24;
let completeMinutes = totalMinutes % 60;

console.log(`${completedHour} ${completeMinutes}`);