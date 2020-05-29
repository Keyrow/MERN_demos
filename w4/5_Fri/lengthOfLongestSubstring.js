/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const test1 = "abcabcbb";
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const test2 = "bbbbb";
// Output: 1
// Explanation: The answer is "b", with the length of 1.

const test3 = "pwwkew";
// Output: 3
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const test4 = "dvadf";
// Output: 4
// Explanation: "vadf"

// Time: O(n^3) cubed, .includes is the 2nd nested loop
// Space: O(n)
function lenOfLongestSubStr(str) {
  let maxLen = 0;
  let subStr = "";

  for (let i = 0; i < str.length; i++) {
    subStr = "";

    // if remaining chars left are fewer than current maxLen
    // it's not possible for there to be a longer subStr
    if (str.length - i < maxLen) {
      return maxLen;
    }

    for (let j = i; j < str.length; j++) {
      if (subStr.includes(str[j])) {
        break;
      } else {
        subStr += str[j];
      }
    }

    if (subStr.length > maxLen) {
      maxLen = subStr.length;
    }
  }
  return maxLen;
}

// Time: O(n^2)
// Time: O(n)
function lenOfLongestSubStr2(str) {
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    let seen = {};

    // if remaining chars left are fewer than current maxLen
    // it's not possible for there to be a longer subStr
    if (str.length - i < maxLen) {
      return maxLen;
    }

    for (let j = i; j < str.length; j++) {
      let char = str[j];

      if (seen.hasOwnProperty(char)) {
        break;
      } else {
        seen[char] = true;
        count++;
      }
    }

    if (count > maxLen) {
      maxLen = count;
    }
  }
  return maxLen;
}
