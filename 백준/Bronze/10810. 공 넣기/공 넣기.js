function main() {
  const data = getData();
  const n = data[0][0]; // 바구니 개수 [5, 4], [1, 2, 3], [3, 4, 4], [1, 4, 1], [2, 2, 2]
  const result = new Array(n).fill(0); // 바구니 초기화 [0, 0, 0, 0, 0]

  for (let i = 1; i < data.length; i++) {
    const rowArr = data[i]; // i= 1 [1, 2, 3], i=2 [3, 4, 4], i=3 [1, 4, 1], i=4 [2, 2, 2]
    const x = rowArr[0]; // 바구니 시작 번호
    const y = rowArr[1]; // 바구니 끝 번호
    const z = rowArr[2]; // 공 번호

    for (let k = x; k <= y; k++) {
      result[k - 1] = z;
    }
  }

  const strResult = result.join(' ');
  console.log(strResult);
}

function getData() {
  const arr = require('fs').readFileSync(0).toString().trim().split('\n');
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(' ');
    for (let k = 0; k < rowArr.length; k++) rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }
  return result.length === 1 ? result[0] : result;
}

main();