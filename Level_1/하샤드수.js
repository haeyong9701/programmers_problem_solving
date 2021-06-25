function solution(x) {
  var answer = true;
  let xArr = String(x).split('');
  let result = xArr.reduce((acc, cur) => Number(acc) + Number(cur));
  if (x % result === 0) {
      answer = true;
  } else if (x % result > 0) {
      answer = false;
  }
  return answer;
}