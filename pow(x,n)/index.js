
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    if(n===0) return 1;
    if(n===1) return x;
    if(n<0) { n=-n; x=1/x }
      
      let temp=myPow(x, Math.floor(n/2));
      if(n%2===0) {
          return temp*temp;
      }
          else  {
              return temp*temp*x;
          }
      
      
      
   
  };

  //Time Complexity: O(logn)
  //Space Complexity: O(logn)