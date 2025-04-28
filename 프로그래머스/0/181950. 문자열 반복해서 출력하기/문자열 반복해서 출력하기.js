const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    function 문자열반복 (str, n) {
    result = '';
    result = str.repeat(n);
    
    return console.log(result);
    }

문자열반복(str, n);
});

