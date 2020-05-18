/* 
Given a search criteria object whose values will only be primitives (ints, strings, bools)
and a list of objects,

return any object that matches all the key value pairs in the search criteria object

Bonus: write a 2nd solution using build in methods to practice functional programming
*/

// given searchCriteria and items
const searchCriteria = {
  firstName: "Bob",
  age: 31,
};

const items = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

let foundItems = findObjects(searchCriteria, items);
console.log(foundItems);
/* foundItems should be:
  [
    { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    { firstName: 'Bob', lastName: 'White', age: 31 }   
  ]
*/

function findObjects(criteria, collection) {
  const foundDocuments = [];

  for (const doc of collection) {
    let isMatch = true;

    for (const searchKey in criteria) {
      const searchVal = criteria[searchKey];

      if (
        doc.hasOwnProperty(searchKey) === false ||
        doc[searchKey] !== searchVal
      ) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      foundDocuments.push(doc);
    }
  }
  return foundDocuments;
}

function findObjectsFilter(criteria, collection) {
  return collection.filter((doc) => {
    for (const searchKey in criteria) {
      if (
        !doc.hasOwnProperty(searchKey) ||
        doc[searchKey] !== criteria[searchKey]
      ) {
        return false;
      }
    }
    return true;
  });
}
