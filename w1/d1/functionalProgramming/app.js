const person = {
  firstName: "Neil",
  lastName: "Mosunic",

  // short hand
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // long-form, the value of the key named fullName2 is a function
  fullName2: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

// console.log(person.fullName());
// console.log(person.fullName2());

const numbers = [1, 2, 3, 4, 5];
console.log(`Original numbers arr: `, numbers);

function printAllItems(arr) {
  for (let i = 0; i < arr.length; ++i) {
    console.log(`The item at idx ${i} is: ${arr[i]}`);
  }
}

// printAllItems(numbers);

function printOneItem(item, idx) {
  console.log(`The item at idx ${idx} is: ${item}`);
}

// numbers.forEach(function (item, idx) {
//   console.log(`the item times 2 = ${item * 4}`);
// });

// numbers.forEach(printOneItem);

// recreate .forEach method, add it to the Array prototype so that every new array will have the recreated method
Array.prototype.forEvery = function (callbackFunction) {
  for (let i = 0; i < this.length; ++i) {
    callbackFunction(this[i], i);
  }
};

// numbers.forEvery(printOneItem);

// numbers.forEvery((currNum, currIdx) => {
//   console.log(currIdx, ": ", currNum);
// });

const getNewArrOfValuesDoubled = (nums) => {
  const doubledNums = [];

  for (let i = 0; i < nums.length; ++i) {
    const doubled = nums[i] * 2;
    doubledNums.push(doubled);
  }
  return doubledNums;
};

// console.log(getNewArrOfValuesDoubled(numbers));
// console.log(numbers);
const doubledNums = numbers.map((currentNum, i) => {
  return currentNum * 2;
});

// console.log(doubledNums);

// recreate .map so that every array gets the new recreated .map method
Array.prototype.map2 = function (callBackFunction) {
  const newArr = [];

  for (let i = 0; i < this.length; ++i) {
    const newItem = callBackFunction(this[i], i);
    newArr.push(newItem);
  }
  return newArr;
};

const tripledNums = numbers.map2(function (currNum, i) {
  return currNum * 3;
});

// console.log(tripledNums);

const thisIsBananas = numbers.map2((currNum) => {
  return "Banana";
});

// console.log(thisIsBananas);

const testScores = [5, 10, 8, 7, 6, 3];

const passOrFail = testScores.map((score) => {
  if (score > 5) {
    return "pass";
  } else {
    return "fail";
  }
});

// console.log(passOrFail);

const scoresAbove5 = testScores.filter((score, idx) => {
  return score > 5;
});

// console.log(scoresAbove5);

// recreate .filter method, add it to the Array prototype so that every new array will have the recreated method
Array.prototype.filter2 = function (callBackFunction) {
  const filteredArr = [];

  for (let i = 0; i < this.length; ++i) {
    const keepItem = callBackFunction(this[i], i);

    if (keepItem === true) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

const isGreaterThan5 = (num) => {
  return num > 5;
};
const scoresAboveFive = testScores.filter2(isGreaterThan5);

console.log(scoresAboveFive);
