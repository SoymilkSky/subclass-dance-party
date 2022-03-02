$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });

  $('.lineUpDancerButton').on('click', function (event) { // verticall
    var left = 0; // var top = 0;
    window.dancers.forEach(function (item) {
      // I think we can also do a vertical alignment just in case since
      // the assignment says to line them up on one side of the stage? idk .
      // kk
      item.lineUp(left); // item.lineUp(top);
      left += 100; // top += 100;
    });
    // declare a variable that will determine which pixel all the dancers will line up on
    // loop through all dancers on the page
    // for each of the dancers, get their left value and set it to be the lineup value
  });

  // $('img').mouseover(function () {
  //   $('#listen').css({ transform: 'scale(2)' });
  // }).mouseout(function () {
  //   $('#listen').css({ transform: 'scale(1.0)' });
  // });

  $('.jumpy').hover(function () {
    $('.jumpy').css('background-color', "lightblue");
  }, function () {
    $('.jumpy').css("background-color", "white");
  });


  // $('.congaLineButton').on('click', function (event) { // horizontal
  //   var left = 0;
  //   window.dancers.forEach(function (item) {
  //     item.lineUp(left);
  //     left += 100;
  //   });
  // });
});

