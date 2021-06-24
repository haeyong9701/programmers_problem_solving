function solution(nums) {
  var answer = 0;
  let newArr = Array.from(new Set(nums));
  if (newArr.length <= nums.length / 2) {
      answer = newArr.length;
  } else if (newArr.length > nums.length / 2) {
      answer = nums.length / 2;
  }
  
  return answer;
}