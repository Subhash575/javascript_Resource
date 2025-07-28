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
console.log(coffee);
console.log(coffee.description());
