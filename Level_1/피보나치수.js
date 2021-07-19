function solution(n) {
  
    let dp = [];
    
    for (let i = 0; i <= n; i++) {
        dp.push(0);
    }
    
    dp[1] = 1;
    
    for (let j = 2; j <= n; j++) {
        dp[j] = (dp[j - 1] + dp[j - 2]) % 1234567 ;
    }
    return dp[n];
  
}