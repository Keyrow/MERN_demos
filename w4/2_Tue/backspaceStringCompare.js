/* 
  https://leetcode.com/problems/backspace-string-compare/

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  Examples:

  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/

function backspaceCompareStack(S, T) {
  const sBackspaced = getBackspacedStack(S);
  const tBackspaced = getBackspacedStack(T);

  if (sBackspaced.length !== tBackspaced.length) {
    return false;
  }

  for (let i = 0; i < sBackspaced.length; ++i) {
    if (sBackspaced[i] !== tBackspaced[i]) {
      return false;
    }
  }
  return true;
}

function getBackspacedStack(str) {
  const backspacedStack = [];

  for (const char of str) {
    if (char !== "#") {
      backspacedStack.push(char);
    } else if (backspacedStack.length > 0) {
      backspacedStack.pop();
    }
  }

  return backspacedStack;
}

function backspaceCompare(S, T) {
  let sBackspaced = processBackspaces(S);
  let tBackspaced = processBackspaces(T);

  if (sBackspaced === tBackspaced) {
    return true;
  } else {
    return false;
  }
}

function processBackspaces(s) {
  let backspaceCount = 0;
  let newS = "";

  for (let i = s.length - 1; i >= 0; --i) {
    let isBackspace = s[i] === "#";

    if (backspaceCount > 0 && !isBackspace) {
      backspaceCount--;
    } else if (isBackspace) {
      backspaceCount++;
    } else {
      newS = s[i] + newS;
    }
  }
  return newS;
}

const s1 = "aaaaaaaaabaa";
const s2 = "aaaaaaaaaaaa";
