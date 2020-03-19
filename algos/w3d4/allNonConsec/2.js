/* 
  Chris
  Faisal
  Quang
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

function allNonConsecutive(nums) {
  if (nums.length < 2) {
    return [];
  }

  let results = [];

  for (var i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const current = nums[i];
    if (current - prev > 1) {
      results.push({ idx: i, num: current });
    }
  }

  return results;
}

let test1 = [1, 2, 3, 4, 6, 7, 8, 10];
let test2 = [2, 4, 5, 6];
let test3 = [2, 4, 8, 9, 10, 11, 13];

console.log(allNonConsecutive(test1));
console.log(allNonConsecutive(test2));
console.log(allNonConsecutive(test3));
