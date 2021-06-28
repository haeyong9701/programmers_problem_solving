function solution(arr) {
    // min 구하고 인덱스 구하고 splice
    let min = arr[0];
    if (arr.length <= 1) {
        return [-1];
    }
    
    for (let el of arr) {
        if (el < min) {
            min = el;
        }  
    }
    let minIdx = arr.indexOf(min);
    arr.splice(minIdx, 1);
    
    return arr;
}