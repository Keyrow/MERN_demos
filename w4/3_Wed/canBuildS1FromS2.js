/* 

  Given two strings,
  return true if the first string can be built from the letters in the 2nd string
  Ignore case

  .indexOf will only tell you if the letter is found one time
*/

// Inputs
const StrA1 = "Hello World";
const StrB1 = "lloeh wordl";
// Output: true

// Inputs
const StrA2 = "Hey";
const StrB2 = "hello";
// Output: false, second string is missing a "y"

// Inputs
const StrA3 = "hello";
const StrB3 = "helo";
// Output: false, second string doesn't have enough "l" letters

// Inputs
const StrA4 = "hello";
const StrB4 = "lllheo";
// Output: true

// Time: O(n + m) -> O(n) linear, n = neededStr.length, m = availableStr.length
// Space: O(m) -> O(n)
function canBuildS1FromS2(neededStr, availableStr) {
  const availableCharsFreq = {};

  for (const availableChar of availableStr) {
    const availableCharLower = availableChar.toLowerCase();

    if (availableCharsFreq.hasOwnProperty(availableCharLower) === false) {
      availableCharsFreq[availableCharLower] = 1;
    } else {
      availableCharsFreq[availableCharLower]++;
    }
  }

  for (const neededChar of neededStr) {
    const neededCharLower = neededChar.toLowerCase();

    if (availableCharsFreq.hasOwnProperty(neededCharLower) === false) {
      return false;
    } else if (availableCharsFreq[neededCharLower] === 0) {
      // not enough of this char available
      return false;
    } else {
      availableCharsFreq[neededCharLower]--;
    }
  }
  return true;
}
