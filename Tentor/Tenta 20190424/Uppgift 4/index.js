'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');

  let li = document.querySelectorAll('ul li');
  let sida = document.querySelector('#sida');

  sida.addEventListener('click', event => {

    event.currentTarget.style.visibility = 'hidden';
  });

  li.forEach(knapp => {

    knapp.addEventListener('click', event => {

      event.target.style.color = 'red';

      if(event.target.value == '1') {

        sida.style.visibility = 'visible';
      }

      if(event.target.value == '2') {

        let sida2 = document.createTextNode('Sida 2');
        let sida1 = document.querySelector('h1');
        let sida1H1 = sida1.firstChild;

        sida1.replaceChild(sida2, sida1H1);
      }

      if(event.target.value == '3') {

        let img = document.createElement('img');
        img.src = 'bild.jpg';
        img.alt = 'en bild';

        sida.appendChild(img);
      }
    });
  });
});
