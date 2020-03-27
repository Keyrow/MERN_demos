// Aldo, David, Gaku

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


class Chair {
  constructor(name="Chair", color = "Hot Pink", weight = "69", smell="Shweaty", wheels=[{"color":"Black","broken":false},{"color":"Black","broken":false},{"color":"Black","broken":false},{"color":"Black","broken":false}], raised = true, reclined = false, occupant = null){
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.smell = smell;
    this.wheels = wheels;
    this.raised = raised;
    this.reclined = reclined;
    this.occupant = occupant;
  }

  // Ejects occupant and breaks a wheel
  eject(){
    this.occupant = null;
    console.log(`Ejecting ${this.occupant.name} from ${this.name}`);
    this.wheels[0].broken = true;
    console.log("One of the wheels took damage...");
  }
}

class Person {
  constructor(name = "TESTNAME", ASSignedChair=null){
    this.name = name;
    this.ASSignedChair = ASSignedChair;
  }
  
  // Assigns person to chair
  sit(chairObj){
    // If chair has no occupants
    if (chairObj.occupant === null){
      console.log(`${this.name} sat down on ${chairObj.name}`);
    }
    // If there is an occupant
    else{
      console.log(`${this.name} kicked out ${chairObj.occupant.name} and sat down on ${chairObj.name}`);
    }
    // Either way, overwrite the chair's occupant and person's chair assignment
    chairObj.occupant = this;
    this.ASSignedChair = chairObj;
  }

  raiseChair(){
    // if person has chair
    if (this.ASSignedChair){
      // raise your dongers
      console.log(`${this.name} raised chair ${this.ASSignedChair.name}.`);
      this.ASSignedChair.raised = true;
    }
    else{
      console.log(`${this.name} is not sitting on a chair.`);
    }
  }
  
  // performActionOnNestedObject(key, methodName, args) {
  //   if (this.key) {
  //     this.key[methodName](...args);
  //   }
  // }
}


const dxracer = new Chair(name="dxracer")
const neil = new Person()
neil.sit(dxracer)
neil.raiseChair()
// neil.performActionOnNestedObject("ASSignedChair", "raise", [5, true]);
// neil.performActionOnNestedObject("ASSignedChair", "recline");
// neil.performActionOnNestedObject("car", "openDoor");

dxracer.eject()