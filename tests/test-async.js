window.onload = function() {
    test("Async Test #1", function() {
      pause();
      setTimeout(function() {
        assert(true, "First test completed");
        assert(false, "Second of Async #1 completed");
        resume();
      }, 500);
    });
    test("Async Test #2", function() {
      pause();
      setTimeout(function() {
        assert(true, "Second test completed");
        resume();
      }, 500);
}); };
