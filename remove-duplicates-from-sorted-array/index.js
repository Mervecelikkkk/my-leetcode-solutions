/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    if (nums.length === 0) return 0;
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != nums[i+1]){
            nums[j++] = nums[i];
        }
    };
    return j;
};

// Time Complexity: O(n)
// Space Complexity: O(1)