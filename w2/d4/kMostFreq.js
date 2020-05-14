/* 
  BONUS ALGO

  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution

  These example inputs are sorted for readability, but the input is not guaranteed to be sorted and the output does not need to be in any specific order
  
  Input: [1, 1, 1, 2, 2, 3], k = 2
  Output: [1, 2]
  Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

  Input: [0, 0, 0, 2, 2, 3], k = 1
  Output: [0]
  Explanation: k being 1 means return the single most frequent element

  Input: [1, 1, 2, 2, 3, 3], k = 3
  Output: [1, 2, 3]
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints.

  HARD Bonus: Make it O(n) time
*/
