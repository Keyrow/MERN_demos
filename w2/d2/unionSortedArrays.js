/* 
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurences from one array.
*/

const { testDriver } = require("../../helpers");

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

const testCases = [{ arguments: [numsA, numsB], expected: expected }];
testDriver([orderedMultisetUnion], testCases);

function orderedMultisetUnion(params) {}
