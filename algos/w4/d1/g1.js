// Alex & Chris

// 1. findObjects
// Given a 'search for' object whose values will only be primitives (ints, strings, bools)
// and a list of objects, return any object that has the same key value pairs as the 'search for' object

// given both of these
const searchFor = {
  firstName: "Bob",
  age: 31
};

const items = [
  {
    firstName: "Bob",
    lastName: "Bobbert",
    age: 31
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 25
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    age: 27
  },
  {
    firstName: "Bob",
    lastName: "White",
    age: 31
  }
];

function findObjects(obj, items) {
  // for each item in items, do they match all k,v pairs in obj
  let matches = [];
  let objKeyCount = Object.keys(obj).length;

  //looping through the array of items
  for (let i = 0; i < items.length; ++i) {
    let count = 0;

    for ([key, value] of Object.entries(obj)) {
      // check if searchFor[key] exists in item[i]
      if (!items[i].hasOwnProperty(key)) {
        break;
      } else if (items[i][key] !== value) {
        console.log("else if: ");
        break;
      }
      count++;
      if (count === objKeyCount) {
        matches.push(items[i]);
      }
    }
  }
  return matches;
}

findObjects(searchFor, items);

// return: [
//   {
//     firstName: "Bob",
//     lastName: "Bobbert",
//     age: 31,
//   },
//   {
//     firstName: "Bob",
//     lastName: "White",
//     age: 31,
//   }
// ];

// 2. findByIdAndUpdate

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
