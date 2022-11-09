/**
Author: Gloria Chim and Sabrina Pan
Date: 11/9/22
Class: ART101

**/

// @str parameter takes input string
function sortingHat(str) {
  // counts the letters in str and assigns it to a variable lendth
  var length_string = str.length % 4;

  if (length_string == 0) {
    return "Gryffindor - Gryffindor house is where you would find the pluckiest \
    and most daring students (there's a reason the house symbol is the brave lion).\
    The house colours are scarlet and gold, the common room lies up in Gryffindor \
    Tower and the Head of House is Professor Minerva McGonagall.";
  }
  else if (length_string == 1) {
    return "Hufflepuff - they value hard work, patience, loyalty, and fair play.\
     The house has produced its share of great wizards - not least Newt Scamander,\
     author of Fantastic Beasts and Where to find Them.";
  }
  else if (length_string == 2) {
    return "Ravenclaw - Ravenclaws possess the traits of cleverness, wisdom, wit,\
     intellectual ability and creativity. According to Slytherin prefect Gemma\
     Farley, Ravenclaws are so competitive when it comes to academic success that\
     they are known to back stab each other, and likely other students, in order \
     to get top marks.";

  }
  else if (length_string == 3) {
    return "Slytherin: Each house has a set of traits and characteristics \
    associated with it, and those in Slytherin are known for being ambitious,\
    cunning, and resourceful. Slytherins are also sometimes regarded as being\
    evil thanks to the fact that many of the most sinister witches and wizards \
    have been associated with this house.";
  }
}

  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
  });
