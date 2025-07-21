/* 1. Declare an array name teaFlavors that contains the strings "green tea", black tea 
and oolang tea. Acess the first element of the array and store in a variable  name
firstTea.
*/

const teaFlavors = ["green tea", "black tea", "oolang tea"];
console.log(teaFlavors[teaFlavors.length - 1]);
const firstTea = teaFlavors[0];
console.log(firstTea);

//This is the another way to declare the array.
let teaFl = new Array("green tea", "black tea", "oolang tea");
console.log(teaFl[1]);

// 2. Declaring the array name 'cities' containing 'London' , 'Tokoyo' , 'Paris' and
// 'New York' access the third element of the array store in the variable name
// "favoriteCity"

const cities = ["London", "Tokoyo", "Paris", "New York"];
const favoriteCity = cities[2];
console.log(favoriteCity);

//3. You have an array name 'teaTypes' containing the 'herbal tea', 'white tea' and
// 'masala chai'. Change the second element of the array to 'jasmine tea'
const teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

//4. Create an array name citiesVisited containing "Mumbai" and "Sydney" add berlin to
// the array using the push method.

// ---->push method in Array in Js
const citiesVisited = ["Mumabai", "Sydney"];

//normal way in Js
citiesVisited[citiesVisited.length] = "Hisar";
console.log(citiesVisited);
//remember above approach only work in JS

//Using push method.
citiesVisited.push("Berlin");
console.log(citiesVisited);

//5. You have an array name teaOrders with "chai", "iced tea", "matcha" and "earl grey"
//Remove the last element of the array using the pop method and store it in a variable
//name lastOrder

const teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
//removing last element using the pop method in Js
const lastOrder = teaOrders[teaOrders.length - 1];
console.log(teaOrders);
//remember pop() method also return the deleted value
console.log(teaOrders.pop());
console.log(lastOrder);
console.log(teaOrders);

//6. You have an array name containing 'popularTeas' containing 'green tea', 'oolang tea'
// and 'chai' create a soft copy of this array named 'softCopyTeas'
const popularTeas = ["greeen tea", "oolang tea", "chai"];
const softCopyTeas = popularTeas;
console.log(softCopyTeas);
//--------impt to remember---------
//About soft copy is that when you pop element from the
//copy array then both element will be pop
popularTeas.pop();
console.log(popularTeas);
console.log(softCopyTeas);

//7. You have array name containing topCities "Berlin", "Singapore" and "New York",
//Create an array name hardCopyCities.

const topCities = ["Berlin", "Singapore", "New York"];
const hardCopyCities = [];
// ------ 1-way using the loop ------
for (let i = 0; i < topCities.length; i++) {
  hardCopyCities.push(topCities[i]);
}
console.log(hardCopyCities);
console.log("After pop in parent copy");
topCities.pop();
console.log("parent copy is");
console.log(topCities);
console.log("HarCopy is:-");
console.log(hardCopyCities);

//Another way is using bleow syntax for hard copy
//--------- 2-second way ---------
console.log("Another way");
console.log("After Hard copy doing pop operations");
const anotherHardCopy = [...topCities]; //using three dot and variable name`
// Above syntax is called rest and spread operators.
topCities.pop();
console.log(anotherHardCopy);

// ------- 3-way -------
//another way also which is using the splice method
const hrdCopy = topCities.slice(); //Generally this way less use but second way more
//use
console.log(hrdCopy);

//8. You have two arrays: `europeanCities` containing `Paris` and `Rome` and `asianCities`
//containing `Tokiyo` and `Bangkok` Merge these two arrays into a new array named
// `worldCities`.
const europeanCities = ["Paris", "Rome"];
const asianCities = ["Tokiyo", "Bangkok"];

// --------- 1-way ---------------------------------------

// const worldCities = [];
// for (let i = 0; i < europeanCities.length + asianCities.length; i++) {
//   if (i < europeanCities.length) {
//     worldCities[i] = europeanCities[i];
//   } else {
//     worldCities[i] = asianCities[i - asianCities.length];
//   }
// }

//---------------- 2-way --------------------------------------
//Using the "concat method"
const worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

//You have an array named `teaMenu` containing `masala chai`, `oolong tea`, `green tea`
//and `earl grey`. Find the length of the array and store it in a variable named
//`menuLength`.

const teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
const menuLength = teaMenu.length;
console.log(`teaMenu length is ${menuLength}`);

//10. You have an array named `cityBucketList` containing `Kyoto`, `London`, `Cape Town`,
//`Vancouver`. Check If London is in the array and store the result in a variable
// named 'isLondonInList'

const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

// ---------- 1-way --------------------------------------------------
// let isLondonInList = false;
// for (let i = 0; i < cityBucketList.length; i++) {
//   if (cityBucketList[i] === "London") isLondonInList = true;
// }
// console.log(isLondonInList);

// --------------------------- 2-way -----------------------------------
// using the includes() method in Js. This include method is case-sensitive and this
// includes() method always return the true/false value.
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
console.log(cityBucketList.includes("london"));

//To study more on the includes method you need to press 'control+click' on the topic
//here that topic is 'includes() method'

// --------------- learn more methods in Array -----------------------------------

//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
const arr1 = [2, 3, 4];
console.log(arr1.shift());
console.log(arr1);

console.log();
// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
const Ids = [1, 2, 3, 4, 5, 6];
console.log(Ids.unshift(9, 10)); //It return the updated length of the array
console.log(Ids);

//For refering more methods checks out array mdn docs.
