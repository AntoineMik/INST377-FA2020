

// Question 2
let myButtons = document.querySelector('button');
myButtons.style.marginRight = "10px";
myButtons.style.color = "red";

// Question 3
let myCheckboxes = document.querySelector(".flex-inner li");
myCheckboxes.style.width = "95px"

//Question 4
let selection = document.getElementsByName("Age");
//selection.classList.add(".checkbox-list-label");

//Question 5
const newButton = document.createElement("button");
const btntext = document.createTextNode("Activate");
//newButton.toggleClass("Active");
newButton.setAttribute("type", "button");
newButton.appendChild(btntext);

document.querySelector(".flex-outer").appendChild(newButton);

//Question 6
newButton.onclick = function(){
    //alert("You clicked me");
}

//Question 7


function testFunction() {
    fetch('/api')
    .then((response) => response.text())
    .then((response) => {
         console.log(response);
      })


      //Question 10
      let headerElmt = document.querySelector("header");
      let titleElmt = document.querySelector("title");

      //Question 11
      document.body.style.backgroundColor = "blue";

      //Question 12
      document.querySelector(".flex-outer").style.margin = "auto"

    
}

newButton.onclick(testFunction());


//Question 13
function changeToFruits() {
    fetch('/api')
    .then((response) => response.text())
    .then((response) => {
        const fruits = ["Apples", "Manfo", "Nuts"];
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