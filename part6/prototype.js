//Here we learning prototype in Js.

let computer = { cpu: 12 };
let lenovo = { screen: "HD" };

let tomHardware = {};

// console.log(computer);   //  op:- { cpu: 12 }

// console.log(`computer`, computer.__proto__);
// op:- computer [Object: null prototype] {}
// We get following op in our vscode terminal

//But when we write computer.__proto__ on 'browser console' this will show bleow items
// Here you can learn about this by simply clicking on them. This are all the property
// related to computer which you can able to use.

// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

//We can also able to define our own prototype use above "__proto__" syntax.

let HP = {
  RAM: "8GB",
  __proto__: computer, //define our own prototype.
};

// console.log(`HP`, HP.__proto__); // op:- HP {cpu: 12};
//Here we get the property of the computer using proto bcs we define our own prototype
//therefore it will print the property of computer.

//But in previous case we get the null bcs there we don't define any prototype or rewrite
//the existing prototype.

// __proto__ is the older way to define the prototype.

//The new way is using the Object.setPrototype("Where to set", "which obj use to set")
//It is the better way then __proto__

let genericCar = { tyres: 4 };

let Tesla = {
  Driver: "AI",
};

Object.setPrototypeOf(Tesla, genericCar);

//here we using getter for easy to remember.
console.log(`Tesla`, Object.getPrototypeOf(Tesla)); // op:- Tesla { tyres: 4 }

//you can further more learn about this things  property on mdn.
