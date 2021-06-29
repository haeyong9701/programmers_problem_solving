function solution(n) {
    var answer = [];
    let newArr = String(n).split('');
    while (newArr.length > 0) {
        answer.push(Number(newArr[newArr.length - 1]));
        newArr.pop();
    }
    return answer;
}