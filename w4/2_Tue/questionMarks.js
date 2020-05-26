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
