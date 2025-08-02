//Learning About DOM with some challenges.

// Example 1: Accessing DOM element.

//1.Way:- Using onclick() to call the function.

// function textChange() {
//   document.getElementById("myParagraph").innerHTML = "Paragraph is change";
// }

// 2.Way :- Doing all the things using Js not touching html code.

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let p = document.getElementById("myParagraph");
    //We have access of paragraph here or we can say it hold the paragraph.
    p.textContent = "Paragraph Change";
  });

//---------------------------------------------------------------------------------------

// Example 2: Traversing the DOM

document
  .getElementById("higlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");

    //Learning:-

    //To access the first child in the nested tag we use the `firstElementChild' property
    // console.log(citiesList.firstElementChild);

    //To list the tag on the tag we use this property here:
    // console.log(citiesList.firstElementChild.classList);

    citiesList.firstElementChild.classList.add("highlight");
    //add is the method which take the `listName` here that `class `is `highlisght'
  });
//--------------------------------------------------------------------------------

// Example 3: Manipulating DOM Element

document.getElementById("changeOrder").addEventListener("click", function () {
  //One way
  // document.getElementById("coffeeType").textContent = "Espresso";

  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";

  //We can also use `css-property' as well:-
  coffeeType.style.backgroundColor = "Blue";
  coffeeType.style.padding = "5px";
});

//----------------------------------------------------------------------------------------

// Example 4: Creating and Inserting Elements
let cnt = 1;
document.getElementById("addNewItem").addEventListener("click", function () {
  let shoppingList = document.getElementById("shoppingList");
  let li = document.createElement("li");
  li.textContent = `item${cnt++}`;
  shoppingList.appendChild(li);
});

//-----------------------------------------------------------------------------------------

// Example 5: Removing the DOM Element
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");

    //This will remove the entire list
    // taskList.remove();

    //To remove the last child we need to use the following  property.
    taskList.lastElementChild.remove();
  });
