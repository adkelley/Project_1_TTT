window.onload = function() {
  var playerX, playerY;
  var XAvatar = "../assets/x.png";
  var OAvatar = "../assets/circle.png"
  test("Players Initialized", function() {
    pause();
    setTimeout(function() {
      playerX = new Player(XAvatar);
      assert(playerX != undefined, "Player X initalized");
      playerO = new Player(OAvatar);
      assert(playerO != undefined, "Player O initalized");
      assert(playerX.avatar === XAvatar, "Player Avatar set correctly");
      assert(playerX.wins === 0, "playerX wins is 0");
      assert(playerO.avatar === OAvatar, "playerO Avatar set correctly");
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
      playerO.setAvatar(OAvatar);
      assert(playerO.getAvatar() === OAvatar, "PlayerO avatar set");
      resume();
      }, 500);
  });
};
