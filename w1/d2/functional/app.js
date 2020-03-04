// arrow syntax
const syn1 = () => "shorthand";
const syn2 = (param1, param2) => "shorthand2";
const syn3 = (param1, param2) => {
  const result = "long form";
  return result;
};

const numbers = [10, 20, 30, 40];

function printAllItems(arr) {
  for (let i = 0; i < arr.length; ++i) {
    console.log(`The item at idx ${i} is ${arr[i]}`);
  }
}
// printAllItems(numbers);

const printOneItem = item => console.log(`The item is ${item}`);

// numbers.forEach(printOneItem);
// numbers.forEach((item, idx) => {
//   console.log(`The item at idx ${idx} is ${item}`);
// });

Array.prototype.forEachRebuilt = function(callbackFn) {
  for (let i = 0; i < this.length; ++i) {
    callbackFn(this[i], i, this);
  }
};

// numbers.forEachRebuilt((currItem, currIdx) => {
//   const currItemTimesTen = currItem * 10;
//   console.log("Current Item is being multipled by 10");
//   console.log(currItemTimesTen);
// });

const newArr = numbers.map(currNum => {
  let newItem = "";

  if (currNum < 30) {
    newItem = "fail";
  } else {
    newItem = "pass";
  }

  return newItem;
});

// console.log(newArr);
// console.log(numbers); // unchanged

Array.prototype.mapRebuilt = function(callbackFn) {
  const newArr = [];

  for (let i = 0; i < this.length; ++i) {
    const newItem = callbackFn(this[i], i, this);
    newArr.push(newItem);
  }
  return newArr;
};

// const numsLessThan30 = numbers.filter(currNum => currNum < 30);
// console.log(numsLessThan30);

Array.prototype.filterRebuilt = function(filterCallBack) {
  const filteredArr = [];

  for (let i = 0; i < this.length; ++i) {
    const shouldKeep = filterCallBack(this[i], i, this);

    if (shouldKeep === true) {
      filteredArr.push(this[i]);
    }
  }

  return filteredArr;
};

const numsLessThan30 = numbers.filterRebuilt(currNum => currNum > 30);
console.log(numsLessThan30);
