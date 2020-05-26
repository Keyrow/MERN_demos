/* 
  Given to me (Neil) in an interview

  Given a string
  return whether or not it's possible for make a palindrome out of the strings characters

  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "";
// Output false

const str2 = "a";
// Output true

const str3 = "ddaa";
// Output: true
// Explanation: "daad" or "adda"

const str4 = "dda";
// Output: true
// Explanation: "dad"

const str5 = "aaadd";
// Output: true
// Explanation: "daaad"

const str6 = "abc";
// Output: false

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.

*/

// Time: O(n)
// Space: O(n)
function canStrBecomePalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const leftoverCharsMap = {};

  for (const char of str) {
    if (leftoverCharsMap.hasOwnProperty(char)) {
      delete leftoverCharsMap[char];
    } else {
      leftoverCharsMap[char] = true;
    }
  }
  return Object.keys(leftoverCharsMap).length <= 1 ? true : false;
}

// the loop over the objec at the end is like the Object.keys loop above, except the above sln already
// deleted keys that could be cancelled out, so there are less iterations required in above sln
// Time: O(n)
// Space: O(n)
function canBecomePalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const charFrequencies = {};
  let oddFreqCount = 0;
  let isOddLen = str.length % 2 !== 0;

  for (const char of str) {
    if (!charFrequencies.hasOwnProperty(char)) {
      charFrequencies[char] = 1;
    } else {
      charFrequencies[char]++;
    }
  }

  for (const key in charFrequencies) {
    const charFreq = charFrequencies[key];

    // if odd occurrences
    if (charFreq % 2 !== 0) {
      oddFreqCount++;

      if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
        return false;
      }
    }
  }
  return true;
}
