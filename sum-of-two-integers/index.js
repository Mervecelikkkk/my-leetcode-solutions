/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let carry;
    while((a&b)!==0)
    {
        carry=(a&b)<<1;
        a=a^b;
        b=carry;


    }
    return a^b;
};

// Time Complexity: O(1)
// Space: O(1)