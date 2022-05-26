'use strict';

let oHeadings = {

  hRef : null,
  hTextRef : null,
  divRef : document.querySelector('div[class=container-fluid]'),

  checkNbr : function(nbr) {

    if(nbr >= 1 && nbr <= 6) {

      return true;
    } else {

      return false;
    }
  }
};

oHeadings.createHeadings = function(nbr) {

  if(oHeadings.checkNbr(nbr) === true) {

    oHeadings.hRef = document.createElement('h' + nbr);
    oHeadings.hTextRef = document.createTextNode(nbr);
    oHeadings.hRef.appendChild(oHeadings.hTextRef);
    oHeadings.divRef.appendChild(oHeadings.hRef);
  } else {

    console.log('felaktig indata!');
  }
};

for(let i = 0; i < 8; i++) {

  oHeadings.createHeadings(i);
}
