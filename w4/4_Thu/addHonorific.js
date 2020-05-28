/* 
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format
  
  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: re-write it with built in functional programming methods
*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["Sanchez, Rick", "Smith, Jerry"];
// Output: ["Sir Rich Sanchez", "Sir Jerry Smith"]

// Inputs
const honorific3 = "Mrs.";
const names3 = ["HorseDoctor, Beth"];
// Output: ["Mrs. Beth HorseDoctor"]

// Time: O(n * m) polynomial, n = fullNames.length, m = max length of a full name from the split loop
function addHonorificSplit(honorific, fullNames) {
  const namesWithHonorific = [];

  for (const fullName of fullNames) {
    const [lastName, firstName] = fullName.split(", ");
    namesWithHonorific.push(`${honorific} ${firstName} ${lastName}`);
  }
  return namesWithHonorific;
}

// Time: O(n * m) polynomial, n = fullNames.length, m = max length of a full name from the nested for loop
function addHonorificFunctional(honorific, fullNames) {
  return fullNames.map((fullName) => {
    const [lastName, firstName] = fullName.split(", ");
    return `${honorific} ${firstName} ${lastName}`;
  });
}

// Notice this solution that avoids .split does not improve time complexity
// because the loop that .split does still needs to be done
// Time: O(n * m) polynomial, n = fullNames.length, m = max length of a full name from the nested for loop
function addHonorific(honorific, fullNames) {
  const namesWithHonorific = [];

  for (const fullName of fullNames) {
    let firstName = "",
      lastName = "",
      commaFound = false;

    for (let i = 0; i < fullName.length; i++) {
      const char = fullName[i];

      if (char === ",") {
        commaFound = true;
      }

      if (char !== " " && char !== ",") {
        if (commaFound === false) {
          lastName += char;
        } else {
          firstName += char;
        }
      }
    }
    namesWithHonorific.push(`${honorific} ${firstName} ${lastName}`);
  }
  return namesWithHonorific;
}
