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

function orderTea(teaTypes) {
  return confirmOrder(teaTypes);
}

function confirmOrder(teaTypes) {
  return `Order confirmed for ${teaTypes}`;
}

const res = orderTea("Coffee");
console.log(res);
