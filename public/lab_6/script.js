// You may wish to find an effective randomizer function on MDN.

//const { inArray } = require("cypress/types/jquery");

//const { default: countries } = require("./countries");

//Random function from MDN
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      // Resetting.
      if(document.querySelector(".flex-inner"))
      {
        document.querySelector(".flex-inner").remove();
      }

      // Getting ten random countries from the returned value. Making sure no repeat. (Brute force)
      const randCountries = range(10).map(() => {
        const knownCountries = [];
        ran = getRandomIntInclusive(0, 243);
        if ($.inArray(ran, knownCountries) > - 1)
        {
          ran = getRandomIntInclusive(0, 243);
        }

        knownCountries.push(ran);

        return fromServer[ran]});
      console.table(randCountries);

      //Sorting the countries in reverse alphabetic order
      const sortedCountries = randCountries.sort((a, b) => sortFunction(b, a, "name"));
      console.log(sortedCountries);

      //const sortedCountries2 = randCountries.sort((a, b) => sortFunction(a, b, "name"));

      // Adding ordered list element with flexinner
      const orderedlist = document.createElement("ol");
      orderedlist.className = "flex-inner";
      $("form").prepend(orderedlist);

      // Injecting list elements
      sortedCountries.forEach((elmt) => {
        const newList = document.createElement("li");
        $(newList).append(`<input type = "checkbox" value = ${elmt.code} id = ${elmt.code} />`);
        $(newList).append(`<label for = ${elmt.code} > ${elmt.name} </label>`);

        $(orderedlist).append(newList);
      });
      console.log(orderedlist);

      console.log('fromServer', fromServer);
    })
    .catch((err) => console.log(err));
});