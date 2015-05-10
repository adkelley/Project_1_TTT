window.onload = function() {
  var playerX, playerY;
  test("Players Initialized", function() {
    pause();
    setTimeout(function() {
      playerX = new Player("X", "../assets/x.png");
      assert(playerX != undefined, "Player X initalized");
      playerO = new Player("O", "../assets/circle.png");
      assert(playerO != undefined, "Player O initalized");
      assert(playerX.piece === "X", "playerX piece is X");
      assert(playerX.wins === 0, "playerX wins is 0");
      assert(playerO.piece === "O", "playerO piece is O");
      assert(playerO.wins === 0, "playerO wins is 0");
      resume();
      }, 500);
  });
  test("Players Getters/Setters", function() {
    pause();
    setTimeout(function() {
      playerX.incWins(10);
      assert(playerX.wins === 10, "incWins() sets playerX.wins to 10");
      playerX.setWins(0);
      assert(playerX.wins === 0, "setWins() sets playerX.wins to 0");
      playerO.setAvatar("../assets/circle.png");
      assert(playerO.getAvatar() === "../assets/circle.png", "playerO avatar set/get");
      resume();
      }, 500);
  });
};
