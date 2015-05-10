var View = function() {}

View.prototype.markSquare = function(id, value) {
    $("#box"+id).text(value);
}
    
View.prototype.initListeners = function() {
  $(".box").each(function() {
    $(this).click(function(event) {
      game.makeMove(parseInt(event.target.id.match(/[0-8]/), 10));
    })});
  
  $("#reset").click(function() {
    game.initialize(game.player);
  });
}

View.prototype.clearSquares = function() {
  $("[id^=box]").html("&nbsp");
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
