/* 
  Aldo
  Alex
  Eddy
  Jason
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
  let outputArray = [];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] != nums[i] - 1) {
      newObj = { i: i, n: nums[i] };
      outputArray.push(newObj);
    }
  }
  return outputArray;
}

nums1 = [1, 2, 4, 5, 7, 8];
nums2 = [2, 4, 6, 7];

allNonConsecutive(nums1);
allNonConsecutive(nums2);
