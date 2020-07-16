const logStyles = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  fgBlack: "\x1b[30m",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
  fgBlue: "\x1b[34m",
  fgMagenta: "\x1b[35m",
  fgCyan: "\x1b[36m",
  fgWhite: "\x1b[37m",
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

/**
 * Send a feelingless automaton test driver to drive your functions to see if it crashes to avoid personal injury.
 * Algos should be ran with node or nodemon because the console logs are clipped in debugger
 * @param {Array<Function>} testFuncs - Array of functions to test, can works with a single function instead of array
 * @param {Array<{ arguments: Array, expected: any }>} testCases - Array of objects with the specified keys: array of "arguments" to pass to each function and an "expected" output for those arguments, also works with a single test case instead of array
 */
function testDriver(testFuncs = [], testCases = []) {
  const {
    bgBlack,
    bright,
    fgBlue,
    fgCyan,
    fgGreen,
    fgRed,
    fgYellow,
    fgMagenta,
    fgWhite,
    underscore,
  } = logStyles;

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
    console.log(
      `${bgBlack + fgYellow}%s${logStyles.reset}`,
      "\n" + "*".repeat(85)
    );
    console.log(
      `${bgBlack + fgCyan + underscore}%s${logStyles.reset}`,
      `Testing ƒunction: ${func.name}\n`
    );

    // execute each test case against each function
    for (let j = 0; j < cases.length; j++) {
      // object destructure syntax for object at j index to put the values for the "arguments" and "expected" keys into vars of the same name
      let { arguments, expected } = cases[j];

      if (Array.isArray(arguments) === false) {
        // only 1 arg, it needs to be in an array so we can spread the array later
        arguments = [arguments];
      }

      const caseNumStr = `Case ${j + 1}.`;

      console.log(
        `${bgBlack + fgBlue + underscore}%s${logStyles.reset}`,
        caseNumStr + "\n"
      );

      console.log(
        `${fgWhite + bright}%s${logStyles.reset}`,
        "Given:   ",
        ...arguments
      );

      try {
        // pass the arguments into the func by spreading them apart as comma separated arguments to get the actual returned value
        let actual;

        // const hrtimeStart = process.hrtime();
        // const iterations = 10000;

        // for (let i = 0; i < iterations; i++) {
        actual = func(...arguments);
        // }

        // hrtimeEnd[1] is nanoseconds
        // const hrtimeEnd = process.hrtime(hrtimeStart);
        // console.log(
        //   "Execution ⌚:",
        //   `${
        //     hrtimeEnd[1] / 1000000 / iterations
        //   }ms averaged over ${iterations} iterations.\n`
        // );

        console.log(
          `${bgBlack + fgGreen}%s${logStyles.reset}`,
          `Expected:`,
          expected
        );
        console.log(
          `${bgBlack + fgMagenta}%s${logStyles.reset}`,
          `Actual:  `,
          actual
        );
      } catch (err) {
        console.log(
          `${bgBlack + fgRed + underscore}%s${logStyles.reset}`,
          `Error on ${caseNumStr}`
        );
        console.log(err);
      }

      const lastFunc = i === funcs.length - 1;
      const lastCase = j === cases.length - 1;
      const lastCaseAndNotLastFunc = lastCase && !lastFunc;

      if (lastCaseAndNotLastFunc === false) {
        // for aesthetic reasons, log this unless it's the last case being tested on any function but the last one
        console.log(`${fgGreen}%s${logStyles.reset}`, "-".repeat(85));
      }
    }
  }
}

module.exports = {
  testDriver,
};
