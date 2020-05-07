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
