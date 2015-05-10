const MAX_BOARD_SIZE = 9;

/**
* @constructor Board
* @param {Int} size 
*/
var Board = function(width) {
  this.width = width;
  this.numSquares = width*width;
  this.numOccupied = 0;
  this.allocBoard();
}

/**
* @method allocBoard
* @param size
* Alloc new Array for board.  Throw error if board
* size doesn't meet size guidelines
*/
Board.prototype.allocBoard = function() {
  if (this.width % 2 !== 0 && this.numSquares <= MAX_BOARD_SIZE) {
    this.board = new Array(this.numSquares);
  }
  else {
    throw new BoardSizeException(this.numSquares);
  }
};

/**
* @function BoardSizeException
* @param squares
* Called when board size constructer detects that
* the board size does not meet 
*/
function BoardSizeException(squares) {
  this.value = squares;
  this.message = " does not match board size limitations."
  this.toString = function() {
    return this.value + this.message
  }
}

/**
* @method clearBoard
* @param {string} blank denotes space is clear
* Clears the board of X's & O's
* @todo How can I call setSquare()?
*/
Board.prototype.clearBoard = function(blank) {
  for (var i=0; i<this.numSquares; i++) {
    this.board[i] = blank;
  }
  this.numOccupied = 0;
};

/**
* @method getSquare
* @param square;
* return the piece (O, X or empty) occupying the square
* on the board
*/
Board.prototype.getSquare = function(square) {
  return this.board[square];
}

/**
* @Method setSquare
* @param {Integer} square
* @param {String} value
*/
Board.prototype.setSquare = function(square, value) {
  this.board[square] = value;
  this.numOccupied += 1;
};
