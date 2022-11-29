/**
Authors: Gloria Chim and Sabrina Pan
Class: ART101

**/


// http://xkcd.com/614/info.0.json

var URL1 = "https://xkcd.com/";
var URL2 = "info.0.json";
var click = 1;

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var newURL = URL1 + numStr + URL2;
  // get data via ajax from numbersapi
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (ENDPOINT)
      url: newURL,
      // Whether this is a POST or GET request
      type: "GET",
  })
  // If the request succeeds
  .done(function(comicObj) {
      // console.log(comicObj);
      var imageUrl = comicObj.img;
      var title = comicObj.title;
      //console.log("title:", title);
      var alt = comicObj.alt;
      //console.log("alt:", alt);
      //var comicNum = comicObj.num;
      var html = `<div id="image">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prev">PREVIOUS</button><button id="next">NEXT</button>
        </div>`
      // console.log("New html: \n", html);
      $("#output").html(html);

      // add event listener to new prev button
      $("#prev").click(function(){
        getComic(click - 1);
        click -= 1; //DONT SPAM PREVIOUS AT Barrel and Faucet COMICS (if you do spam next) D:
      });
      // add event listener to new next button
      $("#next").click(function(){
        getComic(click + 1);
        click += 1;
      });
  })
  .fail(function(){
    console.log("DO NOT WORRY THIS IS FINE :D");
  })
}

// start the hecking api :>
getComic();
