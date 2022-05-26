'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');
  modifyDOM();
});

/* 3a */
const modifyDOM = () => {

  let pElement = document.querySelectorAll('div p');

  for(let i = 0; i < pElement.length; i++) {

    let firstChild = pElement.item(i).firstChild;
    let nummerNode = document.createTextNode(`${i + 1}`);

    if(firstChild === null) {

      pElement.item(i).appendChild(nummerNode)
    } else {

      pElement.item(i).replaceChild(nummerNode, firstChild);
    }
  }

  /* 3b */
  pElement.forEach(knapp => {

    knapp.addEventListener('click', (event) => {

      /* 3b a */
      event.preventDefault();
      /* 3b b */
      event.stopPropagation();
      /* 3b c */
      console.log(event.target.firstChild);
    })
  });
}
