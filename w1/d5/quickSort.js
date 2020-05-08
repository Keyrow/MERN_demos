/* 
  Array: Quick Sort

  Create a function that uses yesterday’s partition to fully sort an array in-place.

  Time Complexity
    - Best: O(n log(n))
    - Average: O(n log(n))
    - Worst: O(n^2)
  
*/

// visualized https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

/* 
  Steps:
    - start by partitioning the full array (use the previously built partition algo)
    - then partition the left side of the array (left of partition idx) and the right side (right of partition idx), recursively
*/

const partitionHoare = require("../d4/partition");

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case to stop recursion
  if (left >= right) {
    return;
  }

  const partitionIdx = partitionHoare(arr, left, right);

  quickSort(arr, left, partitionIdx - 1); // left of pivot
  quickSort(arr, partitionIdx, right); // right of pivot

  return arr;
}

const a = [11, 8, 14, 3, 6, 2, 7];
const b = [1, 17, 12, 3, 9, 13, 21, 4, 27];
console.log(b.join(", "));
console.log(quickSort(b).join(", "));
