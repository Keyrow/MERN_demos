/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the ovlerapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included

  Examples:

  Input: [1, 2], [2, 1]
  Output: []

  Input: [1, 2, 3], [4, 5, 6]
  Output: [1, 2, 3, 4, 5, 6]

  Input: [4, 1, 2, 3, 4], [1, 2, 3, 5, 5]
  Output: [4, 5]

  Bonus: Make it work when given a set of sets (array of arrays of ints)
*/

// O(n^2) due to .includes being a nested loop
function deltaOfTwoSets(setA, setB) {
  const symDiff = [];

  for (const numA of setA) {
    if (setB.includes(numA) === false && symDiff.includes(numA) === false) {
      symDiff.push(numA);
    }
  }

  for (const numB of setB) {
    if (setA.includes(numB) === false) {
      symDiff.push(numB);
    }
  }
  return symDiff;
}

// O(n)
function deltaOfTwoSetsHashTable(setA, setB) {
  const symDiffHashA = {};
  const symDiffHashB = {};
  const disjunctiveUnion = [];

  for (const numA of setA) {
    // the key becomes the num as a string, so store it as a val as well to avoid
    // having to parseInt the key when we want an int
    symDiffHashA[numA] = numA;
  }

  for (const numA of setB) {
    symDiffHashB[numA] = numA;
  }

  for (const key in symDiffHashA) {
    if (symDiffHashB.hasOwnProperty(key) === false) {
      disjunctiveUnion.push(symDiffHashA[key]);
    }
  }

  for (const key in symDiffHashB) {
    if (symDiffHashA.hasOwnProperty(key) === false) {
      disjunctiveUnion.push(symDiffHashB[key]);
    }
  }

  return disjunctiveUnion;
}

console.log(deltaOfTwoSetsHashTable([1, 2, 3], [4, 5, 6]));
