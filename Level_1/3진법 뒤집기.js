function solution(n) {
  let remain = [];
  let temp = 0;

  let result = 0;

  if (n <= 3) return 1;

  // 개선된 풀이 // toString(x)를 이용하면 진법 변환가능.
  // n.toString(3)

  while (1) {
    temp = n % 3;
    remain.push(temp);
    n = parseInt(n / 3);

    if (n < 3) {
      remain.push(n);
      break;
    }
  }

  let j = remain.length - 1;
  for (let i = 0; i < remain.length; i++) {
    result = result + remain[j] * 3 ** i;
    j--;
  }

  return result;
}
