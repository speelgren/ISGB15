'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');
  document.querySelector('form').addEventListener('submit', validate);
});

const validate = (event) => {

  let email = document.querySelector('#email').value;
  let fisk = document.querySelector('input[value="fish"]');
  let klocka = document.querySelector('#klockslag').value

  try {

    if(email.length < 6 ) throw new Error ('För kort email');
    if(fisk.checked != true) throw new Error ('Välj fisk');
    if(klocka != '8') throw new Error ('Välj kl 8');

  } catch (error) {

    let felmeddelande = document.createTextNode(error);
    let err = document.querySelector('#error');
    err.style.textDecoration = 'underline red';

    if(err.firstChild == null) {

      err.appendChild(felmeddelande);
    } else {

      err.replaceChild(felmeddelande, err.firstChild);
    }

    event.preventDefault();
  }
};
