function solution(s){
    let newStr = s.toLowerCase();
    let countP = 0;
    let countY = 0;
    
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === 'p') {
            countP++;
        } else if (newStr[i] === 'y') {
            countY++;
        }
    }
    return countP === countY;
}