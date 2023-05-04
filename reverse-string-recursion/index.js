
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    // one points to head position, the other points to tail position
    let [left, right] = [0, s.length-1];
    
    // reverse string by two pointers
    while( left < right ){
        [ s[left], s[right] ] = [ s[right], s[left] ];
        
        left += 1;
        right -= 1;
    }
     
    return;
};

// Time Complexity: O(n)
// Space Complexity: O(1)