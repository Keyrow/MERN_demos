/* 
  Chris
  Faisal
  Quang
*/

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
    2. have a friend who is not practicing social distancing whom is infected
*/

const friend1 = {
  firstName: "Ryan",
  lastName: "McPoyle",
  isSocialDistancing: false,
  isInfected: true
};

const friend2 = {
  firstName: "Guy",
  lastName: "Chap-man",
  isSocialDistancing: true,
  isInfected: true
};

const friend3 = {
  firstName: "Caiyyytleighn",
  lastName: "Khaitlyn",
  isSocialDistancing: false,
  isInfected: false
};

// Input:
const people = [
  {
    firstName: "Joe",
    lastName: "Shmo",
    isSocialDistancing: false,
    friends: [friend2, friend3]
  },
  {
    firstName: "Frank",
    lastName: "Reynolds",
    isSocialDistancing: true,
    friends: [friend2, friend1]
  },
  {
    firstName: "Jane",
    lastName: "Pleighn",
    isSocialDistancing: false,
    friends: [friend2, friend1]
  }
];

// Output: ["Jane, Pleighn"]

function getAtRiskPeople(persons) {
  const personNames = [];

  for (var i = 0; i < persons.length; i++) {
    const person = persons[i];
    if (!person.isSocialDistancing) {
      for (var j = 0; j < person.friends.length; j++) {
        const friend = person.friends[j];
        if (!friend.isSocialDistancing && friend.isInfected) {
          personNames.push(`${person.firstName}, ${person.lastName}`);
        }
      }
    }
  }

  return personNames;
}

console.log(getAtRiskPeople(people));
