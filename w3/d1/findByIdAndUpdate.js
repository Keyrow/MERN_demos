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
    redBeltStatus: false,
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false,
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false,
  },
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
  Explanation: In this implementation
    randomKey was not added because it is not an existing key that can be updated

  Input: 5, {}, students
  Output: null
*/

function findByIdAndUpdate(id, updatedVals, collection) {
  for (const doc of collection) {
    if (doc.id === id) {
      for (const keyToUpdate in updatedVals) {
        const newVal = updatedVals[keyToUpdate];

        if (doc.hasOwnProperty(keyToUpdate)) {
          doc[keyToUpdate] = newVal;
        }
      }
      return doc;
    }
  }
  return null;
}