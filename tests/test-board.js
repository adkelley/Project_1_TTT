window.onload = function() {
  var good, bad;
  test("Board Construction & Initialization", function() {
    pause();
    setTimeout(function() {
      good = new Board(3, 3);
      assert(good.constructor === Board, "Instance of board points to Board constructor");
      good.clearBoard("");
      assert(good.board.length === good.numSpaces, "Board length proves board array was allocated");
      assert(good.getSquare(8) === "", "Board cleared by assiging space to each box");
      assert(function(){
        try {
          bad = new Board(9, 9);
          return false; // if we reach here then its an error
        } catch(e) {return (e instanceof BoardSizeException) };
      }, "Illegal board size throws an error");
      resume();
      }, 500);
  });
  test("Board Getters/Setters", function() {
    pause();
    setTimeout(function() {
      good.setSquare(1, "X");
      assert(good.getSquare(1) === "X", "get/setSquare() working");
      good.clearBoard("");
      assert(good.getSquare(Math.floor(Math.random()*good.numSpaces)) === "", "clearBoard working");
      resume();
      }, 500);
  });
};
