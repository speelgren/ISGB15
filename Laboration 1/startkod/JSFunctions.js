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
  const winningState = [
        [0, 1, 2], // Horizontal win
        [3, 4, 5], // Horizontal win
        [6, 7, 8], // Horizontal win
        [0, 3, 6], // Vertical win
        [1, 4, 7], // Vertical win
        [2, 5, 8], // Vertical win
        [0, 4, 8], // Diagonal win (left to right)
        [2, 4, 6]  // Diagnoal win (right to left)
      ];
*/

oGameData.checkForGameOver = function() {

function checkHorizontal() {

    if(oGameData.gameField[0, 1, 2] == (document.querySelectorAll('[data-id]' == 'X')) || (oGameData.gameField[3, 4, 5] == (document.querySelectorAll('[data-id]' == 'X')) || (oGameData.gameField[6, 7, 8] == (document.querySelectorAll('[data-id]' == 'X')) {
      return 1;
    }

    else if (oGameData.gameField[0, 1, 2] == 'O' || oGameData.gameField[3, 4, 5] == 'O' || oGameData.gameField[6, 7, 8] == 'O'){
      return 2;
    }

    else {
      return 0;
    }

};

  function checkVertical {

    if(oGameData.gameField[0, 3, 6] == 'X' || oGameData.gameField[1, 4, 7] == 'X' || oGameData.gameField[2, 5, 8] == 'X') {
      return 1;
    }

    else if (oGameData.gameField[0, 3, 6] == 'O' || oGameData.gameField[1, 4, 7] == 'O' || oGameData.gameField[2, 5, 8] == 'O') {
      return 2;
    }

    else {
      return 0;
    }

  }

  function checkDiagonalLeftToRight {

    if(oGameData.gameField[0, 4, 8] == 'X') {
      return 1;
    }

    else if(oGameData.gameField[0, 4, 8] == 'O') {
      return 2;
    }

    else {
      return 0;
    }

  }

  function checkDiagonalRightToLeft {

    if(oGameData.gameField[2, 4, 6] == 'X') {
      return 1;
    }

    else if(oGameData.gameField[2, 4, 6] == 'O') {
      return 2;
    }

    else {
      return 0;
    }

}

  function checkForDraw {

    if(checkDiagonalLeftToRight == 0 || checkDiagonalRightToLeft == 0 || checkVertical == 0 || checkHorizontal == 0) {
      return 3;
    }

  }

}
