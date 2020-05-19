/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]

    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      isInfected[bool]

    return a new array of the names of people who are at high risk of infection

    A person is at high risk of catching the virus if they are:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing who is infected

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
  firstName: "Friend",
  lastName: "One",
  isSocialDistancing: false,
  isInfected: true,
};

const friend2 = {
  firstName: "Friend",
  lastName: "Two",
  isSocialDistancing: false,
  isInfected: true,
};

const friend3 = {
  firstName: "Friend",
  lastName: "Three",
  isSocialDistancing: false,
  isInfected: false,
};

// Input:
const persons = [
  {
    firstName: "Person",
    lastName: "One",
    isSocialDistancing: false,
    friends: [friend2, friend3],
  },
  {
    firstName: "Person",
    lastName: "Two",
    isSocialDistancing: true,
    friends: [friend2, friend1],
  },
  {
    firstName: "Person",
    lastName: "Three",
    isSocialDistancing: false,
    friends: [friend2, friend1],
  },
];
// Output: ["Person One", "Person Three"]

// // O(n * m) where n is length of persons and m is length of habits -> O(n^2) time, O(n) space
function getAtRiskPeople(persons) {
  const atRiskPersons = [];

  for (const person of persons) {
    if (person.isSocialDistancing === false) {
      for (const friend of person.friends) {
        if (friend.isSocialDistancing === false && friend.isInfected) {
          atRiskPersons.push(`${person.firstName} ${person.lastName}`);
          // don't need to check any other friends, already know this person
          // is at risk, and if we find they are at risk again, they will be
          // pushed again if we don't break
          break;
        }
      }
    }
  }
  return atRiskPersons;
}

function getAtRiskPeopleFunctional(persons) {
  return persons
    .filter(
      (person) =>
        person.isSocialDistancing === false &&
        person.friends.findIndex(
          (friend) => friend.isSocialDistancing === false && friend.isInfected
        ) > -1
    )
    .map((person) => `${person.firstName} ${person.lastName}`);
}

console.log(getAtRiskPeopleFunctional(persons));
