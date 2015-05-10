/**
* @constructor Game
* Encapsulates all the logic related to tic-tac-toe
* @todo Allow board sizes > 3
*/
var Game = function(playerPiece, playerAvatar,
                    opponentPiece, opponentAvatar,
                    rows, cols) {
  this.nextTurn = null;
  this.player = new Player(playerPiece, playerAvatar);
  this.opponent = new Player(playerPiece, playerAvatar);
  this.board = new Board(rows, cols);
};

/**
* @method startOver
* @param {String} turn
* Sets up the board & DOM for the next Game
* players numWins are not reset
*/
Game.prototype.startOver = function(playerPiece) {
  this.nextTurn = playerPiece;
  this.board.clearBoard(null);
  this.board.numOccupied = 0;
}

/**
* @method initialize
* Called upon refreshing the browser
*/
Game.prototype.initialize = function() {
  this.player.wins = 0;
  this.opponent.wins = 0;
  this.board.clearBoard(null);
}

Game.prototype.makeMove = function() {
}
  
/**
* @method isGameOver
* Determine if there's a winner or draw and
* return that information back to caller
*/
Game.prototype.gameOver = function() {
  return this.winner() || this.draw();
}

Game.prototype.draw = function() {
  return this.board.numOccupied >= this.board.numSquares;
}

Game.prototype.winner = function() {
  return this.winningRow() || this.winningCol() ||
    this.winningDiag() || this.winningReverseDiag();
}

Game.prototype.winningRow = function() {
  var winner = false, index = 0, numChecks = 0;
  while (!winner && numChecks < this.board.width) {
    candidate = this.checkLine(index, 1);
    index += 3;
    numChecks += 1;
    winner = (candidate === this.player ||
              candidate === this.opponent);
  };
  return candidate;
}

Game.prototype.winningCol = function() {
  var winner = false, index = 0, numChecks = 0;
  while (!winner && numChecks < this.board.width) {
    candidate = this.checkLine(index, 3);
    index += 1;
    numChecks += 1;
    winner = (candidate === this.player ||
              candidate === this.opponent);
  };
  return candidate;
}

Game.prototype.winningDiag = function() {
  return this.checkLine(0, 4);
}

Game.prototype.winningReverseDiag = function() {
  return this.checkLine(2, 2);
}

Game.prototype.checkLine = function(index, increment) {
  var comparator = this.board.getSquare(index);
  var nextIndex = index + increment;
  var candidate = true;
  var numChecks = 1;
  while (candidate && numChecks < this.board.width) {
    candidate = (this.board.getSquare(nextIndex) === comparator);
    nextIndex += increment;
    numChecks += 1
  }
  return (candidate) ? comparator : null;
}
