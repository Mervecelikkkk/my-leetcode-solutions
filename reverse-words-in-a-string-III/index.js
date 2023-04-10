/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    s=s.split("").reverse().join("").split(" ").reverse().join(" ");
    return s;
  
};