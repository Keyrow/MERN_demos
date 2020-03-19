/* 
  Elena
  Gaku
  Linh
*/

/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.

  Input: [1,2,3,4,6,7,8,10]
    - 6 and 10 are the only non-consecutive numbers
  Output: [
  {i: 4, n:6},
  {i: 7, n:10}
]
*/

/*
nums = [1,2,3,4,6,7,8,10]
Output: [
  {i: 4, n:6},
  {i: 7, n:10}
]
*/
function allNonConsecutive(nums) {
  // start answer array [objects]
  let answer = [];

  // IF empty array -> RETURN empty array
  if (nums.length === 0) {
    return answer;
  }
  // -> loop over the given array
  for (let i = 0; i < nums.length; i++) {
    // if NON consecutive
    //  (current val - 1 != val of index to the left) OR index is NOT 0
    rightNum = nums[i];
    leftNum = nums[i - 1];
    if (rightNum - 1 != leftNum && i !== 0) {
      // add to answer in object form
      answer.push({ i, n: nums[i] });
    }
    // else skip
  }

  // return answer array [objects]
  return answer;
}

function allNonConsecutive2(nums) {}
