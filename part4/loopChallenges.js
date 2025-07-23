//Loop challenges in Js:-

/*
1. Write a while loop that calculates the sum of all numbers from 1 to 5 and store the
result in the variable named sum
*/

//code:-

// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum += i;
//   i++;
// }
// console.log(sum);

/*
2. Write a `while` loop that count down from 5 to 1 and stores the numbers in an array
named 'countdown'.
*/

//code:-

// const countdown = [];
// let i = 5;
// while (i >= 1) {
//   countdown.push(i--);
// }
// console.log(countdown);

/*
3. Write a `do while` loop that prompts a user to enter their favorite tea type until
they enter `stop`.
store each tea type in an array named `teaCollection`
*/

// To take input from the user in the terminal we use the prmopt() function in Js

//code:-

// const teaCollection = [];
// let tea; //It is undefined intially

// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
//   if (tea === "stop") break;
//   else teaCollection.push(tea);
// } while (true);

// console.log(teaCollection);

//Remmeber one thing that Nodejs not support the `prompt` therefore we need to check our
//solution of above code in the browser console.

/*
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a
variable named `total`.
*/

//Code:-

// let total = 0;
// let i = 1;

// do {
//   total += i;
//   i++;
// } while (i <= 3);

// console.log(total);

/*5. Write a `for` loop that multiple each element in the array `[2, 4, 6]` by 2 and
stored the result in a new array named `multipliedNumbers`
*/

//code:-

// const arr = [2, 4, 6];
// const multipliedNumbers = [];
// for (let i = 0; i < arr.length; i++) {
//   // multipliedNumbers[i] = 2 * arr[i]; //Usually in Programming language we cannot able
//   //to add element in the index if size is not declare but in javascript you can do that
//   multipliedNumbers.push(2 * arr[i]);
// }

// console.log(multipliedNumbers);

/*
6. Write the for loop that list all the cities in the array `Paris`, `New York`, `Tokyo`
, 'London' and stores each city in a new array named `cityList`
*/

//Code:-

// const arr = ["Paris", "New York", "Tokyo", "London"];
// const cityList = [];

// for (let i = 0; i < arr.length; ++i) {
//   cityList.push(arr[i]);
// }

// console.log(cityList);
