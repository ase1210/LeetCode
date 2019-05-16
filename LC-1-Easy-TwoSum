/*
1. Two Sum
Easy

10668

355

Favorite

Share
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


Accepted
1,774,033
Submissions
4,031,263
*/

// O(n^2)
// const twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

// O(n)
var twoSum = function(nums, target) {
  let pairs = {};
  for (let i = 0; i < nums.length; i++) {
    if (pairs[nums[i]] !== undefined) {
      return [pairs[nums[i]], i];
    }
    let pair = target - nums[i];
    pairs[pair] = i;
  }
};
