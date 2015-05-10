#WDI: First Project

###Intro
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Process
1. **Design the Mockup**
  I created a visual mockup of the possible *States* of Tic-Tac-Toe in wireframe mode. This helped to me to focus on state,
  postponing the majority of the style decisions until after the logic code was finalized and a static html mockup completed.
  
  The States I determined were as follows:
  1. [Who Starts?][Fig1]: After refreshing browser, the player scores are set to 0, and the board is cleared.  The panel will prompt either player to make the first move.
  The first player to select an Avatar (*X* or *O*) makes the first move.  
  This player continues to be X or O for as many games played until the browser is refreshed.  Player scores (located below the Avatars) are updated after each game.
  2. [Go!][Fig2] shows X has decided to go first.  Subsequently, O's avatar is dimmed in order to reinforce that it is X's move.
  3. [Contemplate Move][Fig3] As X (or O) hovers over the board, contemplating their move, a semi-transparent X is displayed.  A gear icon spins to reinforce the _move contemplation_ state.
  4. [Make Move][Fig4] X has made her move by clicking her move by clicking her mouse.  Her move (X) becomes opaque, while her avatar becomes semitransparent.
  The message panel reinforces that O should now make his move.  Subsequently, *States* 2 & 3 are repeated for O.
  5. [I win!][Fig5] X has won the game by placing three X's in a row, column or diagonal.  X's score is incremented by 1, to reflect this win.
  Its also possible to create a _Tie_ state at this junction (see below)
  6. [Tie][Fig6] Neither X or O have managed to place 3 of their pieces in row.  Given there are no more spaces, the game is a Tie! and neither score is incremented.  

2. **Set up the directory templates**
 Besides the standard directory boilerplate (e.g., javescripts).  The mockup helped me to determine _separation of concerns_. For example, it became clear that I needed a player.js, and a board.js file for my logic.  I also decided to create a dom.js file so that I could keep any dom display (i.e., view) functionality separate from my logic. I also recognize that this game is small enough, such that I could safely mix dom manipulation methods with my logic.
  _


### Technologies Used
*What technologies did you use while developing this project?*

###Existing features
*What features does your new tic-tac-toe app have?*

###Planned features
*What changes would you make to your project if you continued with it in the future?*

[Fig1]:./design/ttt-mockup/ttt-mockup.001.jpg?raw=true
[Fig2]:./design/ttt-mockup/ttt-mockup.002.jpg?raw=true
[Fig3]:./design/ttt-mockup/ttt-mockup.003.jpg?raw=true
[Fig4]:./design/ttt-mockup/ttt-mockup.004.jpg?raw=true
[Fig5]:./design/ttt-mockup/ttt-mockup.005.jpg?raw=true
[Fig6]:./design/ttt-mockup/ttt-mockup.006.jpg?raw=true

