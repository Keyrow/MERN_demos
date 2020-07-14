/**
 * Send a feelingless autonomous test driver to drive your functions to see if "he" crashes to avoid personal injury.
 * This should be used with nodemon because the console logs are clipped in debugger
 * @param {Array} testFuncs     - Array of functions to test
 * @param {Array} testCases - Array of objects with keys: "args" and "expected" - for each test case's args and expected output
 */
function testDriver(testFuncs = [], testCases = []) {
  // allows for 1 function to be passed in directly, or an array of 1 or more functions can be passed in
  // in case multiple algo solution functions were written and need to be tested
  let funcs = testFuncs;

  if (typeof testFuncs === "function") {
    // it's not an array, so put the 1 function into an array so below loop will work
    funcs = [testFuncs];
  }
  for (let i = 0; i < funcs.length; i++) {
    const func = funcs[i];
    console.log("\n" + "*".repeat(60));
    console.log(`Testing ƒunction: ${func.name}\n`);

    // execute each test case against each function
    for (let j = 0; j < testCases.length; j++) {
      // object destructure syntax for object at j index to put the values for the "arguments" and "expected" keys into vars of the same name
      let { arguments, expected } = testCases[j];

      if (Array.isArray(arguments) === false) {
        // if only 1 arg was provided and it was not put into an array, put it into an array
        // so the below ...arguments spread will work
        arguments = [arguments];
      }

      const caseNumPrefix = `Case ${j + 1}.`;

      try {
        // pass the arguments into the func by spreading them apart as comma separated arguments to get the actual returned value
        const actual = func(...arguments);

        console.log(`${caseNumPrefix} Expected:`, expected);
        console.log(`${caseNumPrefix} Actual  :`, actual);
      } catch (err) {
        console.log(`Error on ${caseNumPrefix}`);
        console.log(err);
      }

      const lastFunc = i === funcs.length - 1;
      const lastCase = j === testCases.length - 1;
      const lastCaseAndNotLastFunc = lastCase && !lastFunc;

      if (lastCaseAndNotLastFunc === false) {
        // for aesthetic reasons, log this unless it's the last case being tested on any function but the last one
        console.log("-".repeat(60));
      }
    }
  }
}

module.exports = {
  testDriver,
};
