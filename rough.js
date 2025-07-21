//Split the words, and return the second word:
let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];
// console.log(word);

//Ex:-
//Use the limit parameter:
const myArray = text.split(" ", 3);
console.log(myArray.length); //It size is 3
console.log(myArray);
