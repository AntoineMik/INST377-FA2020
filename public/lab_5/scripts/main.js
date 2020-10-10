

// Question 2
let myButtons = document.querySelector('button');
myButtons.style.marginRight = "10px";
myButtons.style.color = "red";

// Question 3
let myCheckboxes = document.querySelector(".flex-inner li");
myCheckboxes.style.width = "95px"

//Question 4
let selection = document.getElementsByName("Age");
selection.classList.add(".checkbox-list-label");

//Question 5
const newButton = document.createElement("newBtn");
newButton.toggleClass("active");
newButton.setAttribute("type", "button");

//Question 6
newButton.onclick = function(){
    alert("You clicked me");
}

//Question 7

//Question 10

function testFunction() {
    fetch('/api')
    .then((response) => response.text())
    .then((response) => {
         console.log(response);
      })
    
}


//Question 12


//Question 13
function changeToFruits() {
    fetch('/api')
    .then((response) => response.text())
    .then((response) => {
        const fruits = ["Apples", "Manfo", "Pineapple"];
        const checks = document.querySelectorAll(".flex-inner label");
        console.log(checks.length, checks[0]);
        checks.forEach(((check, i) => {
            console.log(check, i);
            check.innerText = fruits[i];
        }));
         console.log(response);
      })
}

 newButton.onclick(changeToFruits());



/*function clickSubmit()
{
    const content = document.querySelector();
    content.innerHTML = "";
}
*/