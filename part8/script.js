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

//----------------------------------------------------------------------------------------
//Example 6: Event Handling in the DOM
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    //We can learn more eventListner like `click`, `dbclick` etc in mdn according to need.
    alert("Event Has occured");
  });

//----------------------------------------------------------------------------------------

//Example 7: Event Delegation --->revise
document.getElementById("teaList").addEventListener("click", function (event) {
  //For checking which element you click we use `event.target` here we pass the `event`
  //on the function for use.

  // event.target.matches(".teaItem") without this our code as work here.
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

//-----------------------------------------------------------------------------------------

//Example 8: Form Handling
document
  .getElementById("feedbackFrom")
  .addEventListener("submit", function (event) {
    //(v.imp): If we don't use preventDefault() the form/Browser is reload after submitting
    //the from and you cannot further use form data for validation. It is very important
    //in react bcs it will create a break point if we don't use it.
    // console.log("form is submitted");
    //uncomment above code and see in the console of browser when you submitting the form
    //if will immediately reload after submit the form and you can see only glimpse of
    //log there.

    //We can use `event` or `e'
    event.preventDefault();
    // console.log("form is submitted");
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = feedback;
    console.log(document.getElementById("feedbackDisplay").textContent);
  });

//----------------------------------------------------------------------------------------

//Example 9: DOM content loaded

//When DOM is loaded what some common activites we do is maybe you want to query to the
//database maybe you want to grab CDN files and some images etc.

//You reload the DOM by reloading the Browser.
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM is fully loaded";
});

//-----------------------------------------------------------------------------------------

//Ex: 10. CSS classes Manipulation

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");

    //This will add `highlight` class on the element only not toggle(do and undo) it.
    // descriptionText.classList.add("highlight");

    //for toggle we use `toggle` method
    //We can use this for dark/white mode
    descriptionText.classList.toggle("highlight");
  });
