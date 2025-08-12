//Here we learn about constructor in Js

// #1. Constructor Function in Js.
function Car(make, model) {
  // 'this' provide you the context that you are talking about this particular function
  // and you are talking about your copy of it.
  this.make = make;
  this.model = model; //Here this keyword is use to define our variable model, make here
}

const myCar = Car("Toyota", "Camry"); //op: undefined

// (v.imp): without the "new" keyword there is no sense of using "this" keyword .
const myNewCar = new Car("Tata", "Safari"); //op: Car { make: 'Tata', model: 'Safari' }

//(v.imp): 'this' keyword is point to the newly created object.

// console.log(myCar);
// console.log(myNewCar);

//Another Example:-

function tea(type) {
  this.type = type;
  //for using any variable in the string we use this.type we use `back teck`
  this.description = function () {
    return `It is the cup of ${this.type}`;
  };
}

let coffee = new tea("coffee");
// console.log(coffee);
// console.log(coffee.description());

function Animal(species) {
  this.species = species;
}

//Here we using the 'prototype' on 'function' but previously we using prototype on 'object'.
//(imp):Once you access the 'prototype' you can add 'property' and 'method' to it.
//Also need to provide method defination.

//Different way of using prototype.
Animal.prototype.sound = function () {
  return `${this.species} make a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());

// Important Example:-

function Drink(name) {
  //Here we checking the error that some one creating the object using the
  // 'new' keyword or not  for this we use the {new.target}  ----> learning
  if (!new.target) {
    //Just like` function constructor` we defining we have function constructor for
    // 'Error' to actually raise the error we use the keyword 'throw'
    throw new Error("Drink must be called with new keyword");
  }

  this.name = name;
}

let milk = new Drink("milk");
console.log(milk);

// let juice = Drink("Juice");
