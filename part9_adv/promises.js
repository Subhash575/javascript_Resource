//Here we learn about 'promises' in Javascript.
/*
We generally uses the promises to deal with the asynchoronus behaviour of Javascript.
*/

function fetchData() {
  //Promise declare using the new keyword and promise `take callback(fn)` which take
  //two parameter resolve or reject.
  //Here resolve and reject is nothing but function.
  /*
  In JavaScript Promises, resolve and reject are two callback functions passed as arguments to the executor function of a Promise constructor. They are used to signal the outcome of an asynchronous operation.
  */

  // ()=>{} (callback function)
  return new Promise((resolve, reject) => {
    //For asynchronus behaviour we use the `setTimeout`
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Data fetch successfully");
      } else {
        reject("Error in fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return `Subhash`;
  })
  .then((value) => {
    console.log(value);
    return;
  })
  .catch((error) => {
    console.error(error);
    // console.log(error);
  });

//Always remember `.then` or `.catch` take the call back
//Here we can also do the `.then` chaining
//In .then chaining the return statement of one .then is catch by the another .then

//Promise has three state: Pending, fulfilled and rejected.
