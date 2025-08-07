//Here we learn about 'promises' in Javascript.
/*
We generally uses the promises to deal with the asynchoronus behaviour of Javascript.
*/

function fetchData() {
  //Promise declare using the new keyword and promise take callback(fn) which take
  //two parameter resolve or reject.
  //Here resolve and reject is nothing but function.

  // ()=>{} (callback function)
  return new Promise((resolve, reject) => {
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
  });

//Always remember `.then` or `.catch` take the call back
//Here we can also do the `.then` chaining
//In .then chaining the return statement of one .then is catch by the another .then

//Promise has three state: Pending, fulfilled and rejected.
