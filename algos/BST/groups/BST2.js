/* 
  Alex
  Chris
  Elena
*/

class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  newMethod(params) {
    // 'this' keyword will refer to the class instance
    // that the newMethod was called on
  }
  // return the min val from the BST
  min() {
    if (!this.root) {
      return null;
    }

    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }
    return current.val;
  }
  // create new node with newVal and add it in the appropriate place
  add(newVal) {
    const newNode = new BSTNode(newVal);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (newVal <= current.val) {
        if (current.left === null) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      }
      // newVal is greater than current.val
      else {
        if (current.right === null) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  contains(searchVal) {
    // code here, return boolean
    let current = this.root;
    while (current) {
      if (current.val === searchVal) {
        return true;
      }
      if (current.val < searchVal) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  rContains(searchVal) {
    //base cases = when l & r === null OR current.val === searchVal
    //forward movement = current = c.l or c.r
    let current = this.root;
    while (searchVal != current.val) {
      if (current.val < searchVal) {
        this.rContains(current.right);
        if (current.right === null) {
          return false;
        }
      }
      if (current.val > searchVal) {
        this.rContains(current.left);
        if (current.left === null) {
          return false;
        }
      }
    }
    return true;
  }

  size() {
    //total # of nodes, use recursion
  }
}

const myBST = new BST();

myBST.add(10);
myBST.add(5);
console.log(myBST);

// test min
// myBST.root = new BSTNode(3);
// myBST.root.left = new BSTNode(2);
// myBST.root.left.left = new BSTNode(1);

// console.log(myBST.min());
