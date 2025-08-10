//Here we learn about generator and Iterator in Javascript
//It rearly use.

//This is generator function: `*` with `yield` keyword
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
// Here `next()` is like the iterator in c++
console.log(gen.next().value); // op: 1
console.log(gen.next().value); // op: 2
console.log(gen.next().value); // op: 3
console.log(gen.next().value); // op undefined

let gentTwo = numberGenerator();
console.log(gentTwo.next().value); // op: 1
console.log(gentTwo.next().value); // op: 2

//Generator function
/*
Generator function doesn't execute things all at once, but it actually creates the things
on the resume basis.You hit it once, it's going to generate one result, then you hit it 
again, it's going to generate the result again. Then you hit it again, it's going to
generate the result again. It doesn't execute the whole thing at once. And how do we 
make sure that how many times it's going to be called? It can remember that and it can
give you result based on that.
For this, there is a special keyword which says yield.
Whatever you want to yield.
Instead of the return, you can go ahead and use yield.
*/
