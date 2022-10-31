/**
  * Author: Gloria Chim and Sabrina Pan
  * Created: 10.26.2022
  *
  * (c) ART101 Class
  **/

// function
function yourFunctionName(x) {
    var results = x + 4;
    return results;
}

// array and test functions
var num = [1, 2, 3, 4, 5, 6];
console.log ("Answer:", yourFunctionName);

var result = num.map(yourFunctionName);

console.log("Results:", result);

var result = num.map(function(x){
  return x ** 4;
})
console.log("Power of 4 of the array:", result);

var outputEl = document.getElementById("output");
outputEl.innerHTML = result; // put results here

// timer callback
const message = function() {
    console.log("This message is shown after 5 seconds");
}

setTimeout(message, 5000);

// question 3
function callbackFunction(y) {
  return y + " This is a string!"
}

console.log("Callback:", callbackFunction(result));
