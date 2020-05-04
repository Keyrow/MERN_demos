/* 
  http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140

  Array: Bubble Sort

  Time Complexity
    - Best: n when array is already sorted
    - Average: O(n^2)
    - Worst: O(n^2) when the array is reverse sorted

  For review, create a function that uses BubbleSort to sort an unsorted array in-place.

  For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

function bubbleSort(nums) {
  let isSorted = false;

  while (isSorted === false) {
    isSorted = true;

    for (let i = 0; i < nums.length - 1; i++) {
      const j = i + 1;

      if (nums[i] > nums[j]) {
        isSorted = false;
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}
