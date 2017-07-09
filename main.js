
var player1 = document.createElement('.blue');

function player1() {
  this.x = 0;
  this.y = 0;
}

player1.prototype.draw = function(context) {
  context.fillRect(this.x, this.y, 32, 32);
};

player1.prototype.moveLeft = function() {
  this.x -= 1;
};

player1.prototype.moveRight = function() {
  this.x += 1;
};

player1.prototype.moveUp = function() {
  this.y -= 1;
};

player1.prototype.moveRight = function() {
  this.y += 1;
};


game.start = function () {
	game.player = new Player();	
};



player1.addEventListener("click", function(){
	$(this).keydown();
});


red.addEventListener("click", function(){
	$(this).keydown();
});