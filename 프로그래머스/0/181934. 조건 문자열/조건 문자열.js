function solution(ineq, eq, n, m) {
  let result = 0;

  if (ineq === '<') {
    if (eq === '=') {
      result = n <= m ? 1 : 0;
    } else {
      result = n < m ? 1 : 0;
    }
  } else {
    if (eq === '=') {
      result = n >= m ? 1 : 0;
    } else {
      result = n > m ? 1 : 0;
    }
  }

  return result;
}