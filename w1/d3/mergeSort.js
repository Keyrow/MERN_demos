/* 
  http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140

  Array: Merge Sort

  visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case: O(n log(n))
    - Average case: O(n log(n))
    - Worst case: O(n log(n))

  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create merge sort function to sort the provided array
      - split the array in half and recursively merge the halves using the previously created merge function
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array

  useful methods

  - arr.concat(array2, array3, ..., arrayX)
    - combines array arg(s) with the array that concat is called on
    - returns new arr w/o mutating originals

  - arr.slice([begin[, end]])
    - returns a copy of the specified portion of the array
    - end is exclusive
      - if omitted, slices from provided 'begin' to end of array
*/
