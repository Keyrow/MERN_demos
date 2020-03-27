// Chris, Eddy

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


class Chair{ 
  constructor (color, weight, smell){
    this.isRaised = false;
    this.isOccupied = false;
    this.reclined = false;
    this.color = color ;
    this.smell = smell;
    this.weight = weight;
    this.isEjectionOn = false;
    }
  }

class Person {
  constructor (person) {
    this.name = name;
    this.isSitting = false;
  }
}

class Wheels {
  constructor (wheels) {
      this.color = color;
      this.number = number;
      this.isBroken = false;
  }
}

new_person = New Person("Neil", true) {
  

new_chair = New Chair(blue, 160, good)

new_wheel = New Wheels(black, 4)

}
