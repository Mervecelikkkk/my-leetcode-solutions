/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix=function(strs) {
    if(strs===0) return ""
    let prefix=strs[0];
    for(let i=0;i<strs.length;i++) {
        while(strs[i].indexOf(prefix)!==0) {
            prefix=prefix.substring(0, prefix.length-1);
            if(prefix=== "") return "";
        }
    }
    return prefix;

};

// Time Complexity: O(m*n)
// Space Complexity: O(1)


