function solution(phone_number) {
  var answer = '';
  // 처음에 뒷자리 4개제외한 것을 slice한다.
  // for문으로 slice한 것을 모두 별로 바꾸게 한다.
  // 그리고뒷자리 4개랑 합쳐서 리턴
  let firstNum = phone_number.slice(0, phone_number.length - 4);
  let lastNum = phone_number.slice(-4);
  
  for (let i = 0; i < firstNum.length; i++) {
      answer += '*';
  }
  
  answer += lastNum;
  
  return answer;
}