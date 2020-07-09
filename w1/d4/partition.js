/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition

  Steps:

  1. Pick an number out of the arr to be your pivot value
    - usually the middle number or the last number

  2. Partition the array IN PLACE such that all values less than the pivot value are to the left of it
  and all values greater than the pivot value are to the right (not perfectly sorted)

  3. return: new idx of the pivot value or the index where the left section of smaller items ends
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
