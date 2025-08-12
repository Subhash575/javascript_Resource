// Here we learn about `this-Context` in javascript.

//declaring object in Js

const Person = {
  name: "Subhash",

  greet() {
    console.log(`Hi I am ${this.name}`);
  },
};

console.log(Person.greet); //Here: Person.greet is function.

Person.greet();
//When we transferring the context to another variable then contact with `this` is loss
const greetFunc = Person.greet; //Here we transferring the context.
greetFunc(); // op: Hi I am undefined (Bcs it context is loss)

//To remove this problem we need to bind the context using `bind` keyword.
const boundGreet = Person.greet.bind({ name: "Sanja" });
boundGreet();

//We need to research about some method like: bind, call and apply.

//(Important)
//Also remember about this context in case of arrow function:-
//In case of arrow function context is window and in case of normal function it is current
//element context.
