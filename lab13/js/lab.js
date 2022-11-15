/**
Authors: Gloria Chim and Sabrina Pan
Class: ART101

**/

// @param: maxNums takes maximum number
// @para: factorObj takes object of inputs
function fizzBuzzBoom(maxNums, factorObj) {
  //iterate over all of out numbers
  for (var num = 0; num < maxNums; num++) {
    // reset outupt string
    var outputStr = "";
    // iterate over the factors we got from the html
    for (var factor in factorObj) {
      //check to see if num is a multiple of factors
      if (num % factor == 0) {
        //if yes, then add text to output string
        outputStr += factorObj[factor];
      }
    }
    // words in outputStr, format it like - "FizzBuzz!"
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

//wes' code for outputting to page
function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    document.getElementById("output").appendChild(newEl);
}


var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var num = document.getElementById("max").value;
  var factorObj = {};

  for (var i = 0; i < 3; i++) {
    //numId = "num" + i;
    //textId = "text" + i;
    numValue = document.getElementById("num" + i).value;
    textValue = document.getElementById("text" + i).value;
    console.log(i + ") num:", numValue, "text:", textValue)
    // if either value is blank, don't use it
    if (numValue && textValue) {
      factorObj[numValue] = textValue;
}
}
  //var factor = document.getElementById("num0").value;
  document.getElementById("output").innerHTML = "";
  fizzBuzzBoom(num, factorObj);

});
