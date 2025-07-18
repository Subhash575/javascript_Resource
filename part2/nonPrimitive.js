//Non-Primitive type in javascript.

//1. Object in Javascript.
//Always remember object is the key value pair.

//ex:1
let obj = {};
console.log(obj); //It will print parenthesis:- {} which is also the valid object in Js
console.log(typeof obj); //It type is object

console.log();
//ex:2
const username = {
    firstName: "Subhash",
    isLoggedIn: true,
    "Go to": "Hisar",  // To accessing this type of key we use the username["Go to"]
}

console.log(username);

username.firstName = "Sanja";  //You can change in case of object bcs memory reference to
//same location but in case of simple or primitive const type you cannot change bcs
//memory reference change.

//We can also add key in the object.
username.lastName = "Rana";
console.log(username);
console.log(username.firstName);
console.log(username.lastName);
console.log(typeof username);

//Important to know:-

// "Go to": "Hisar",
//You cannot access this type of key in javascript using "dot operator" instead you need
//to use this way-->username["Go to"] otherwise we get the error.

console.log(username["Go to"]);

//Another object:- Built in object like date
const today = new Date();
//Here Date() is the object therefore we can access it method
console.log(today)
console.log(today.getDate())

// 2. Arrays in Javascript
let anotherUser = ["Subhash", true];
console.log(anotherUser[0]);
//Array in javascript have different type of data present there it can also be the array
//of array
//You can acess the array using the index

//(imp)You cannot rely on the javascript for implicit type conversion bcs bydefault
//javascript convert the things in that way which you never expected.
//ex1:-
console.log("1" + 1); // op: 11

//ex2:-
const isValue = true;
console.log(isValue + "1"); // op: true1
console.log(isValue + 1); // op: 2

//For using correct type we use:-
let str = "12"
console.log(Number(str)); //It will converted into the number

let s1 = "12abc"
console.log(Number(s1)); //op:- NaN (which means not a number)
console.log(typeof Number(s1)); // op:- It type is a number
//that why we generally not try to use typecaste bcs of that reason Typescript come into
//the picture bcs it provide the type security.

//You can experiment more for ex:- 
console.log(Number(undefined)); // op: NaN
console.log(typeof Number(undefined)); // op: number
//for null also
console.log(Number(null)); // op: 0
console.log(typeof Number(null)); // number






