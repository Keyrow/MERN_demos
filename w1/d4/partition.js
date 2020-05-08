// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
/* 
  Array: Partition
  
  Assume you have access to a swap function or practice using array destructure notation to swap

  Params: arr, left, right
    - for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition

  Steps:

  1. Pick an item out of the arr to be your pivot value
    - usually the middle item or the last item

  2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
  and all values greater than the pivot are to the right (not perfectly sorted)

  3. return: new idx of the pivot value
*/

// src=https://itnext.io/a-sort-of-quick-guide-to-quicksort-and-hoares-partitioning-scheme-in-javascript-7792112c6d1
// Hoare’s partitioning scheme, named for Sir Charles Antony Richard Hoare, who developed the quicksort algorithm.
// does fewer swaps than Lomuto
// NOTE that in this scheme, the pivot’s final location is not necessarily at the index that was returned (some edge cases)

//    [11, 8, 14, 3, 6, 2, 7] => middle is chosen as pivot: 3
// => [2, 8, 14, 3, 6, 11, 7] 11 & 2 swapped
// => [2, 3, 14, 8, 6, 11, 7] 3 & 8 swapped
function partitionHoare(arr, left = 0, right = arr.length - 1) {
  const pivot = arr[Math.floor((left + right) / 2)];
  // console.log("pivot: ", pivot);

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      // swap left and right because we found something left of pivot that is larger
      // and something right of pivot that is small, so they need to swap
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

module.exports = partitionHoare;
