'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');
});


document.querySelector('form').addEventListener('submit', validate);

function validate(event) {

  console.log('validate');
  event.preventDefault();
};
