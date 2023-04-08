
var rotate = function(nums, k) {
    k %= nums.length; // if k is greater than length of nums, get the remainder
    reverse(nums, 0, nums.length - 1); // reverse the whole array
    reverse(nums, 0, k - 1); // reverse the first k elements
    reverse(nums, k, nums.length - 1); // reverse the remaining elements
};

var reverse = function(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
};

// Time Complexity: O(n)
// Space Complexity: O(1)