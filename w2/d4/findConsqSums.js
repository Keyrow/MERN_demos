// Interview Algo given to alumni

/* 
  You are given a list of integers. Find all the consecutive set of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const { testDriver } = require("../../helpers");

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

const testCases = [
  { arguments: [nums1, sum1], expected: expected1 },
  { arguments: [nums2, sum2], expected: expected2 },
];
testDriver([findConsqSums], testCases);

function findConsqSums(nums, sum) {}
