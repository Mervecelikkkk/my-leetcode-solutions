
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let prev1 = 0, prev2 = 1, fibNum = 0;
    
    for (let i = 2; i <= n; i++) {
        
        fibNum = prev1 + prev2;
        prev1 = prev2;
        prev2 = fibNum;
    }
    
    return fibNum;
    
};

// Time Complexity: O(n)
// Space Complexity: O(1)