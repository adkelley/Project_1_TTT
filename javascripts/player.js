/**
* @constructor Player
* @param {string} piece "X" or "O"
* @param {string} pathToAvatar png file
*/
var Player = function(pathToAvatar) {
  this.wins = 0;
  this.avatar = pathToAvatar;     
}

/**
* @function getWins 
* Returns player # wins
*/
Player.prototype.getWins = function() {
  return this.wins;
}

/**
*  @function setWins initializes player wins to 'wins'
*  this can be used to initialize wins to 0 or resume
*  with #wins after browser referesh
*/
Player.prototype.setWins = function(wins) {
  this.wins = wins;
}

/**
* @function incWins
* @param inc increment (e.g., 1)
* Increments player # wins
*/
Player.prototype.incWins = function(inc) {
  this.wins += inc;
}

/**
* @function chooseAvatar 
* return relative path of Player avatar
* @todo Implement this
*/
Player.prototype.chooseAvatar = function() {
}

/**
* @function setAvatar 
* @param filePath the url to assign to Player avatar
* Set the relatative path of player avatar
* @todo Check for valid path
* @todo Is this really necessary?
*/
Player.prototype.setAvatar = function(pathToAvatar) {
  this.avatar = pathToAvatar;
}
