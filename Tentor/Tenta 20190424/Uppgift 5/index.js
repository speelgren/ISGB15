'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');

  document.querySelector('form').addEventListener('submit', validate);
});

const validate = () => {

  let errormsg = document.querySelector('#errmsg');
  let rbNow = document.querySelector('#rbNow');
  let rbLater = document.querySelector('#rbLater');
  let txtsubject = document.querySelector('#txtsubject');
  let time = document.querySelector('#time');
  let timeSelect = time.options[time.selectedIndex].value;

  try {

    if((rbNow.checked === false) && (rbLater.checked === false))
      throw new Error ('Välj en radioknapp');

    if(txtsubject.value.length < 5)
      throw new Error ('Text är färre än 5 tecken');

    if((rbLater.checked === true) && (timeSelect == ""))
      throw new Error ('Välj en tid');

    if((rbNow.checked === true) && (timeSelect !== ""))
      throw new Error (`Välj alternativet "Välj en tid"`);

    return true;
  } catch (error) {

    let errorNode = document.createTextNode(error);

    if(errormsg.firstChild == null) {

      errormsg.appendChild(errorNode);
    } else {

      errormsg.replaceChild(errorNode, errormsg.firstChild);
    }
    
    return false;
  }
}
