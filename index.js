/* 
***Squares of a Sorted Array***
 Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. 
 Input: nums = [-7,-3,2,3,11]
 Output: [4,9,9,49,121]
 Time Complexity: BigO(n)
*/
var sortedSquares = function(nums) {
	let left = 0;
	let right = nums.length - 1;
	const result = new Array(nums.length);
	let resultIndex = result.length - 1;

	while (left <= right) {
		if (Math.abs(nums[left]) > Math.abs(nums[right])) {
			result[resultIndex] = nums[left] * nums[left];
			left++;
		} else {
			result[resultIndex] = nums[right] * nums[right];
			right--;
		}
		resultIndex--;
	}

	return result;
};
