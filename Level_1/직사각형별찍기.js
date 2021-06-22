process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // 별5개 3세트
    let sum = '';
    
    for (let i = 0; i < a; i++) {
        sum = sum + '*';        
    }
    for (let k = 0; k < b; k++) {
        console.log(sum);
    }
});