// Here we learning about Functions  in javascript.

/*
1. Write a function name `makeTea` that take one parameter , `typeOfTea`, and returns
a string like `Making green tea`. When call with "green tea". Store the result in a
variable name `teaOrder`
*/

//---------------------------- Learning---------------------------------------------------
// remember in Javascript we pass the parameter not declare variable their using let, var
// here (Parameter is nothing but variable name. It can be any parameter like array,
// string, object etc)

//code:-

// function makeTea(typeOfTea) {
//   return `Making ${typeOfTea}`;
// }

// let teaOrder = makeTea("coffee");
// console.log(teaOrder);

/*
2. Create a function named `orderTea` that takes one parameter. Inside this function
create another function named `confirmOrder` that returns a message like  "Order confirmed
for chai". call `confirmOrder` from within `orderTea` and return the result.
*/

//--------------- one way --------------------------------------------------------

// function orderTea(teaTypes) {
//   return confirmOrder(teaTypes);
// }

// function confirmOrder(teaTypes) {
//   return `Order confirmed for ${teaTypes}`;
// }

// const res = orderTea("Coffee");
// console.log(res);

//---------------------- another way ------------------------------------------------

// function orderTea(teaTypes) {
//   function confirmOrder(teaTypes) {
//     return `Order confirmed for ${teaTypes}`;
//   }

//   return confirmOrder(teaTypes);
// }

// let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

//If you want you can study about javascript execution context

/*
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and
`quantity`.The function should return the total cost by multiplying the `price` and 
`quantity`. Store the result in a variable named `totalCost`.
*/

//code:-

//---- one way -------->

// let calculateTotal = (price, quantity) => {
//   return price * quantity;
// };

//------ another way -------->

// let calculateTotal = (price, quantity) => price * quantity; //It is the implicit return
// let totalCost = calculateTotal(35, 5);
// console.log(totalCost);

//remmeber in arrow function we always need to assign the value.
// ex:- let calculateTotal = (price, quantity) => price * quantity;
//but in case of "function keyword" we do declaration.

/*
Different way of defining function is:-
1. function greet() {}
2. const greet = ()=> {}
3. () => {}  // It is un-named function
*/

/*
----------------- It is important to understand ---------------------------------------
"this" context is present in both 'normal function' or 'arrow function' but it is difficult
to pass the "this" in case of 'arrow function' therefore in case of DOM we use the
simple function.
*/

/*
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as
a parameter and calls it with the argument "earl grey"
return the result of calling `makeTea`.
*/

// We can pass whole function as parameter in javascript.

//--------- #Higher Order function or First-class fn are those function which take
// function as parameter and also return that function.

//code:-

// function processTeaOrder(teaFunction) {
//   return teaFunction("earl grey");
// }

// function makeTea(tea) {
//   return `We are making ${tea}`;
// }

// console.log(processTeaOrder(makeTea));

/*
5. Write a function named `createTeaMaker` that returns another function. The returned
function should take one parameter, `teaType`, and return a message like "Making green 
tea". Store the returned function in a variable named `teaMaker` and call it with
"green tea".
*/

//code:-

// function createTeaMaker() {
//   return function (teaType) {
//     return `Making ${teaType}`;
//   };
// }

// const teaMaker = createTeaMaker();
// console.log(teaMaker("green tea"));

//------------------learning---------------------------------------------------

//Remember this function return the function here.
function createTeaMaker(order_no) {
  let cost = 150;
  return function (teaType) {
    return `Making ${order_no}th order tea which is ${teaType} of cost ${cost}Rs`;
  };
}

const teaDetail = createTeaMaker(7);
const res = teaDetail("green tea");
console.log(res);

/*
What is a Closure?
A closure is created when a function remembers and accesses variables from its outer scope, even after that outer function has finished executing.
*/
