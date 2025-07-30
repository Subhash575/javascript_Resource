//Here we learning about OOPs concept in Js.

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
    //here to access variable we use the 'this' keyword.
  },
};

// console.log(car.start());

//Using above 'object' we cannot create copy of 'object' here.
//For creating copy we use the 'constructor-function' which we discuss previously.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("John", 23);
let p2 = new Person("Stieve", 24);
// console.log(p1.name);
// console.log(p2.name);

//Prototype and Prototyple chain.
//Prototyple chain means I can acess the whole prototyple chain
// and 'inject our whole method here.'
//Example of prototyple chain

function Animal() {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} can speak`;
};

//another example:- Here we adding `custom method' which is `Subhash` here.
Array.prototype.Subhash = function () {
  return `Custom method ${this}`;
  //Who ever have access of the this also print.
};

let myArray = [1, 2, 3];
let myNewArray = [2, 4, 6, 8];
// console.log(myArray.Subhash());
// console.log(myNewArray.Subhash());

//Class in Js

class Vehicle {
  //constructor
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  //method:- for method you don't need to use the 'function' keyword in Js
  info() {
    return `${this.make} car model is ${this.model}`;
  }
}

//Inheritance in Js

class Bike extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myBike = new Bike("Toyota", "Corolla");
console.log(myBike.info());
console.log(myBike.drive());
