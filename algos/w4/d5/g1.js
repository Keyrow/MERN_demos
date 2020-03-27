// Alex, Elena

/* 
  This is more of a free-form algo to practice some OOP
  
  Create a chair class that has the following properties and functionality:

  color
  weight
  smell
  Has a certain number of wheels (each wheel has a color and could be broken or not)
  Can be raised / lowered
  Can be reclined / not reclined
  Can be occupied / not occupied
  Occupant can be ejected by the chair
  An instance of a person can perform a "sit" action and will update a chair to be occupied with said person
*/
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

class Wheel {
  constructor(color) {
    this.color = color;
    this.isBroken = false;
  }
}

class Chair {
  constructor(color, weight, smell, wheels) {
    this.color = color;
    this.weight = weight;
    this.smell = smell;
    this.wheels = wheels;
    this.isRaised = false;
    this.isReclined = false;
    this.isOccupied = false;
  }
  eject() {
    if (this.isOccupied) {
      this.isOccupied = false;
    }
  }
  recline() {
    if (!this.isReclined) {
      this.isReclined = true;
    }
  }
  raise() {
    if (!this.isRaised) {
      this.isRaised = true;
    }
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }
  sit(chair) {
    if (!chair.isOccupied) {
      chair.isOccupied = true;
    } else {
      return "Wait your turn!";
    }
  }
}

const wheels = [
  (wheel1 = new Wheel("red")),
  (wheel2 = new Wheel("orange")),
  (wheel3 = new Wheel("yellow")),
  (wheel4 = new Wheel("green")),
  (wheel5 = new Wheel("blue"))
];

const chair = new Chair("blue", 50, "floral", wheels);
const neil = new Person("neil");
console.log("***chair at instatiation: \n", chair);

neil.sit(chair);
console.log(">>>chair + neil: \n", chair);

chair.raise();
chair.recline();
console.log("$$$raised & reclined chair: \n", chair);
