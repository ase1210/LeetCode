/*
500. Keyboard Row
Easy

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]


Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

var findWords = function(words) {
  const topRow = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
  const middleRow = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]);
  const bottomRow = new Set(["z", "x", "c", "v", "b", "n", "m"]);

  const result = [];
  words.forEach(word => {
    const chars = word.split("");
    if (
      chars.every(ch => topRow.has(ch.toLowerCase())) ||
      chars.every(ch => middleRow.has(ch.toLowerCase())) ||
      chars.every(ch => bottomRow.has(ch.toLowerCase()))
    )
      result.push(word);
  });
  return result;
};
