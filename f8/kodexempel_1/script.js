'use strict';
// Kapitel 7 & 8.


// GÖR EJ SÅHÄR:
window.addEventListener('load', () => {

  renderPage();
});

function renderPage() {
  /*
  <head> följer inte med i detta exempel:

  document.writeLn('<main>');
  document.writeLn('<h1>');
  document.writeLn('Väldigt jobbigt');
  document.writeLn('</h1');
  document.writeLn('<button class="btn btn-primary">Click me</button>');
  document.writeLn('</main>');
  */

  /*
  let body = document.querySelector('body');
  body.innerHTML = '<main><h1>väldigt jobbigt</h1><button class="btn btn-primary">Click me</button></main>';
  //Går nu att querySelect main:

  let main = document.querySelector('main');
  */

  //Mer OK att göra såhär:
  let body = document.querySelector('body');
  let main = document.createElement('main');
  let h1 = document.createElement('h1');
  //Elementnod:
  // h1.textContent = 'Inte så jobbigt';
  //Textnod:
  let textNode = document.createTextNode('inte så jobbigt..');
  h1.appendChild(textNode);
  main.appendChild(h1);

  body.appendChild(main);
  //Elementnod:
  let btn = document.createElement('button');
  btn.classList.add('btn', 'btn-primary');
  btn.textContent='Click me';
  main.appendChild(btn);
  // Textnod:
  /*
  let click = document.createTextNode('Click me');
  btn.appendChild(click);
  main.appendChild(btn);
  */

}
