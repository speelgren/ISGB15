'use strict';

/*
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
let oGameData = {};
oGameData.intervalID = null;

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
    //oGameData.gameField = Array('', '', 'O', '', 'O', '', 'O', '', '');
    //oGameData.gameField = Array('X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O');

    //DRAW:
    //oGameData.gameField = Array('X', 'O', 'X','O', 'O', 'X', 'X', 'X', 'O');
    //No Win:
    //oGameData.gameField = Array('', '', '', '', '', '', '', '', '');

    //Indikerar tecknet som skall användas för spelare ett.
    oGameData.playerOne = 'X';

    //Indikerar tecknet som skall användas för spelare två.
    oGameData.playerTwo = 'O';

    //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin 'bricka'.
    oGameData.currentPlayer = '';

    //Nickname för spelare ett som tilldelas från ett formulärelement,
    oGameData.nickNamePlayerOne = '';

    //Nickname för spelare två som tilldelas från ett formulärelement.
    oGameData.nickNamePlayerTwo = '';

    //Färg för spelare ett som tilldelas från ett formulärelement.
    oGameData.colorPlayerOne = '';

    //Färg för spelare två som tilldelas från ett formulärelement.
    oGameData.colorPlayerTwo = '';

    //'Flagga' som indikerar om användaren klickat för checkboken.
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

oGameData.checkForGameOver = function() {

  function checkHorizontal() {

    if(((oGameData.gameField[0] === 'X')
      && (oGameData.gameField[1] === 'X')
      && (oGameData.gameField[2] === 'X'))
      || ((oGameData.gameField[3] === 'X')
      && (oGameData.gameField[4] === 'X')
      && (oGameData.gameField[5] === 'X'))
      || ((oGameData.gameField[6] === 'X')
      && (oGameData.gameField[7] === 'X')
      && (oGameData.gameField[8] === 'X'))) {

      return 1;
    }

    else if(((oGameData.gameField[0] === 'O')
      && (oGameData.gameField[1] === 'O')
      && (oGameData.gameField[2] === 'O'))
      || ((oGameData.gameField[3] === 'O')
      && (oGameData.gameField[4] === 'O')
      && (oGameData.gameField[5] === 'O'))
      || ((oGameData.gameField[6] === 'O')
      && (oGameData.gameField[7] === 'O')
      && (oGameData.gameField[8] === 'O'))) {

      return 2;
    }

  }

  function checkVertical() {

    if(((oGameData.gameField[0] === 'X')
      && (oGameData.gameField[3] === 'X')
      && (oGameData.gameField[6] === 'X'))
      || ((oGameData.gameField[1] === 'X')
      && (oGameData.gameField[4] === 'X')
      && (oGameData.gameField[7] === 'X'))
      || ((oGameData.gameField[2] === 'X')
      && (oGameData.gameField[5] === 'X')
      && (oGameData.gameField[8] === 'X'))) {

      return 1;
    }

    else if(((oGameData.gameField[0] === 'O')
      && (oGameData.gameField[3] === 'O')
      && (oGameData.gameField[6] === 'O'))
      || ((oGameData.gameField[1] === 'O')
      && (oGameData.gameField[4] === 'O')
      && (oGameData.gameField[7] === 'O'))
      || ((oGameData.gameField[2] === 'O')
      && (oGameData.gameField[5] === 'O')
      && (oGameData.gameField[8] === 'O'))) {

      return 2;
    }

  }

  function checkDiagonalLeftToRight() {

    if((oGameData.gameField[0] === 'X')
      && (oGameData.gameField[4] === 'X')
      && (oGameData.gameField[8] === 'X')) {

      return 1;
    }

    else if((oGameData.gameField[0] === 'O')
      && (oGameData.gameField[4] === 'O')
      && (oGameData.gameField[8] === 'O')) {

      return 2;
    }

  }

  function checkDiagonalRightToLeft() {

    if((oGameData.gameField[2] === 'X')
      && (oGameData.gameField[4] === 'X')
      && (oGameData.gameField[6]) === 'X') {

      return 1;
    }

    else if((oGameData.gameField[2] === 'O')
      && (oGameData.gameField[4] === 'O')
      && (oGameData.gameField[6]) === 'O') {

      return 2;
    }

  }

  function checkForDraw() {

    let check = oGameData.gameField;
    if(check.includes('') === false) {

      return 3;
    }

    else if(check.includes('') === true) {

      return 0;
    }

  }

  let horizontal = checkHorizontal();
  let vertical = checkVertical();
  let diagonalLTR = checkDiagonalLeftToRight();
  let diagonalRTL = checkDiagonalRightToLeft();
  let draw = checkForDraw();

    if((horizontal === 1)
      || (vertical === 1)
      || (diagonalLTR === 1)
      || (diagonalRTL === 1)) {

        console.log('Win för X.');
        return 1;
    }

    else if((horizontal === 2)
      || (vertical === 2)
      || (diagonalLTR === 2)
      || (diagonalRTL === 2)) {

        console.log('Win för O.');
        return 2;
    }

    else {

      if(draw == 3) {

        console.log('Draw.');
        return 3;

      } else if(draw == 0) {

        return 0;
      }
    }

}

window.addEventListener('load', function() {

  oGameData.initGlobalObject();
  document.querySelector('#gameArea').classList.add('d-none');
  document.querySelector('#newGame').addEventListener('click', validateForm);
  timerCheckbox();
});

function validateForm() {

  //Sparar errorMsg i variabeln error.
  let error = document.querySelector('#errorMsg');

  //Sparar nickname och color i variabler för att korta ned text.
  let nick1 = document.querySelector('#nick1').value;
  let nick2 = document.querySelector('#nick2').value;
  let color1 = document.querySelector('#color1').value;
  let color2 = document.querySelector('#color2').value;

    try {

      if(nick1.length < 5) throw 'Nickname måste vara längre än 5 bokstäver.';
      if(nick2.length < 5) throw 'Nickname måste vara längre än 5 bokstäver.';
      if(nick1 == nick2) throw 'Spelare får inte ha samma namn.';

      //Hexadecimal vit måste skrivas med små bokstäver.......... suck.
      if(color1 === '#000000' ) throw 'spelare 1 får inte välja svart.';
      if(color1 === '#ffffff' ) throw 'spelare 1 får inte välja vit.';
      if(color2 === '#000000' ) throw 'spelare 2 får inte välja svart.';
      if(color2 === '#ffffff' ) throw 'spelare 2 får inte välja vit.';
      if(color1 === color2) throw 'Samma färg';

      initiateGame();
    }
      catch( e ) {

        error.textContent = 'Fel: ' + e;
      }

}

function initiateGame() {

  document.querySelector('#timerCheckbox').classList.add('hidden');
  if(document.querySelector('#timerCheckbox').checked) {

    oGameData.intervalID = setInterval(changePlayer, 5000);
  }

  //lägger till class 'd-none' i divInForm
  document.querySelector('#divInForm').classList.add('d-none');
  //Tar bort class 'd-none' i gameArea
  document.querySelector('#gameArea').classList.remove('d-none');
  //"Rensar" innehållet i errorMsg
  document.querySelector('#errorMsg').textContent = '';

  oGameData.nickNamePlayerOne = nick1.value;
  oGameData.nickNamePlayerTwo = nick2.value;
  oGameData.colorPlayerOne = color1.value;
  oGameData.colorPlayerTwo = color2.value;

  //Sparar alla data-id i spelplan
  let spelplan = document.querySelectorAll('td');
    for(let i = 0; i < spelplan.length; i++) {

      //"Rensar" td-elementen
      spelplan[i].textContent = '';
      spelplan[i].style.backgroundColor = '#ffffff';
      //kom t.o.m. ihåg små bokstäver den här gången
      //spelplan[i].addEventListener('click', executeMove);
    }

  let playerChar;
  let playerName;
  let random = Math.random();

    if(random < 0.5) {

      playerChar = oGameData.playerOne;
      playerName = nick1.value;
      oGameData.currentPlayer = oGameData.playerOne;
    } else if (random >= 0.5) {

      playerChar = oGameData.playerTwo;
      playerName = nick2.value;
      oGameData.currentPlayer = oGameData.playerTwo;
    }

  //Test för att se vad random får för värde.
  //console.log(random, playerName);

  document.querySelector('h1').textContent = 'Aktuell spelare är: ' + playerName + ' (' + playerChar + ')';

  //Sista funktionen i initiateGame();
  let table = document.querySelector('table');
  table.addEventListener('click', executeMove);
}

function executeMove(event) {

  var h1 = document.querySelector('h1');
  var nodePlayer1 = document.createTextNode('Aktuell spelare är: ' + nick1.value + ' (' + oGameData.playerOne + ')');
  var nodePlayer2 = document.createTextNode('Aktuell spelare är: ' + nick2.value + ' (' + oGameData.playerTwo + ')');

  if(document.querySelector('#timerCheckbox').checked) {

    console.log('checked');
    clearInterval(oGameData.intervalID);
    oGameData.intervalID = setInterval(changePlayer, 5000);
  }

  let click = event.target;

    //Om klick sker på elementet td.
    if(click.tagName == 'TD') {

      //Kontrollera så att cellen är ledig.
      if((click.textContent !== 'X')
        && (click.textContent !== 'O')) {

          //Om cellen är ledig: hämta ut data-id och lägg till currentPlayer på cellen.
          let data_id = click.getAttribute('data-id');
          oGameData.gameField[data_id] = oGameData.currentPlayer;

            if(oGameData.currentPlayer == oGameData.playerOne) {

              click.textContent = oGameData.playerOne;
              click.style.backgroundColor = color1.value;

              //Ändra currentPlayer till nästa spelare när spelaren har gjort sitt drag.
              oGameData.currentPlayer = oGameData.playerTwo;

              let oldNode = document.querySelector('h1').lastChild;
              document.querySelector('h1').removeChild(oldNode);
              h1.appendChild(nodePlayer2);
            } else if(oGameData.currentPlayer == oGameData.playerTwo) {

              click.textContent = oGameData.playerTwo;
              click.style.backgroundColor = color2.value;

              //Ändra currentPlayer till nästa spelare.
              oGameData.currentPlayer = oGameData.playerOne;

              let oldNode = document.querySelector('h1').lastChild;
              document.querySelector('h1').removeChild(oldNode);
              h1.appendChild(nodePlayer1);
            }

            let checkForWin = oGameData.checkForGameOver();

            if(checkForWin == 1
              || checkForWin == 2
              || checkForWin == 3) {

                //clearInterval när en spelare vunnit/vid oavgort.
                clearInterval(oGameData.intervalID);
                //Ta bort eventlistener och class d-none
                this.removeEventListener('click', executeMove);
                document.querySelector('#divInForm').classList.remove('d-none');

                let oldNode = document.querySelector('h1').lastChild;
                let nodePlayer1Win = document.createTextNode('Vinnare: ' + nick1.value + ' (' + oGameData.playerOne + ')! Spela igen?');
                let nodePlayer2Win = document.createTextNode('Vinnare: ' + nick2.value + ' (' + oGameData.playerTwo + ')! Spela igen?');
                let nodeDraw = document.createTextNode('Oavgjort. Spela igen?');

                if(checkForWin == 1) {

                  document.querySelector('h1').removeChild(oldNode);
                  document.querySelector('h1').appendChild(nodePlayer1Win);
                } else if(checkForWin == 2) {

                  document.querySelector('h1').removeChild(oldNode);
                  document.querySelector('h1').appendChild(nodePlayer2Win);
                } else if(checkForWin == 3 || checkForWin == 0) {

                  document.querySelector('h1').removeChild(oldNode);
                  document.querySelector('h1').appendChild(nodeDraw);
                }

                //Lägg till d-none på #gameArea
                document.querySelector('#gameArea').classList.add('d-none');
                oGameData.initGlobalObject();
            }
        }
    }
}

//TIMER
function timerCheckbox() {

  let timerH6 = document.createElement('h6');
  let timerCheckbox = document.createElement('input');
  timerCheckbox.setAttribute('type', 'checkbox');
  timerCheckbox.setAttribute('id', 'timerCheckbox');
  let checkboxText = document.createTextNode('Vill du begränsa tiden till 5 sekunder per drag? ');
  timerH6.appendChild(checkboxText);
  timerH6.style.padding = '15px 0px 0px 15px';

  let divInForm = document.querySelector('#divInForm');
  let divWithA = document.querySelector('#divWithA');
  divInForm.insertBefore(timerH6, divWithA);
  timerH6.appendChild(timerCheckbox);
}

function changePlayer() {

  // Inspiration ang. oldNode från https://webplatform.github.io/docs/dom/tutorials/adding_and_deleting_elements/
  let oldNode = document.querySelector('h1').lastChild;
  var nodePlayer1 = document.createTextNode('Aktuell spelare är: ' + nick1.value + ' (' + oGameData.playerOne + ')');
  var nodePlayer2 = document.createTextNode('Aktuell spelare är: ' + nick2.value + ' (' + oGameData.playerTwo + ')');

  if(oGameData.currentPlayer == oGameData.playerOne) {

    oGameData.currentPlayer = oGameData.playerTwo;
    document.querySelector('h1').removeChild(oldNode);
    document.querySelector('h1').appendChild(nodePlayer2);
  } else {

    oGameData.currentPlayer = oGameData.playerOne;
    document.querySelector('h1').removeChild(oldNode);
    document.querySelector('h1').appendChild(nodePlayer1);
  }
}
