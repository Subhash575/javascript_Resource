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
// console.log(myBike.info());
// console.log(myBike.drive());

//Encapsulation:-
//It means I want to 'restrict' the direct access to 'object data'.
//For encapsulation we use the '#' symbol in variable inside the class.

//example:-

class BankAccount {
  #Balance = 0;

  deposit(amount) {
    this.#Balance += amount;
    return this.#Balance;
  }

  getBalance() {
    return `$ ${this.#Balance}`;
  }
}

let account = new BankAccount();
// console.log(account.Balance);
// op: undefined  (bcs Balance is not define)

// console.log(account.#Balance);
// op: SyntaxError: Private field '#Balance' must be declared in an enclosing class

//For accesing the private field Balance we create the 'method'.
// console.log(account.getBalance());
// op: $ 0

//Abstraction
//It hides the complex implementation details.

class coffeeMachine {
  start() {
    // call DB.
    // filter the value
    return `starting the machine...`;
  }

  brewCoffee() {
    //complex calculation
    return `Brewing the coffee`;
  }

  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} + ${msgTwo}`;
  }
}

let myMachine = new coffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

// console.log(myMachine.pressStartButton());
//This will start the machine and Brew the coffee and you don't need to know about
//complex implementation.

//Polymorphism
//Somethings that can take multiple forms.

class Bird {
  fly() {
    return `Can fly...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin can not fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

//static method.
//Static method: It is the 'special method' which can only be called by the 'class' itself.
//An nobody can able to call it.

class calculator {
  static add(a, b) {
    return a + b;
  }
}

// let minicCal = new calculator();
// console.log(minicCal.add());
//op: TypeError: minicCal.add is not a function

//Correct way is use the class to call the method.
// console.log(calculator.add(2, 3));

//Getter and Setter

class Employee {
  constructor(name, salary) {
    // -ve check condition
    if (salary < 0) {
      throw new Error("Salary cannot be -ve");
    }
    this.name = name;
    // `_salary` is the way to write the salary so that we can constumize using
    // getter and setter.
    this._salary = salary;
  }

  set salary(val) {
    if (val < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary += val;
    }
  }

  get salary() {
    return `${this._salary}`;
  }
}

let e1 = new Employee("John", 50000);

//setter
e1.salary = -56000;

//you can set salary like this here. But it show error bcs we apply the condition that
//-ve value are not allowed.
//But when we console the initial salary given in the constructor by us it will set the
// -ve salary therefore we need to apply the -ve checks in constructor as well.

// console.log(e1.salary(-56000));
//Above way of setting the value is wrong bcs salary is not the method.

//getter
console.log(e1.salary);

//One flowed in Js using `_salary' here bcs you can set salary using '_salary' here
// e1._salary = 75000;
// console.log(e1.salary);

//---To remove this error completely we can use the '#salary' for privacy here.--------
/*
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be -ve");
    }
    this.name = name;
    this.#salary = salary;
  }

  set salary(val) {
    if (val < 0) {
      console.error("Invalid Salary");
    } else {
      this.#salary += val;
    }
  }

  get salary() {
    return `${this.#salary}`;
  }
}

*/
