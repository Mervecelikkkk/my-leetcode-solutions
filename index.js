/* *******************************************************************************************************************************************************************
*** Squares of a Sorted Array ***
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

/* *******************************************************************************************************************************************************************
*** Duplicate Zeros ***
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Input: arr = [1,0,2,3,0,4,5,0]
Output:      [1,0,0,2,3,0,0,4]
*/
var duplicateZeros = function(arr) {
for(let i = 0; i<arr.length;i++){
    if(arr[i]===0){
        arr.pop(); 
        arr.splice(i+1,0,0);
        i++
    }
}
return arr; 

};

/* *******************************************************************************************************************************************************************
*** Merge Sorted Array ***
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            k--;
            j--;
        } else {
            nums1[k] = nums1[i];
            k--;
            i--;
        }
    }
    
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    
    while (i >= 0) {
        nums1[k] = nums1[i];
        k--;
        i--;
    }
    
};
/* *******************************************************************************************************************************************************************
*** Remove Element ***
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
*/

var removeElement = function(nums, val) {
    var count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[count]=nums[i];
            count++
        }
    }
    return count; 
    
};

/* *******************************************************************************************************************************************************************
*** Remove Duplicates from Sorted Array ***
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
*/
var removeDuplicates = function(nums) {
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != nums[i+1]){
            nums[j++] = nums[i];
        }
    };
    return j;
};


/* *******************************************************************************************************************************************************************
***  ***
*/
