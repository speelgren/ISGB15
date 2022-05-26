'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');
  let nbrChr = document.querySelector('#nbrChr')
  let hundraNode = document.createTextNode('100');
  nbrChr.appendChild(hundraNode);

  let textArea = document.querySelector('textarea');
  textArea.addEventListener('input', (event) => {

    updateCounter(event, nbrChr);
  });
});

const validate = () => {

  let rbMan = document.querySelector('#rbMan');
  let rbKvinna = document.querySelector('#rbKvinna');
  let rbAnnan = document.querySelector('#rbAnnan');
  let txtAge = document.querySelector('input[type=text]');
  let textArea = document.querySelector('textarea');
  let errorMSG = document.querySelector('#errmsg');

  try {

    if(rbMan.checked == false && rbKvinna.checked == false && rbAnnan.checked == false) throw new Error ('Välj kön.');
    if(isNaN(txtAge.value)) throw new Error ('Skriv ålder');
    if(txtAge.value < 18) throw new Error ('För UNG.');
    if(txtAge.value > 99) throw new Error ('För GAMMAL. #agism');

    return true;
  } catch ( error ) {

    let errorMSGNode = document.createTextNode(error);

    if(errorMSG.firstChild == null) {
      
      errorMSG.appendChild(errorMSGNode);
    } else {

      errorMSG.replaceChild(errorMSGNode, errorMSG.firstChild);
    }

    return false;
  }
}

const updateCounter = (event, nbrChr) => {

  let antal = event.currentTarget;
  let max = 100;
  let countDown = max - antal.value.length;
  nbrChr.textContent = countDown;

  if(antal.value.length > max) {

    nbrChr.textContent = (`MAX: ${countDown}`);
  }
}
