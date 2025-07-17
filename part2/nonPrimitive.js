//Non-Primitive type in javascript.

//Object in Javascript.
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

