// https://techstacker.com/count-number-of-clicks-on-an-element-with-javascript/

// var buttonHome = documnent.querySelector(".button-home");
// var CountButtonHomeClicks = 0;

// buttonHome.addEventListener("click", function() {
  // CountButtonHomeClicks += 1;
  // console.log(CountButtonHomeClicks);
// });

var ele = document.getElementsByTagName('button');
     var numOfClick = 0;
     ele[0].addEventListener('click', function() {
      numOfClick = numOfClick + 1;
    });
