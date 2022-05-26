'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');
});

const validateRegistration = () => {

  let email = document.querySelector('input[type=email]');
  let kod = document.querySelector('input[type=text]');
  let gdpr = document.querySelector('input[type=checkbox]');
  let errorMsg = document.querySelector('#error-message');

  try {

    if(email.value.length == '') throw new Error ('Fyll i email.');
    if(kod.value == '') throw new Error ('Fyll i kod.');
    if(isNaN(kod.value)) throw new Error ('Fyll i giltig kod.');
    if(!gdpr.checked) throw new Error ('Acceptera GDPR.');

    return true;
  } catch ( error ) {

    let errorMsgElement = document.createElement('div');
    let errorMsgNode = document.createTextNode(error);
    errorMsgElement.appendChild(errorMsgNode);
    errorMsg.appendChild(errorMsgElement);
    //errorMsg.innerHTML = error;

    console.log( error );
    return false;
  }
};
