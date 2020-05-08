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
