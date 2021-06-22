function solution(x, n) {
  var answer = [];
  // x가 2, 2씩 증가, 5번 반복, for문
  // 2 4 6 8 10
  let sum = 0;
  for (let i = 0; i < n; i++) { 
      sum = sum + x;
      answer.push(sum);
  }
  return answer;
}