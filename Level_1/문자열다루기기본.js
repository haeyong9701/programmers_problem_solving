function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    // s가 0000    
    
    for (let el of s.split('')) {
        if ((Number.isNaN(Number(el)))) {
            return false;
        }
    }
    return true;
}