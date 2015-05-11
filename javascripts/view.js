var View = function() {}
//var $squares = $('.square p');
  // var squareBorders = document.querySelectorAll('.square');
//var $squareBorders = $('.square');
/*
View.prototype.markSquare = function(id, value) {
    $("#box"+id).text(value);
}
*/
    
View.prototype.markSquare = function(id, value) {
    $("#box"+id).html(value);
    $("#box"+id).removeClass().addClass(value);
}

/*
View.prototype.markSquare = function(id, value) {
    $("#box"+id).text(value);
}
*/

    
View.prototype.initListeners = function() {
  var parent = "";
  $('.square p').each(function() {
    $(this).click(function(event) {
      //console.log(event.target.id);
      game.makeMove(parseInt(event.target.id.match(/[0-8]/), 10));
    })});
  
  $("#reset").click(function() {
    game.initialize(game.player);
  });
}

/*
View.prototype.clearSquares = function() {
  $("[id^=box]").html("&nbsp");
}
*/

View.prototype.clearSquares = function() {
 $('.square p').each(function() {
    // or: $squares.each(function($el) {
      $(this).html('');
      // or:
      $(this).removeClass().addClass('blank');
    });
    $('.square').each(function() {
      $(this).removeClass().addClass('square');
    });
}

View.prototype.clearScoreBoard = function() {
  $("ul > li").text("0");
}

View.prototype.updateScoreBoard = function(player, score) {
  if (player === "tie") {
    $("ul > li").eq(1).text(score);
  }
  else if (player === "O") {
    $("ul > li").first().text(score);
  }    else { // X wins
    $("ul > li").last().text(score);
  }
}
