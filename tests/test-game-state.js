window.onload = function() {
  var game, badObject,
      playerPiece = "X", opponentPiece = "O",
      playerAvatar = "../assets/x.png", opponentAvatar = "../assets/circle.png",
      boardWidth = 3;
  test("Game State Initialization", function() {
    pause();
    setTimeout(function() {
      game = new Game(playerPiece, playerAvatar,
                            opponentPiece, opponentAvatar, boardWidth, boardWidth);
      assert(game.constructor === Game, "Instance of game points to Game constructor");
      game.initialize();
      assert(game.player.wins === 0 && game.opponent.wins === 0, "Initialize sets player & opponent wins to 0");
      game.player.incWins(10);
      game.startOver();
      assert(game.player.wins === 10 && game.opponent.wins === 0, "startOver() preserves wins");
      resume()
      }, 500);
  });
  test("Game Winners/Draw Tests", function() {
    pause();
    setTimeout(function() {
      game.initialize();
      for (var i=0; i<game.board.numSquares; i++) {
        game.board.setSquare(i, game.player);
      }
      assert(game.draw(), "draw() returns true upon no empty spaces");
      game.initialize();
      game.board.setSquare(0, game.opponent);
      game.board.setSquare(4, game.opponent);
      game.board.setSquare(2, game.opponent);
      assert(game.winner() != game.opponent, "winingRow() returns false for no winner");
      assert(game.winner() != game.opponent, "winingCol() returns false for no winner");
      assert(game.winner() != game.opponent, "winingDiag() returns false for no winner");
      assert(game.winner() != game.opponent, "winingReverseDiag() returns false for no winner");
      for (var i=0; i<game.board.numSquares; i+=3) {
        game.initialize();
        for (var j=0; j<game.board.width; j++) {
           game.board.setSquare(i+j, game.player);
        }
        assert(game.winner() === game.player, "winningRow() returns true for row: " + Math.floor(i/3));
      }
      for (var i=0; i<game.board.width; i+=1) {
        game.initialize();
        for (var j=0; j<game.board.numSquares; j+=3) {
           game.board.setSquare(i+j, game.player);
        }
        assert(game.winner() === game.player, "winningCol() returns true for column: " + Math.floor(i % 3));
      }
      game.initialize();
      for (var j=0; j<game.board.numSquares; j+=4) {
        game.board.setSquare(j, game.player);
      }
      assert(game.winner() === game.player, "winningDiag() returns true");
      game.initialize();
      for (var j=2; j<game.board.numSquares; j+=2) {
        game.board.setSquare(j, game.player);
      }
      assert(game.winner() === game.player, "winningReverseDiag() returns true");
      assert(game.gameOver() === game.player, "gameOver() returns true");
    }, 500);
  });
  test("Game Logic", function() {
    pause();
      for (var i=0; i<game.board.numSquares; i+=3) {
        game.initialize();
        for (var j=0; j<game.board.width; j++) {
           game.board.setSquare(i+j, game.player);
        }
        assert(game.isOver() === game.player, "isOver() returns true for row: " + Math.floor(i/3));
      }
    setTimeout(function() {
      }, 500);
  });
};
