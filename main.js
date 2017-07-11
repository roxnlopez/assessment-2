console.log("this is running");
//up and running!

//make some beginner var and globals
function Player(car, margin) {
  this.car = car;
  this.marginTop = margin;

  this.prepare = function() {
    $(this.car).css("marginTop", this.marginTop);
  };

  this.move = function() {
    $(this.car).css("margin-left", "+=10%");
  };
}

//need a play function with racers and the street
function Game() {
  var track = $('.racetrack');
  var player1 = new Player($('#p1'), "10%");
  var player2 = new Player($('#p2'), "10%");

//call listener function
  this.start = function() {
    player1.prepare();
    player2.prepare();
    setListener();
  };

//make listener function that uses keyup/down/allaround (look up key numbers)
  var setListener = function() {
    $(document).keyup(function(event) {
      if (event.which == 38) {
        player1.move();
      } else if (event.which == 40) {
        player2.move();
      }
//do conditional that shows if or how racer wins...don't lose your mind.
      if (parseInt($(player1.car).css("margin-left")) >= parseInt($(track).css("width"))) {
        gameOver("player1");
      } else if (parseInt($(player2.car).css("margin-left")) >= parseInt($(track).css("width"))) {
        gameOver("player2");
      }
  });
};
}

//make function to show winner and game is over...try to create reset button
var gameOver = function(winner) {
if (confirm("Game Over! " + winner + " wins! Hit ok to play again.")) {
    $(player1.car).css("margin-left", "0%");
    $(player2.car).css("margin-left", "0%");
  } 
};
