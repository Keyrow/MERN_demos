// Members: Alex, Jason

/* 
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.
*/

const students = [
  {
    firstName: "FN1",
    lastName: "LN1",
    habits: ["doesn't wash dishes", "falls asleep in lecture", "shows up early"]
  },
  {
    firstName: "FN2",
    lastName: "LN2",
    habits: ["shows up late", "washes dishes", "helps peers"]
  },
  {
    firstName: "FN3",
    lastName: "LN3",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"]
  },
  {
    firstName: "FN4",
    lastName: "LN4",
    habits: ["shows up early", "helps peers", "washes dishes"]
  }
];

// Input: students, "doesn't wash dishes"
// Output: ["FN1 LN1", "FN3 LN3"]

// Input: students, "shows up late"
// Output: ["FN2 LN2", "FN3 LN3"]

// Input: students, "vapes too much"
// Output: []


function santasNaughtyList(students, badHabit) {
  let NaughtyList = [];
  for (student of students) {
    if (student.habits.includes(badHabit)) {
      NaughtyList.push(student.firstName + " " + student.lastName);
    }
  }
  return NaughtyList;
} 


function santasNaughtyList(students, badHabit) {
  let NaughtyList = [];
  for (student of students) {
    student.habits.includes(badHabit)
      ? NaughtyList.push(student.firstName + " " + student.lastName)
      : "";
  }
  return NaughtyList;
}
