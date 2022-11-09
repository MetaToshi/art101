/**
Author: Gloria Chim and Sabrina Pan
Date: 11/9/22
Class: ART101

**/

// @str parameter takes input string
function sortingHat(str) {
  // counts the letters in str and assigns it to a variable lendth
  var length_string = str.length % 4;
  //
  if (length_string == 0) {
    return "Gryffindor";
  }
  else if (length_string == 1) {
    return "Hufflepuff";
  }
  else if (length_string == 2) {
    return "Ravenclaw";
  }
  else if (length_string == 3) {
    return "Slytherin";
  }
}

  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
  });
