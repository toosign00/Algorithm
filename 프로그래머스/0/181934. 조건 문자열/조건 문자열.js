function solution(ineq, eq, n, m) {
  let result = 0;

    if (eq === '=' && n === m) return 1;
    if (ineq === '<' && n < m) return 1;
    if (ineq === '>' && n > m) return 1;

    return 0;
}