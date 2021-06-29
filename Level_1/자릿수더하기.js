function solution(n)
{
    var answer = 0;
    for (let i = 0; i < String(n).length; i++) {
        answer = answer + Number(String(n)[i]); // '01' = 0 + '1'
    }    
    return answer;
}