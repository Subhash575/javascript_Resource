//Here we learn about async- await in Javascript.
//When function take time to execution code asynchronously then we use the `async' and
// `await` keyword :- async is use on the function and await is use on the `Promise`

function userDataFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) resolve({ name: "Notify", url: "https://www.notify.com" });
      else reject("Error fetching data");
    }, 3000);
  });
}

/*
general way is using:-
userDataFetch().then(()=>{}).catch(()=>{})
*/

//For async and await way we create the function instead.

async function getUserData() {
  try {
    console.log(`Fetching user data.....`);
    const userInfo = await userDataFetch();
    console.log(`Data fetch successfully`);
    console.log("Data is : " + userInfo); // Data is : [object Object]
    //Obeject bcs you using + sign and object is converted into the string
    //In JavaScript, when an object is converted to a string, it uses its toString() method.
    //{}.toString(); // "[object Object]"

    console.log(`Data is : ${userInfo}`); // Data is : [object Object]
    //${expression} part still works like string concatenation.
    //JavaScript needs to turn whatever is inside ${} into a string.

    console.log(userInfo); // { name: 'Notify', url: 'https://www.notify.com' }

    //If you want to print the object inside a string:

    /*
    console.log("Data is : " + JSON.stringify(userInfo));
    Data is : {"name":"Notify","url":"https://www.notify.com"}

    or

    use template literals:
    console.log(`Data is : ${JSON.stringify(userInfo)}`);

    */

    console.log(`Data is: ${JSON.stringify(userInfo)}`);

    /*
    #Beginner tip:
    + with an object → converts it to a string ([object Object] by default).
    console.log(obj) → shows the actual object.
    Use JSON.stringify(obj) if you want the object inside a string.
    */
  } catch (error) {
    console.log(error);
  }
}

getUserData();
