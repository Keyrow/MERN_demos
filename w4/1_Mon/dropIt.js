// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)

  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.

  Return an empty array if the callback never returns true
*/

const nums = [1, 4, 3, 6, 9, 15];

const callback1 = (elem) => {
  return elem > 5;
};

const callback2 = (elem) => {
  return elem > 2;
};

const callback3 = (elem) => false;

// Input: nums, callback1
// Output: [6, 9, 15]

// Input: nums, callback2
// Output: [4, 3, 6, 9, 15]

// Input: nums, callback3
// Output: []

// Time: O(n)
// Space: O(n) due to .splice creating a new array of n length at most
function dropIt(arr, callback) {
  let delCount = 0;

  for (const elem of arr) {
    const callbackResult = callback(elem);

    if (callbackResult !== true) {
      delCount++;
    } else {
      break;
    }
  }

  arr.splice(0, delCount);
  return arr;
}
