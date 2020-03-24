// Group Members: Alex, Eddy, Nicholas

/* 
  When receiving JSON data from an API call, it likely will have a deeply nested structure,
  depending on how much data was retrieved. 
  
  Often, the data you are after, is deeply nested.
  Once you've inspected the structure of the returned object,
  you have a known series of chained dots to access the desired value.
  
  However, some records don't have as much data as others,
  which means somewhere along your chain of dots, you will get undefined.
  If you blindly try to use the same chain of dots, hoping the data is there,
  you will run into an Uncaught TypeError: Cannot read property 'keyName' of undefined,
  resulting from essentially doing `undefined.keyName`.
  Write a function to safely access a nested value in an object
  without knowing how deeply nested the object is. There are js libs
  focused on providing functions to help with this problem. They are often
  referred to as 'lenses' because you use the lense to look into an object.

  Input:
    Object,
    Array of strings representing a path of keys in the Object

  Output:
    - Value from traversing the object to the last key
    - null if at any point accessing a key returns undefined
      - this means a key was not found / the Object was not nested as deep as the path of keys goes
    - the given object if array of keys is empty
*/

// Input:
const user = {
  id: 101,
  email: "jack@dev.com",
  personalInfo: {
    name: "Jack",
    address: {
      line1: "westwish st",
      line2: "washmasher",
      city: "wallas",
      state: "WX"
    }
  }
};

const keys1 = ["personalInfo", "address", "city"];
// Output: 'wallas'

const keys2 = ["personalInfo", "address", "country"];
// Output: null

const keys3 = ["personalInfo", "mainHobby", "yearsActive"];
// Output: null

const keys4 = ["address", "city"];
// Output: null

const keys5 = [];
// Output: the provided obj

//if keys.length===0, return obj
//for key (arr[i]) in keys obj.hasOwnProperty('key')
//if F for any key, return null

//
function keyChainValid(obj, arr) {
  if (arr.length === 0) {
    return obj;
  }
  let chain = "";
  for (let i = 0; i < arr.length; i++) {
    // is arr[i] a key in obj (no=== return null)
    if (!obj.hasOwnProperty(arr[i])) {
      console.log();
      return null;
    }
    // add key to string
    chain += arr[i] + ".";
  }
  chain.pop();
  return obj.chain;
}

keyChainValid(user, keys1);
keyChainValid(user, keys2);
keyChainValid(user, keys3);
keyChainValid(user, keys4);
keyChainValid(user, keys5);
