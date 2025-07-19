// Check Number is greater than other number
let a = 5;
let b = 9;
if (a > b) console.log("a is greater than b");
else console.log("b is greater than a");

//checking string is equal to another string
let str1 = "hi";
let str2 = "his";
if (str1 === str2) console.log("Both are the equal");
else console.log("Unequal");

//checking variable is number or not
let p = 3; //refer it as number
// let c = 4;
let c = "hi";
//Always remember typeof return type in string
if (typeof p === "number") console.log("It is the number");
else console.log("It is not the number");
console.log(typeof p);

//for checking It is array or object both have same logic bcs behind the scene array is
//also the object
let s = [];
if (typeof s === "object") console.log("It is the array");

//Checking boolean value is true or false
let isActive = "true";

if (isActive === "true") console.log("It is true");
else console.log("It is false");

//or
let isTeaReady = "true";

if (isTeaReady) console.log("Tea is ready");
else console.log("Tea is not ready");

//Check if array is empty or not

const arr = [1];
// const arr = [0];
if (!arr.length) console.log("arr is empty");
else console.log("arr is not empty");
