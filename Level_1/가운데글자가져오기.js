function solution(s) {
  var answer = '';
  // 단어의 길이가 홀수이면, 글자의 길이를 2로 나누고 그값을 내림처리
  // s[홀수]
  // 단어의 길이가 짝수이면, 
  let index = Math.floor(s.length / 2);;
  if (s.length % 2 === 1) {
      answer = s[index];
  } else if (s.length % 2 === 0) {
      answer = s[index - 1] + s[index];
  }
  return answer;
}