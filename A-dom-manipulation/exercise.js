/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const pElement = document.querySelectorAll("p");//exercise 1
console.log(pElement);



const firstDiv = document.querySelector("div");
console.log(firstDiv);



const elJumbotronText = document.querySelector("#jumbotron-text");
console.log(elJumbotronText)



const pElementInCountainer = document.querySelectorAll(".primary-content  p")
console.log(pElementInCountainer)
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertButton = document.querySelector("#alertBtn")
alertButton.addEventListener("click", alertText);
function alertText() {
    alert("Thanks for visiting Bikes for Refugees!")
}

 
    


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeTextButton = document.querySelector("#bgrChangeBtn")
const body = document.querySelector("body")
changeTextButton.addEventListener("click", function() {

   body.style.backgroundColor = "blue"
})





/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const addText = document.querySelector("#addTextBtn")
addText.addEventListener("click", newParagraph)
function newParagraph() {
 const newPara = document.querySelector(".jumbotron");
 const paragraph = document.createElement("p")
 paragraph.innerText = "Read more below"
 newPara.appendChild(paragraph);
}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinks = document.querySelectorAll("#largerLinksBtn")
largerLinks.addEventListener("click", )
