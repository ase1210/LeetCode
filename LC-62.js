/*
62. Unique Paths
Medium

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
Accepted
290,524
Submissions
609,337
*/

var uniquePaths = function(m, n) {
  const table = new Array(m).fill(new Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        table[i][j] = 1;
      } else if (j === 0) {
        table[i][j] = 1;
      } else {
        table[i][j] = table[i - 1][j] + table[i][j - 1];
      }
    }
  }
  return table[m - 1][n - 1];
};
