//closure property we are going to learn here.
/*
(v.imp):-
"Closure are basically function" the whole idea about this function is that they
remember the environment in which they created.(This means that function can retain
the variable which are declared outside of it.
*/

//Closure example:-

function outerFunc() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
    ``;
  };
}

let increment = outerFunc();
console.log(increment()); // op: 5
console.log(increment()); // op: 6
console.log(increment()); // op: 7
