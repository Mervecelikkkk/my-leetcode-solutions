
/**
 * @param {number[]} nums
 * @return {number}
 */

// approach 1:
// Time Complexitiy: O(n)
// SpaceComplexity: O(1)

var dominantIndex = function(nums) {
    let first = 0;
    let second = 0;
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > first) {
        second = first;
        first = nums[i];
        maxIndex = i;
      } else if (nums[i] > second) {
        second = nums[i];
      }
    }
    return first >= second * 2 ? maxIndex : -1;
  };

// approach 2:
// Time Complexitiy: O(nlogn)

var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);
    nums.sort((a,b) => a - b);
    if(max < nums[nums.length -2] * 2) {
        return -1;
    }
     return maxIndex;
 };