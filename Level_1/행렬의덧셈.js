function solution(arr1, arr2) {
  var answer = [];
  // 같은 크기의 answer 만들기
  for (let i = 0; i < arr1.length; i++) {
      let newArr = [];
      for (let j = 0; j < arr1[0].length; j++) {
          newArr.push(0);
      }
      answer.push(newArr);
  }
  
  for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[0].length; j++) {
          answer[i][j] = arr1[i][j] + arr2[i][j];
      }
  }
  
  console.log(answer);
  return answer;
}