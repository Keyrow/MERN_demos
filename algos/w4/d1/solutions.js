// Given a 'search for' object whose values will only be primitives (ints, strings, bools)
// and a list of objects, return any object that has the same key value pairs as the 'search for' object

// given searchFor and items
const searchFor = {
  firstName: "Bob",
  age: 31
};

const items = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 }
];

// let foundItems = findOjbects(searchFor, items);
// console.log(foundItems);
/* foundItems should be:
  [
    { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    { firstName: 'Bob', lastName: 'White', age: 31 }   
  ]
*/

function findObjects(searchObj, objects) {
  const matchingObjects = [];

  for (const obj of objects) {
    let isMatch = true;

    for (const searchKey in searchObj) {
      const searchVal = searchObj[searchKey];

      if (
        obj.hasOwnProperty(searchKey) === false ||
        searchVal !== obj[searchKey]
      ) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      matchingObjects.push(obj);
    }
  }
  return matchingObjects;
}

function findObjectsFilter(searchFor, items) {
  return items.filter(item => {
    for (const searchKey in searchFor) {
      if (
        item.hasOwnProperty(searchKey) === false ||
        item[searchKey] !== searchFor[searchKey]
      ) {
        return false;
      }
    }
    return true;
  });
}

/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
  Examples:
*/

const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
  }
];

/* 
  Input: 3, { redBeltStatus: true }, students
  Output: {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: true
  }
  Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
  Output: {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false
  }
  Input: 5, {}, students
  Output: null
*/

function findByIdAndUpdate(id, updatedDoc, docs) {
  for (const doc of docs) {
    if (doc.id === id) {
      for (const updatedKey in updatedDoc) {
        const updatedVal = updatedDoc[updatedKey];

        if (doc.hasOwnProperty(updatedKey)) {
          doc[updatedKey] = updatedVal;
        }
      }
      return doc;
    }
  }
  return null;
}
