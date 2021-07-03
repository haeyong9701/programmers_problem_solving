function solution(n) {
    var answer = 0;
    // n이 121이면 11의 제곱 
    // 11 + 1의 제곱을 리턴
    
    answer = Math.sqrt(n);
    
    // if (answer % 1 !== 0) {
    //     return -1;
    // }
    // answer = Math.pow(answer + 1, 2);
    return (answer % 1 === 0) ? Math.pow(answer + 1, 2) : -1;
}