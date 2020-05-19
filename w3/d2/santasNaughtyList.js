/* 
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.

  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
  {
    firstName: "FN1",
    lastName: "LN1",
    habits: [
      "doesn't wash dishes",
      "falls asleep in lecture",
      "shows up early",
    ],
  },
  {
    firstName: "FN2",
    lastName: "LN2",
    habits: ["shows up late", "washes dishes", "helps peers"],
  },
  {
    firstName: "FN3",
    lastName: "LN3",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
  },
  {
    firstName: "FN4",
    lastName: "LN4",
    habits: ["shows up early", "helps peers", "washes dishes"],
  },
];

// Input: students, "doesn't wash dishes"
// Output: ["FN1 LN1", "FN3 LN3"]

// Input: students, "shows up late"
// Output: ["FN2 LN2", "FN3 LN3"]

// Input: students, "vapes too much"
// Output: []

// O(n * m) where n is length of persons and m is length of habits -> O(n^2) time
function getSantasNaughtyList(persons, badHabit) {
  const coalRecipients = [];

  for (let i = 0; i < persons.length; ++i) {
    const person = persons[i];

    for (let j = 0; j < person.habits.length; ++j) {
      const personsHabit = person.habits[j];

      if (personsHabit === badHabit) {
        coalRecipients.push(`${person.firstName} ${person.lastName}`);
        // found what we are looking for, no need to keep looping
        break;
      }
    }
  }
  return coalRecipients;
}

function getSantasNaughtyListOfLoop(persons, badHabit) {
  const coalRecipients = [];

  for (const person of persons) {
    for (const personsHabit of person.habits) {
      if (personsHabit === badHabit) {
        coalRecipients.push(`${person.firstName} ${person.lastName}`);
        // found what we are looking for, no need to keep looping
        break;
      }
    }
  }
  return coalRecipients;
}

function getSantasNaughtListFunctional(persons, badHabit) {
  return persons
    .filter((person) => person.habits.includes(badHabit))
    .map((person) => `${person.firstName} ${person.lastName}`);
}
