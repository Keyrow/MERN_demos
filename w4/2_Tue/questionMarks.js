// https://coderbyte.com/editor/Questions%20Marks:JavaScript

/* 
  Given a string, check if there are exactly 3 question marks
  between two ints that add up to 10
    - ints will be single digit only

  Input:"aa6?9"
  Output:"false"

  Input:"acc?7??sss?3rr1??????5"
  Output:"true"

  Input: "?3?d?dad?7??????3"
  Output: "true"

  Input: "7??????3"
  Output: "false"
    - too many question marks

  Helpful functions:
  parseInt(char) => NaN or an int
  isNaN(x) => true or false
    - need to use isNaN if you want to know if something is NaN
    - the number 0 is falsy
    - NaN is falsy
*/

// Time: O(n)
// Space: O(1)
function qMarks(str) {
  let prevInt = 0;
  let qMarkCnt = 0;

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "?") {
      ++qMarkCnt;
    } else {
      const parsed = parseInt(str[i]);

      // not not a number means it's a number
      if (!isNaN(parsed)) {
        if (qMarkCnt === 3 && prevInt + parsed === 10) {
          return true;
        } else {
          prevInt = parsed;
          qMarkCnt = 0;
        }
      }
    }
  }
  return false;
}
