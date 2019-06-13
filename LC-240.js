/*
240. Search a 2D Matrix II
Medium

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.

Accepted
182,536
Submissions
446,157
*/

var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;
  if (matrix[0].length === 0) return false;
  if (matrix[0][0] > target) return false;
  if (matrix[matrix.length - 1][matrix[0].length - 1] < target) return false;

  let i = 0;
  while (i < matrix.length && matrix[i][0] <= target) {
    // console.log(i, matrix.length)
    if (matrix[i][0] === target) return true;
    i++;
  }
  i--;

  let j = 0;

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] === target) {
      return true;
    } else if (j + 1 < matrix[0].length && matrix[i][j + 1] > target) {
      i--;
    } else {
      j++;
    }
  }
  return false;
};
