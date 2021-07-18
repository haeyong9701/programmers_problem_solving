function solution(strings, n) {
    let result = [];
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }
    strings.sort();
    
    for (let j = 0; j < strings.length; j++) {
        result.push(strings[j].slice(1))
    }
    return result;
}