/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/* 
  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1]

  Easier version:
    return an array of the two numbers that add up to the target num
*/

// O(n) time, O(n) space
function sumTwo(arr, sum) {
  const numsAndIndices = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i],
      diff = sum - num;

    if (numsAndIndices.hasOwnProperty(diff)) {
      return [numsAndIndices[diff], i];
    }
    numsAndIndices[num] = i;
  }
}

// O(n^2) time, O(1) space
function sumTwoSpaceOptimized(nums, target) {
  const indicies = [];

  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        indicies.push(i, j);
        break;
      }
    }
  }

  return indicies;
}
