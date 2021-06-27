function solution(n) {
    var answer = 0;
    answer = String(n).split('');
    answer.sort(function(a, b) {
        return b - a;
    })
    return Number(answer.join(''));
}