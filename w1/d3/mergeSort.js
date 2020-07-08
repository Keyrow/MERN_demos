/* 

  Stable

  Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case: O(n log(n)) linearithmic
    - Average case: O(n log(n)) linearithmic
    - Worst case: O(n log(n)) linearithmic

  Space: O(n) linear

  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the previously created merge function
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
*/

const arrX = [3, 5, 7];
const arrY = [1, 2, 9];
