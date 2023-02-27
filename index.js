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
***  Move Zeroes ***
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
var moveZeroes = function(nums) {
    
 let j = 0;
 const length = nums.length;

    for (let i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }

    for (let i = j; i < length; i++) {
        nums[i] = 0;
    }

    return nums;
    };

};


/* *******************************************************************************************************************************************************************
*** Check If N and Its Double Exist ***
Input: arr = [10,2,5,3]
Output: true 
(5*2=10)
*/
var checkIfExist = function(arr) {
    const set = new Set();
    
    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];
      
      if(set.has(currValue)) {
        return true
      }
      set.add(currValue / 2);
      set.add(currValue * 2);
    }
  
  return false;
};

/* *******************************************************************************************************************************************************************
*** Valid Mountain Array ***
Input: arr = [0,3,2,1]
Output: true

Input: arr = [3,5,5]
Output: false
*/
var validMountainArray = function(arr) {

    let left = 0,
        right = arr.length - 1;
    
    while(arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
        
        if(arr[left] < arr[left + 1]) {
            ++left;
        }
        
        if(arr[right] < arr[right - 1]) {
            --right;
        }
    }
    
    if(left !== right || left === arr.length - 1 || right === 0) {
        return false;
    }
    return true;
};
/* *******************************************************************************************************************************************************************
*** Replace Elements with Greatest Element on Right Side ***
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
*/
var replaceElements = function(arr) {
    let currentMax = arr[arr.length - 1];
    arr[arr.length - 1] = -1;

    for (let i = arr.length - 2; i >= 0; i--) {
        if (currentMax > arr[i]) {
            arr[i] = currentMax;
        } 
        else 
        {
            const temp = currentMax;
            currentMax = arr[i];
            arr[i] = temp;
        }
    }
    
    return arr;
};

/* *******************************************************************************************************************************************************************
*** Find All Numbers Disappeared in an Array ***
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
*/
var findDisappearedNumbers = function(nums) {

    nums.forEach(number => {

        const indexBasedOnThisValue = Math.abs(number) - 1

        if (nums[indexBasedOnThisValue] > 0) {
            nums[indexBasedOnThisValue] = nums[indexBasedOnThisValue] * -1
        }
    })
    
    const result = []
    
    for (let i=0; i<nums.length; i++) {
        
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }
    
    return result
    
};

/* *******************************************************************************************************************************************************************
*** Squares of a Sorted Array ***
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
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
*** Max Consecutive Ones II ***
Input: nums = [1,0,1,1,0]
Output: 4
Explanation: 
- If we flip the first zero, nums becomes [1,1,1,1,0] and we have 4 consecutive ones.
- If we flip the second zero, nums becomes [1,0,1,1,1] and we have 3 consecutive ones.
The max number of consecutive ones is 4.
*/
   var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let currMax = 0;
    let currSect = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currSect++;
        } else {
            max = Math.max(max, currMax);
            currMax = currSect;
            currSect = 0;
        }
        currMax++;
    }
    
    max = Math.max(max, currMax);
    
    return max;
};
/* *******************************************************************************************************************************************************************
*** Number of 1 Bits ***
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
*/
 
var hammingWeight = function(n) {
    return n.toString(2)
              .split("")
              .filter(char => char === "1")
              .length;    
};
/* *******************************************************************************************************************************************************************
*** Reverse Bits ***
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
*/
var reverseBits = function(n) {
   
    return parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);

};
/* *******************************************************************************************************************************************************************
*** Gray Code ***
Input: n = 2
Output: [0,1,3,2]
Explanation:
The binary representation of [0,1,3,2] is [00,01,11,10].
- 00 and 01 differ by one bit
- 01 and 11 differ by one bit
- 11 and 10 differ by one bit
- 10 and 00 differ by one bit
[0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
- 00 and 10 differ by one bit
- 10 and 11 differ by one bit
- 11 and 01 differ by one bit
- 01 and 00 differ by one bit
*/
var grayCode = function(n) {

    let arr = [0];
    for (let i=0;i<n;i++) {
        for (let j=arr.length-1;j>=0;j--) {
            arr.push(arr[j] | 1<<i);
        }
    }
    return arr;
    
};
