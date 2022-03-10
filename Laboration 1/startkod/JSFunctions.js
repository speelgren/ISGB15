"use strict";

/*
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
let oGameData = {};

/*
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
oGameData.initGlobalObject = function() {

    //Datastruktur för vilka platser som är lediga respektive har brickor
    oGameData.gameField = Array('', '', '', '', '', '', '', '', '');

    /* Testdata för att testa rättningslösning */
    //oGameData.gameField = Array('X', 'X', 'X', '', '', '', '', '', '');
    //oGameData.gameField = Array('X', '', '', 'X', '', '', 'X', '', '');
    //oGameData.gameField = Array('X', '', '', '', 'X', '', '', '', 'X');
    //oGameData.gameField = Array('', '', 'X', '', 'X', '', 'X', '', '');
    //oGameData.gameField = Array('X', 'O', 'X', '0', 'X', 'O', 'O', 'X', 'O');

    //Indikerar tecknet som skall användas för spelare ett.
    oGameData.playerOne = "X";

    //Indikerar tecknet som skall användas för spelare två.
    oGameData.playerTwo = "O";

    //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin "bricka".
    oGameData.currentPlayer = "";

    //Nickname för spelare ett som tilldelas från ett formulärelement,
    oGameData.nickNamePlayerOne = "";

    //Nickname för spelare två som tilldelas från ett formulärelement.
    oGameData.nickNamePlayerTwo = "";

    //Färg för spelare ett som tilldelas från ett formulärelement.
    oGameData.colorPlayerOne = "";

    //Färg för spelare två som tilldelas från ett formulärelement.
    oGameData.colorPlayerTwo = "";

    //"Flagga" som indikerar om användaren klickat för checkboken.
    oGameData.timerEnabled = false;

    //Timerid om användaren har klickat för checkboxen.
    oGameData.timerId = null;

}

/*
 * Kontrollerar för tre i rad.
 * Returnerar 0 om det inte är någon vinnare,
 * returnerar 1 om spelaren med ett kryss (X) är vinnare,
 * returnerar 2 om spelaren med en cirkel (O) är vinnare eller
 * returnerar 3 om det är oavgjort.
 * Funktionen tar inte emot några värden.
 */

/*

        [0, 1, 2], // Horizontal win
        [3, 4, 5], // Horizontal win
        [6, 7, 8], // Horizontal win
        [0, 3, 6], // Vertical win
        [1, 4, 7], // Vertical win
        [2, 5, 8], // Vertical win
        [0, 4, 8], // Diagonal win (left to right)
        [2, 4, 6]  // Diagnoal win (right to left)

*/

oGameData.checkForGameOver = function() {

  let tile = document.querySelectorAll( 'td [data-id]');
  let tile_length = tile.length;
  //console.log('querySelectorAll(\'td[data-id]\')', tiles, tiles_length);

  for(let i = 0; i < tile_length; i++) {
    console.log(tile.item(i));
  }

  console.log(tile[0]);
  console.log(tile[8]);

  function checkHorizontal() {

    if(oGameData.playerOne ==
      (tile[0] && tile[1] && tile[2])
      || (tile[3] && tile[4] && tile[5])
      || (tile[6] && tile[7] && tile[8])) {

      return 1;

    }

    else if(oGameData.playerTwo ==
      (tile[0] && tile[1] && tile[2])
      || (tile[3] && tile[4] && tile[5])
      || (tile[6] && tile[7] && tile[8])) {

      return 2;

    }

  }

  function checkVertical() {

  }

  function checkDiagonalLeftToRight() {

  }

  function checkDiagonalRightToLeft() {

  }

  function checkForDraw() {

  }

}
