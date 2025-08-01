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
