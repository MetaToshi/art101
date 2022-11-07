/**
  * Author: Gloria Chim and Sabrina Pan
  * Created: 11.7.2022
  *
  * (c) ART101 Class
  **/

//button names
$('#challenge').append('<button id ="buttonChalEl"> UWU </button>');

$('#problems').append('<button id="buttonProbEl"> OWO </button>');

$('#results').append('<button id="buttonResEl"> EWE </button>');

//click events
$('#buttonChalEl').click(function(){
  $('#challenge').toggleClass("special");
});

$('#buttonProbEl').click(function(){
  $('#problems').toggleClass("special");
});

$('#buttonResEl').click(function(){
  $('#results').toggleClass("special");
});

// output also changes color
$('#buttonResEl').click(function(){
  $('#output').toggleClass("special");
});
