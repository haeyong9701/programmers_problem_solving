function solution(n) {
    let answer = '';
    let str1 = '수';
    let str2 = '박';
    
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            answer = answer + str1;
        } else if (i % 2 === 1) {
            answer = answer + str2;
        }
    }
    return answer;
    // 1이면 수 // 2 수박 // 3 수박수 // 4 수박수박 // 5 수박수박수 // 
}