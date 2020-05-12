/* 
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurences from one array.

  Input: [1,2,2,2,7], [2,2,6,6,7]
  Output: [1,2,2,2,6,6,7]
  Explanation: 2 occurs at most in ONE set, three times, so 2 is included three times
    6 occurs at most two times in one set, so 6 is included 2 times, 7 occurs at most 1 time, so one 7 is included
*/
