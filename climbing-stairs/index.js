
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    const memo = {};
    function climb(n) {
      if (n === 0) return 1;
      if (n < 0) return 0;
      if (memo[n]) return memo[n];
      memo[n] = climb(n - 1) + climb(n - 2);
      return memo[n];
    }
    return climb(n);
  };

  // Time Complexity: O(n)
  // Space Complexity: O(1)