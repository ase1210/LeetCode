/*
1054. Distant Barcodes
Medium

In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal.  You may return any answer, and it is guaranteed an answer exists.

Example 1:

Input: [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
Example 2:

Input: [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,2,1,2,1]


Note:

1 <= barcodes.length <= 10000
1 <= barcodes[i] <= 10000

*/

const rearrangeBarcodes = function(barcodes) {
  const counter = {};
  barcodes.forEach(barcode => {
    counter[barcode] = counter[barcode] || 0;
    counter[barcode]++;
  });

  const orderedCodes = Object.keys(counter)
    .map(key => {
      return [key, counter[key]];
    })
    .sort((a, b) => b[1] - a[1]);

  let code = orderedCodes.shift();

  for (let i = 0; i < barcodes.length; i += 2) {
    if (code[1] === 0) {
      code = orderedCodes.shift();
    }
    barcodes[i] = code[0];
    code[1]--;
  }

  for (let j = 1; j < barcodes.length; j += 2) {
    if (code[1] === 0) {
      code = orderedCodes.shift();
    }
    barcodes[j] = code[0];
    code[1]--;
  }

  return barcodes;
};
