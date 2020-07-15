/**
 * Send a feelingless automaton test driver to drive your functions to see if it crashes to avoid personal injury.
 * Algos should be ran with node or nodemon because the console logs are clipped in debugger
 * @param {Array<Function>} testFuncs - Array of functions to test, alsow ill work with a single function instead of array
 * @param {Array<{ arguments: Array, expected: any }>} testCases - Array of objects with the specified keys: array of "arguments" to pass to each function and an "expected" output for those arguments, also will work with a single test case instead of array
 */
function testDriver(testFuncs = [], testCases = []) {
  // allow 1 or an array of testFuncs and testCases to be passed in, if they aren't an array, put the 1 item passed in
  // into an array so the below loops will work either way
  let funcs = testFuncs;
  let cases = testCases;

  if (typeof testFuncs === "function") {
    // it's not an array, so put the 1 function into an array so below loop will work
    funcs = [testFuncs];
  }

  if (Array.isArray(testCases) === false) {
    cases = [testCases];
  }

  for (let i = 0; i < funcs.length; i++) {
    const func = funcs[i];
    console.log("\n" + "*".repeat(85));
    console.log(`Testing ƒunction: ${func.name}\n`);

    // execute each test case against each function
    for (let j = 0; j < cases.length; j++) {
      // object destructure syntax for object at j index to put the values for the "arguments" and "expected" keys into vars of the same name
      let { arguments, expected } = cases[j];

      if (Array.isArray(arguments) === false) {
        // only 1 arg, it needs to be in an array so we can spread the array later
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
      const lastCase = j === cases.length - 1;
      const lastCaseAndNotLastFunc = lastCase && !lastFunc;

      if (lastCaseAndNotLastFunc === false) {
        // for aesthetic reasons, log this unless it's the last case being tested on any function but the last one
        console.log("-".repeat(85));
      }
    }
  }
}

module.exports = {
  testDriver,
};
