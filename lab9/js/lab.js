/**
  * Author: Gloria Chim and Sabrina Pan
  * Created: 10.31.2022
  *
  * (c) ART101 Class
  **/

// get element by id
var outputEl = document.getElementById("output");

// create new elements
var new1El = document.createElement("p");
var new2El = document.createElement("p");

// assigns new string to elements
new1El.innerHTML = "Scaramouche is here!!";
new2El.innerHTML = "C6 R5 speedrun any%";

// appends elements to child
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// change css attributes
new1El.style.color= "#cfa5ff "
new2El.style.fontSize="40px";
