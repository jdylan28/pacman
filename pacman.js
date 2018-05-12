// when the ballRollButton is clicked, run a function that adds the 'ball-roll' class to the box
$("#pac-man").on("click", function makeItMove() {
    $("#pac-man").addClass("run");
  });
  
  // reset the class when any animation on the box element ends
  $("#pac-man").on("animationend", function cleanUp() {
    $("#pac-man").removeClass();
  });
  
  