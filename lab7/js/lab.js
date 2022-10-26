/**
  * Author: Gloria Chim and Sabrina Pan
  * Created: 10.24.2022
  *
  * (c) ART101 Class
  **/

  /**
    * sortUserName - function that takes user input and sorts letters in name
    * @return {nameSorted}
  */
  function sortUserName() {
    var userName = window.prompt("Hello! Please tell me your name so I can modify it.");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split("");
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join("");
    console.log("nameSorted =", nameSorted);
    // userName.toLower().split("").sort().join
    return nameSorted;
  }

  document.writeln("Your name but correct: ", sortUserName(), "</br>");
