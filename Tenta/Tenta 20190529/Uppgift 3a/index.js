'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');

  let p = document.querySelectorAll('p');
  let div = document.querySelectorAll('div div');

  for(let i = 0; i < p.length; i++) {

    let div = document.querySelectorAll('div div');
    div.item(i).appendChild(p.item(i));
  }
});
