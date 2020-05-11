/* 
  Intersect Sorted Arrays (dedupe)

  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).
  
  Input: [1,2,2,2,7], [2,2,6,6,7]
  Output: [2,7]
*/

/* 
  loop through both arrays together, stopping based on shorter array
  compare value at idxA to value at idxB
  if values are the same, push into new array if new array doens't contain it
  else, whichever value is smaller, skip it (increment that index only)
*/

function intersectSortedArraysDedupe(arr1, arr2) {
  let idx1 = 0,
    idx2 = 0;

  const len1 = arr1.length,
    len2 = arr2.length,
    result = [];

  while (idx1 < len1 && idx2 < len2) {
    if (arr1[idx1] < arr2[idx2]) {
      idx1++;
    } else if (arr1[idx1] > arr2[idx2]) {
      idx2++;
    }
    // current num from both arrays are equal
    else {
      if (result[result.length - 1] !== arr1[idx1]) {
        result.push(arr1[idx1]);
      }
      idx1++;
      idx2++;
    }
  }
  return result;
}
