/**
 * @param {number[]} nums
 * @return {number}
 */

const pivotIndex =(nums)=>{
    let rightSum=0;
    let leftSum=0;

    nums.forEach((e)=>(rightSum+=e));

    for(let i=0;i<=nums.length-1;i++)
    {
        let curr=nums[i];
        rightSum-=curr;

        if(leftSum===rightSum)
        return i;
        leftSum+=curr;
    }
    return -1;

};

// Time Complexity: O(n)
// Space Complexity: O(1)



