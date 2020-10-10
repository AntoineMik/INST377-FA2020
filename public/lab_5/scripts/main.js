
// Question 2
let myButtons = document.querySelectorAll('button');
myButtons.forEach(((bnt, i) => {
    bnt.style.marginRight = "10px";
    bnt.style.color = "red";
}));


// Question 3
let myCheckboxes = document.querySelector(".flex-inner li");
myCheckboxes.style.width = "95px"

//Question 4
let selct = document.querySelector(".flex-outer p");
selct.classList.add(".checkbox-list-label");

//Question 5
const newButton = document.createElement("button");
const btntext = document.createTextNode("Activate");
//newButton.toggleClass("Active");
newButton.setAttribute("type", "button");
newButton.appendChild(btntext);

document.querySelector("button").after(newButton);

//Question 6
newButton.addEventListener("click", testFunction);
newButton.addEventListener("click", changeToFruits());

//Question 7


function testFunction() {
    fetch('/api')
    .then((response) => response.text())
    .then((response) => {
         console.log(response);
         //Question 10
         document.querySelector("header h1").innerText = response;
         document.querySelector("title").innerText = response;

         console.log(document.querySelector("title"));
      })


      //Question 11
      document.body.style.backgroundColor = "blue";

      //Question 12
      document.querySelector(".flex-outer").style.margin = "auto";

    
}

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
