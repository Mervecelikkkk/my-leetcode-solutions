/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    s = s.split(" ").reverse().join(" ").trim().replace(/\s{2,}/g,' ');
    return s;

};