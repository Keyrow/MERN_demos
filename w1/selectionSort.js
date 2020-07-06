/*   
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  https://visualgo.net/en/sorting

  Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1. This continues until all values are sorted.

  Time Complexity
    - Best: O(n^2)
    - Average: O(n^2)
    - Worst: O(n^2)

  Space: O(1) constant

  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example, you run selection sort for 10 iterations only to display the first 10 sorted items

*/
