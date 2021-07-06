function solution(arr)
{
    var answer = [];
    // index와 같다면
    // 0번쨰 1번쨰 다르면 서로 푸시해주기
    // [1,1,3,3,0,1,1]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            answer.push(arr[i - 1]);
        }
    }
    answer.push(arr[arr.length - 1])
    return answer;
}