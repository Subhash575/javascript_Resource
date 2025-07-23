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

const arr = ["earl grey", "green tea", "chai", "oolang tea"];
const availableTeas = [];
