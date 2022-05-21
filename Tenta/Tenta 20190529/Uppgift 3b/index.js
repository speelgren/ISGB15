'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');

  let divs = document.querySelectorAll('div div');

  for(let i = 0; i < divs.length; i++) {

    let dataIDNode = document.createTextNode(divs.item(i).getAttribute('data-id'));

    if(divs.item(i).firstChild == null) {

      divs.item(i).appendChild(dataIDNode);
    } else {

      divs.item(i).replaceChild(dataIDNode, divs.item(i).firstChild);
    }
  }
});
