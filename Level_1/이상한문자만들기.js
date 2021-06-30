function solution(s) {
    var answer = '';
    // 띄어쓰기가 나오면 예외케이스
    let newArr = s.split(' ');
    
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            if (j % 2 === 0) {
                answer = answer + newArr[i][j].toUpperCase();
            } else if (j % 2 === 1) {
                answer = answer + newArr[i][j].toLowerCase();
            }
        }
        if (i !== newArr.length - 1) {
            answer += ' ';
        }
    }
    return answer;
}