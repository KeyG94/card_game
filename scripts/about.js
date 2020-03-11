// refer to question 3 before development starts for scope document

//On the about page. Replace the word “Magic” with the “Something”
//in all the text inside the div with “aboutText” ID attached to it.

document.addEventListener("DOMContentLoaded", function replaceMagicWithSomething() {
  let textToChange = document.getElementById('aboutText').innerHTML;
  let editedText = textToChange.replace(/Magic/g, "Something");

  document.getElementById('aboutText').innerHTML = editedText;
});

//Also on the about us page there is a div with and ID “moreInfoTrigger” 
//it should look like the image below.

//If you click on this heading it should toggle 
//display: block and display none on the div with the “moreInfoContent” ID attached to it.
//If style is display block it should look like the image below:

document.getElementById('moreInfoTrigger').addEventListener("click", toggleDiv);

function toggleDiv() {
  let y = document.getElementById("moreInfoContent");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
};