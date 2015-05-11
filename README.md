#WDI: First Project

###Intro
Below is an overview of my process and the tools I used to create a simple game of Tic-Tac-Toe.  It mimics the paper-and-pencil game for two players, 
X and O, who take turns marking the spaces in a 3x3 grid. The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal row wins the game.
### Process
1. **Design the Mockup**.
  I first created a visual mockup of the possible states of Tic-Tac-Toe in wireframe mode. This helped to me to focus on state,
  postponing the majority of the style decisions until after the logic code was finalized and a static html mockup completed.
  
  The game states I determined and mocked were as follows (click the links to view the original mockup):
  1. [Who Starts?][Fig1]: After refreshing browser, the player scores are set to 0, and the board is cleared.  The panel will prompt either player to make the first move.
  The first player to select an Avatar (*X* or *O*) makes the first move.  
  This player continues to be X or O for as many games played until the browser is refreshed.  Player scores (located below the Avatars) are updated after each game.
  2. [Go!][Fig2]: shows X has decided to go first.  Subsequently, O's avatar is dimmed in order to reinforce that it is X's move.
  3. [Contemplate Move][Fig3]: As X (or O) hovers over the board, contemplating their move, a semi-transparent X is displayed.  A gear icon spins to reinforce the _move contemplation_ state.
  4. [Make Move][Fig4]: X has made her move by clicking her move by clicking her mouse.  Her move (X) becomes opaque, while her avatar becomes semitransparent.
  The message panel reinforces that O should now make his move.  Subsequently, *States* 2 & 3 are repeated for O.
  5. [I win!][Fig5]: X has won the game by placing three X's in a row, column or diagonal.  X's score is incremented by 1, to reflect this win.
  Its also possible to create a _Tie_ state at this junction (see below)
  6. [Tie][Fig6]: Neither X or O have managed to place 3 of their pieces in row.  Given there are no more spaces, the game is a Tie! and neither score is incremented.  


2. **Determine Classes (Functions) and their Methods**.  The Mockup, depicting the various States in the game, helped me to determine the Classes and Methods I would need to implement the design of the game.   To ensure a clear *Seperation of Concerns*, keeping shared knowledge to a minimum, I determined I would need a **Player**, **Board**, **Game State**, and **View** class. Once I understood the classes, I began brainstorming the methods 
I would need for each of the classes.  Later on, during the implementation,  it became clear that I didn't spent enough time on this task.  If I had spent more time working on paper, I don't believe I would have spent so much time iterating on method choices within code. A tool for declaring and organizing my methods would have helped here.

3. **Set up the directory structure and files**. Besides the standard directory boilerplate (e.g., javescripts), the previous step helped me to 
determine the files for this project (i.e., one javascript was assigned per Class).
 
4. **Test Driven Development**.  I like TDD because it helps me to focus on developing and fully testing one Class and its methods at a time.  I set up a test harness, creating a separate directory for all my tests.  I started with the Player class and methods, then moved onto the Test, and Game State classes. By the time I reached the View class and methods, I was confident that my Game logic and properties were fairly solid.  Thus coding the View methods was relatively easy, knowing that I was standing on firm logic implemention ground.

5. **First Draft**.  I used the HTML and CSS from my imperative implementation of Tic-Tac-Toe to ensure that everything was working properly.  I was p
leasently surprised at how little time it took, giving me further confidence that my underlying implementation was sound.

6. **Final Design Implementation**.  My daugther, Hana, is a visual designer,  so I asked her to provide me with a design that reflected my mockup.
She gets full credit for choosing the fonts, colors, and avatars for the game. Her design required a new structure and style from my previous implementation.  Given my limited experience with HTML and CSS, I spent more time creating the HTML and CSS than I had anticipated. In the end, I wasn't able to fully implement the structure and style outlined in her design. For example, I didn't understand how to implement her choice of font (Gotham Book) or her avatars, which are png files. The latter would have required reading those file from disk before starting the game.

  ![design](./design/ttt-design.jpg?raw=true)


### Technologies Used
* **Keynote**. My favorite tool for mocking an Application!
* **JQuery**. I used most of the methods we discussed in class.
* **JSDoc**. I hadn't used this library before.  I learned the proper syntax for documenting each Class and Method and their arguments passed in.  Then, one the project was finished.  The program will create HTML files for each Class along with their methods.  The result is located in my *Documentation* directory
* **Test Driven Development**. I created a test harness and all the test files (one for each class) in the *test* directly.  As mentioned above, I didn't move on to development the next Class until I had fully tested the Methods from the previous class.  

###Existing features
* Multiple games, keeping track of player scores and ties along the way.
* The ability to restart with wins and ties set to 0.

###Planned features
I plan to implement the remaining features from my mockup, which requires changes to my CSS and the ability to read the avatar png files from disk. Structurally, the design dicates the removal of the reset button, opting for the ability to start over by clicking underneath an avatar. A player should be able to pick whether they wish to be Circle or X, then begin playing with their opponent.

[Fig1]:./design/ttt-mockup/ttt-mockup.001.jpg?raw=true
[Fig2]:./design/ttt-mockup/ttt-mockup.002.jpg?raw=true
[Fig3]:./design/ttt-mockup/ttt-mockup.003.jpg?raw=true
[Fig4]:./design/ttt-mockup/ttt-mockup.004.jpg?raw=true
[Fig5]:./design/ttt-mockup/ttt-mockup.005.jpg?raw=true
[Fig6]:./design/ttt-mockup/ttt-mockup.006.jpg?raw=true

