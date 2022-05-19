'use strict';

window.addEventListener('load', () => {

  document.querySelector('form').addEventListener('submit', validate);
});

const validate = (event) => {

  try {

    let email = document.querySelector('#email').value;
    let fisk = document.querySelector('input[value="fish"]');
    let klocka = document.querySelector('#klockslag').value

    if(email.length < 6 ) throw new Error ('För kort email');
    if(fisk.checked != true) throw new Error ('Välj fisk');
    if(klocka != '8') throw new Error ('Välj kl 8');

  } catch(error) {

    let felmeddelande = document.createTextNode(error);
    let err = document.querySelector('#error');
    err.style.textDecoration = 'underline red';
    err.appendChild(felmeddelande);

    event.preventDefault();
  }
};
