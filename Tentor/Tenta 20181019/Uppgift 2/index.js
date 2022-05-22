'use strict';

window.addEventListener('load', () => {

  changeParagraphs();
});

const changeParagraphs = () => {

  let p = document.querySelectorAll('p');

  p.forEach(pElement => {

    let data = document.createTextNode(pElement.getAttribute('data-description'));
    let firstChild = pElement.firstChild

    if(firstChild === null) {

      pElement.appendChild(data);
    } else {

      pElement.replaceChild(data, firstChild);
    }
  });
}
