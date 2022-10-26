/**
  * Author: Gloria Chim and Sabrina Pan
  * Created: 10.17.2022
  *
  * (c) ART101 Class
  **/

// Define Variables


var myTransport = [" bus", " train", " car", " ufo", " airplane", " legs", " bike",
  " motorcycle", " scooter", " skateboard", " ship", " helicopter"];


myMainRide = {
  make : "Toyota",
  model : "Camry Le",
  color : "Light Blue",
  year : 2012,
  ownIt : true,
  age : function() { return 2022 - age;
  }
};


// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>", "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
