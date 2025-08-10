//Module import file in Javascript

//Always use extension(.js) for filePath otherwise you can get the error.
//It is `default import`: In this you don't need to use the curly braces.
import multipy from "./mathOperationM.js";

//It is `named import`
import { add, subtract } from "./mathOperationM.js";

console.log(multipy(2, 2));
console.log(add(2, 2));
console.log(subtract(3, 2));

//There are two way of importing and exporting the things:-
// 1. Module
// 2. commonJs

//Module we learn above.
//commonJs is the older way.
//Generally try to use module/above way
