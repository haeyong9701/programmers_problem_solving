function solution(s, n) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                   'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newArr = s.split('');
    let result = [];
    
    // newArr.lenth에 대해 
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === ' ') {
            result.push(' ');
            continue;
        }
        for (let j = 0; j < alphabet.length; j++) {
            let nj = j + n;
            
            if (nj >= 26) {
              nj = nj - 26;
            }
            
            // 대문자일떄
            if (newArr[i] === alphabet[j].toUpperCase()) {
                result.push(alphabet[nj].toUpperCase());
            }
            
            // 소문자일때
            if (newArr[i] === alphabet[j]) {
                result.push(alphabet[nj])
            }
        }
    }
    return result.join('');

}