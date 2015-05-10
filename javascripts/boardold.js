/**
* @constructor Board
* @param {Int} size 
*/
var Board = function(size) {
  this.size = size;
  var MAX_BOARD_SIZE = 3;
  var that = this;
  this.board = function() {
    if (that.size % 2 !== 0 || that.size >= MAX_BOARD_SIZE) {
      new Array(that.size*that.size);
    }
    else {
      throw new BoardSizeException(that.size);
    }
}

/**
* @function BoardSizeException
* @param size
* Called when board size constructer detects that
* the board size does not meet 
*/
function BoardSizeException(size) {
  this.value = size;
  this.message = " does not match board size limitations."
  this.toString = function() {
    return this.value + this.message
  }
}
