//It contain the levelUp loop challenges in JS

/*
1. Write a for loop that loop through the array ['green tea', 'black tea', 'chai',
'oolang tea'] and stop the loop when it find the 'chai'. Store all tea before 
'chai' in a new array named 'selectedTeas'
*/

//code:-

// const arr = ["green tea", "black tea", "chai", "oolang tea"];
// const selectedTeas = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] != "chai") selectedTeas.push(arr[i]);
//   else break;
// }
// console.log(selectedTeas);

/*
2. Write the for loop that loop through the arr : ['London', 'New York', 'Paris', 
'Berlin'] and skip 'Paris'. Store the other cities in the new array named `visitedCities`
*/

//code:-

// const cities = ["London", "New York", "Paris", "Berlin"];
// const visitedCities = [];

// for (let i = 0; i < cities.length; ++i) {
//   if (cities[i] === "Paris") continue;
//   visitedCities.push(cities[i]);
// }
// console.log(visitedCities);

/*
3. Use a `for-of` loop to iterate through the array '[1, 2, 3, 4, 5]` and stop when
number 4 is found. Store the number before '4' in the array named `smallNumbers`
*/

//code:-

//------------------ Here we learn about `for-of' loop in Js ------------------------
// const nums = [1, 2, 3, 4, 5];
// const smallNumbers = [];
// for (const x of nums) {
//   if (x === 4) break;
//   smallNumbers.push(x);
// }

// console.log(smallNumbers);

/*
4. Use a `for-of` loop to iterate through the array: ['chai', 'green tea', 'herbal tea'
, 'black tea'] and skip `herbal tea`. Store the other teas in a array name 'preferredTeas'
*/

//code:-

// const teas = ["chai", "green tea", "herbal tea", "black tea"];
// const preferredTeas = [];

// for (const x of teas) {
//   if (x === "herbal tea") continue;
//   preferredTeas.push(x);
// }

// console.log(preferredTeas);

/*
5. Use a `for-in' loop to loop through the object containing city populations. Stop
the loop when the population of `Berlin` is found and store all the previous cities
populations in a new Object named `cityPopulations`

let cityPopulation = {
   "London": 8900000,
   "New York": 8400000,
   "Paris": 2200000,
   "Berlin": 3500000
};

*/

//code:-

// learning about `for in' which is use to iterate over object key in Js ----------------

// let cities = {
//   London: 8900000,
//   "New York": 8400000,
//   Paris: 2200000,
//   Berlin: 3500000,
// };

// const cityPopulations = {};

// for (x in cities) {
//   if (x === "Berlin") break;
//   cityPopulations[x] = cities[x];
// }

// console.log(cityPopulations);

// console.log();

//----------- Learn about Obeject method for key and values in JS-----------------------
// console.log(Object.values(cityPopulations));
// console.log(Object.keys(cityPopulations));

/*
6. Use a `for-in' loop to loop through an object containing city populations. Skip
any city with population below 3 million and store the rest in a new object named
`LargeCities'

let worldCities = {
   "Sydney": 5000000,
   "Tokyo": 9000000,
   "Berlin": 3500000,
   "Paris": 2200000
};

*/

//code:-

// let worldCities = {
//   Sydney: 5000000,
//   Tokyo: 9000000,
//   Berlin: 3500000,
//   Paris: 2200000,
// };

// let LargeCities = {};

// for (const cities in worldCities) {
//   if (worldCities[cities] < 3000000) continue;
//   LargeCities[cities] = worldCities[cities];
// }

// console.log(LargeCities);

/*
7. Write a `forEach' loop to iterate through the array: ['earl grey', 'green tea', 'chai',
'oolang tea'] stop the loop when `chai` is found and store all the previous teaTypes in the array
named `availableTeas`
*/

//code:-

//------------ In general there is no for Each loop in Js similar to C++ it is different
//here -------------------------------------------------------------------------------

// const arr = ["earl grey", "green tea", "chai", "oolang tea"];
// const availableTeas = [];

// //These forEach loop take the function and you can provide any functionality as you want.
// arr.forEach(function (item) {
//   if (item === "chai") return; // here we cannot able to use the "break" bcs we cannot get out of fn.
//   availableTeas.push(item);
// });

// console.log(availableTeas);

/*
8. Write a `forEach` loop that iterates through the array ["Berlin", "Tokyo", "Sydney",
"Paris"]. Skip `Sydney` and store the other cities in a new array named 'traveledCities'
*/

// const cities = ["Berlin", "Tokyo", "Sydney", "Paris"];

// const traveledCities = [];

// These is also the example of 'higher order function' or 'first-class function'.

// cities.forEach(function (city) {
//   if (city === "Sydney") return;
//   traveledCities.push(city);
// });

// console.log(traveledCities);

/*
9. Write a `for` loop that iterate through the array [2, 5, 7, 9] skip the value
7 and multiple the rest by 2. Store the result in new array named `doubledNumbers`
*/

//code:-

// const nums = [2, 5, 7, 9];
// const doubledNumbers = [];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] == 7) continue;
//   doubledNumbers.push(2 * nums[i]);
// }

// console.log(doubledNumbers);

/*
10. Use a `for-of' loop to iterate through the array `["chai", "green tea", "black tea",
"jasmine tea", "herbal tea"]` and stop when the length of the current tea name is  greater
than 10 . Store the rest teas iterated over in an array named `shortTeas`.
*/

//code:-

const teaTypes = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];

const shortTeas = [];

for (tea of teaTypes) {
  if (tea.length >= 10) break;
  shortTeas.push(tea);
}
console.log(shortTeas);
