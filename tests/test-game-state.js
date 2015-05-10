window.onload = function() {
  var game, badObject,
      playerPiece = "X", opponentPiece = "O",
      playerAvatar = "../assets/x.png", opponentAvatar = "../assets/circle.png",
      boardWidth = 3;
  test("Game State Initialization", function() {
    pause();
    setTimeout(function() {
      game = new Game(playerAvatar,opponentAvatar, boardWidth, boardWidth);
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
      game.initialize(game.opponent);
      for (var i=0; i<game.board.numSquares; i++) {
        game.board.setSquare(i, game.turn);
      }
      assert(game.draw(), "draw() returns true upon no empty spaces");
      game.initialize(game.player);
      game.board.setSquare(0, game.turn);
      game.board.setSquare(4, game.turn);
      game.board.setSquare(2, game.turn);
      assert(game.winner() != game.opponent, "winingRow() returns false for no winner");
      assert(game.winner() != game.opponent, "winingCol() returns false for no winner");
      assert(game.winner() != game.opponent, "winingDiag() returns false for no winner");
      assert(game.winner() != game.opponent, "winingReverseDiag() returns false for no winner");
      for (var i=0; i<game.board.numSquares; i+=3) {
        game.initialize(game.opponent);
        for (var j=0; j<game.board.width; j++) {
           game.board.setSquare(i+j, game.turn);
        }
        assert(game.winner() === game.opponent, "winningRow() returns true for row: " + Math.floor(i/3));
      }
      for (var i=0; i<game.board.width; i+=1) {
        game.initialize(game.player);
        for (var j=0; j<game.board.numSquares; j+=3) {
           game.board.setSquare(i+j, game.turn);
        }
        assert(game.winner() === game.turn, "winningCol() returns true for column: " + Math.floor(i % 3));
      }
      game.initialize(game.opponent);
      for (var j=0; j<game.board.numSquares; j+=4) {
        game.board.setSquare(j, game.turn);
      }
      assert(game.winner() === game.turn, "winningDiag() returns true");
      game.initialize(game.player);
      for (var j=2; j<game.board.numSquares; j+=2) {
        game.board.setSquare(j, game.turn);
      }
      assert(game.winner() === game.turn, "winningReverseDiag() returns true");
      assert(game.over() === game.turn, "over() returns true");
      resume()
       }, 500);
  });
  test("Game Logic", function() {
    pause();
    setTimeout(function() {
      game.initialize(game.player);
      assert(game.over() != game.player && game.over() != game.opponent, "Empty board is not a winner");
      for (var i=0; i<game.board.numSquares; i+=3) {
        game.initialize(game.player);
        for (var j=0; j<game.board.width; j++) {
          game.board.setSquare(i+j, game.turn);
        }
        assert(game.over() === game.turn, "isOver() returns true for row: " + Math.floor(i/3));
      }
      game.initialize(game.player);
      for (var i=0; i<3; i+=1) {
        game.makeMove(i);
        game.makeMove(i+3);
      }
      assert(game.over() === game.player, "Console logged game over, over returned true");
      game.initialize(game.opponent);
      for (var i=0; i<game.board.numSquares; i++) {
        game.makeMove(i);
      }
      assert(game.over(), "draw() returns true upon no empty spaces");
      resume()
       }, 500);
  });
};
