/*
3. Longest Substring Without Repeating Characters
Medium

5465

300

Favorite

Share
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
Accepted
914,889
Submissions
3,229,870
*/

var lengthOfLongestSubstring = function(s) {
  let longestSub = 0;
  for (let i = 0; i < s.length; i++) {
    let chars = new Set();
    let j = i;
    while (!chars.has(s[j]) && j < s.length) {
      chars.add(s[j]);
      j++;
    }
    if (chars.size > longestSub) longestSub = chars.size;
  }
  return longestSub;
};

//faster than 29% of submissions in JS
