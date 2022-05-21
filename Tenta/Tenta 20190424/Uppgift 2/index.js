'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');

  let trRefs = document.querySelectorAll('tbody tr');
  let trRef = document.createElement('tr');
  trRef.appendChild(document.createElement('th'));
  document.querySelector('tbody').appendChild(trRef);

  for(let i = 0; i < trRefs.length; i++) {

    let tdRefs = trRefs.item(i).querySelectorAll('td');
    for(let j = 0; j < tdRefs.length; j++) {

      let txt = tdRefs.item(j).appendChild(document.createTextNode( (i+1) * (j+1) ));
    }
  }

  for(let k = 0; k < trRefs.length; k++) {

    let nbr = '';
    let txt = null;
    let tdRefs = null;

    for(let l = 0; l < trRefs.length; l++) {

      let tdRefs = trRefs.item(1).querySelectorAll('td');

      nbr += tdRefs.item(k).firstChild.nodeValue;
    }

    txt = document.createTextNode(nbr);
    tdRef = document.createElement('td');
    tdRef.appendChild(txt);
    trRef.appendChild(tdRef);
  }
});
