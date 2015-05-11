const emptySpace = null;
var game = null;

/**
* @constructor Game
* Encapsulates all the logic related to tic-tac-toe
* @todo Allow board sizes > 3
*/
var Game = function(playerAvatar,  opponentAvatar, rows, cols) {
  this.turn = emptySpace;
  this.player = new Player(playerAvatar);
  this.view = new View();
  this.opponent = new Player(opponentAvatar);
  this.board = new Board(rows, cols);
  this.board.clearBoard(emptySpace);
  this.ties = 0;
};

/**
* @method startOver
* @param {String} turn
* Sets up the board & DOM for the next Game
* players numWins are not reset
*/
Game.prototype.startOver = function(player) {
  this.turn = player;
  this.board.clearBoard(emptySpace);
  this.view.clearSquares();
}

/**
* @method initialize
* Called upon player selecting either X or O
* box. Here player's wins are set to 0;
*/
Game.prototype.initialize = function(player) {
  this.player.wins = 0;
  this.opponent.wins = 0;
  this.turn = player;
  this.ties = 0;
  this.board.clearBoard(emptySpace);
  this.view.clearScoreBoard();
  this.view.clearSquares();
}

/**
* @method makeMove()
* @param index - index on board that player/opponent has selected
* Update the board with a player's move. Check for draw or win
* and call the appropriate methods based on result
*/
Game.prototype.makeMove = function(index) {
  var candidate = emptySpace;
  var that;

  if (this.board.getSquare(index) === emptySpace) {
    this.board.setSquare(index, this.turn);
    this.view.markSquare(index, this.turn.avatar);
    that = this;
    if (candidate = this.over()) {
      if (candidate === this.turn) {
        this.turn.wins += 1;
        this.view.updateScoreBoard(this.turn.avatar, this.turn.wins);
        setTimeout(function() {
          that.startOver((that.turn === that.player) ? that.opponent : that.player);
          }, 2000);
      }
      else {
        this.ties += 1;
        this.view.updateScoreBoard("tie", this.ties);
        setTimeout(function() {
          that.startOver((that.turn === that.player) ? that.opponent : that.player);
          }, 2000);
      }
    }
    else {
      this.view.markSquare(index, this.turn.avatar);
      this.turn = (this.turn === this.player) ? this.opponent : this.player;
    }
  }
}
  
/**
* @method over
* Determine if there's a winner or draw and
* return that information back to caller
*/
Game.prototype.over = function() {
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
  var candidate = null, index = 0, numChecks = 0;
  while (!candidate && numChecks < this.board.width) {
    candidate = this.checkLine(index, 1);
    index += 3;
    numChecks += 1;
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
  if (comparator != emptySpace) {
    var nextIndex = index + increment;
    var candidate = true;
    var numChecks = 1;
    while (candidate && numChecks < this.board.width) {
      candidate = (this.board.getSquare(nextIndex) === comparator);
      nextIndex += increment;
      numChecks += 1
    }
    return (candidate) ? comparator : null;
  } else {
    return null;
  }
}

$(document).ready(function() {
  game = new Game("X", "O", 3, 3);
  game.view.initListeners();
  alert("Press Reset Button to begin playing");
});
