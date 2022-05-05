function solution(n) {
  // 소수 카운트 count
  let count = 0;
  // 소수 값들은 ture, 아닌 값들은 false로 하는 배열
  const arr = new Array(n + 1).fill(true);
  // 뒷자리의 약수들은 앞자리의 약수와 공통되기 때문에 굳이 계산 필요 x
  const end = parseInt(Math.sqrt(n));

  for (let i = 2; i <= end; i++) {
    // 이미 소수가 아닌 값들은 건너뜀.
    if (arr[i] === false) {
      continue;
    }
    // 초기값 j = i * 2 보다 i * i가 중복되는 값들을 계산 안함.
    // 소수가 아닌 값들 모두 체크
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] === true) {
      count++;
    }
  }

  return count;
}
