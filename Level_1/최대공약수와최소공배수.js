function solution(n, m) {
  var answer;
  // 최소공배수, 최대공약수 나눠서 생각하기.
  let largeNum = Math.max(n, m);
  let smallNum = Math.min(n, m);
  
  let GCD = 0; // 최대공약수
  let temp = 0; // temp는 임시저장소
  // large를 small으로 나눠서 나머지가 0이 된다면, 최대공약수는 small이 된다.
  // 나머지가 0이 아닐 떄, 최대공약수는 나머지가 0이 될때까지 해야된다. (while문 사용)
  while (largeNum % smallNum > 0) {
      temp = largeNum % smallNum; // 1
      largeNum = smallNum; // 2
      smallNum = temp; // 1
  }
  // 최소공배수는 n과 m을 곱해서 최대공약수로 나눈 값이 최소공배수가 된다.
  GCD = smallNum;
  answer = [GCD, parseInt(n * m / GCD)];
  return answer;
}