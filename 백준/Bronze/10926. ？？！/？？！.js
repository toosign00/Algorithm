const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim() ;

const id = fileData.trim();
const surprise = '??!';

console.log(id + surprise);