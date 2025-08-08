//Here we learn about prototypalInheritance in Javascript.

//Prototypal Inheritance is nothing but inheritance is done on the prototype only.

//constructor function
function Person(name) {
  this.name = name;
}

//Here we adding method to prototype and access the this.name variable in prototype
//in this way we show the prototypal inheritance

//Each object has it own hidden property which help in refer to other object or we can say
//it prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let Alice = new Person("Alice");
Alice.greet();
