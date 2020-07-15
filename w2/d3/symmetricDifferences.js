/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the ovlerapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)

  Venn Diagram Visualization: https://res.cloudinary.com/practicaldev/image/fetch/s--Kuq7OH5V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/eq8zrfkbs9jntiimwjk9.png
*/

const { testDriver } = require("../../helpers");

const test1SetA = [1, 2];
const test1SetB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2SetA = [1, 2, 3];
const test2SetB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3SetA = [4, 1, 2, 3, 4];
const test3SetB = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const testCases = [
  { arguments: [test1SetA, test1SetB], expected: expected1 },
  { arguments: [test2SetA, test2SetB], expected: expected2 },
  { arguments: [test3SetA, test3SetB], expected: expected3 },
];
testDriver([deltaOfTwoSets], testCases);

function deltaOfTwoSets(setA, setB) {}
