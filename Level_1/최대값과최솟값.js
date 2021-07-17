function solution(s) {
    let newArr = s.split(' ');
    let largeNum = newArr[0];
    let smallNum = newArr[0];
    for (let i = 1; i < newArr.length; i++) {
        if (Number(largeNum) <= Number(newArr[i])) {
            largeNum = newArr[i];
        } else if (Number(smallNum) >= Number(newArr[i])) {
            smallNum = newArr[i]
        }
    }
    // console.log(Math.max(...newArr))
    return smallNum + ' ' + largeNum;
}