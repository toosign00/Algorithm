const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = line.split(' ');
  const str = input[0];
  const n = Number(input[1]);
  const result = str.repeat(n);
  console.log(result);
  rl.close();
});