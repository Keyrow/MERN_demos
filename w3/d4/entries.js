/* 
  Recreate Object.entries method

  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array

  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)

*/

//  Example:
const input1 = { firstName: "Foo", lastName: "Bar", age: 13 };
input1.__proto__.keyOnProto = "val from proto";

const output1 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
];
