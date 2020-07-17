// https://leetcode.com/problems/two-sum/
// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Bonus: Make it O(n) time
*/
const { testDriver } = require("../../helpers");

const nums1 = [2, 7, 11, 15];
const targetSum1 = 9;
const expected1 = [0, 1];
// Explanation: nums[0] + nums[1] = 2 + 7 = 9

const testCases = [{ arguments: [nums1, targetSum1], expected: expected1 }];
testDriver([sumTwo, sumTwoSpaceOptimized], testCases);

function sumTwo(nums, targetSum) {}
