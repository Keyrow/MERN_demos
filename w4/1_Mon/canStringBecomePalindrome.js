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

  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

// Time: O(n)
// Space: O(n)
// This same approach can be done with an array, using .indexOf instead of .hasOwnProperty and .splice instead of delete
// but it's much slower that way because .indexOf and .splice would be a nested inside a loop
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
