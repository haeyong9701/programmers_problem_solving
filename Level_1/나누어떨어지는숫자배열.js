function solution(arr, divisor) {
    var answer = [];
    // sort로 정리
    let newArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] % divisor === 0) {
            answer.push(newArr[i]);
        }
    }
    if (answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}