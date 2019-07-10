/*
283. Move Zeroes
Easy

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
Accepted
485,947
Submissions
889,614
*/

const moveZeroes = function(nums) {
  let zeroIdx = nums.indexOf(0);

  if (zeroIdx === -1) return nums;

  for (let i = zeroIdx + 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[zeroIdx]] = [nums[zeroIdx], nums[i]];
      zeroIdx++;
    }
  }
  return nums;
};
