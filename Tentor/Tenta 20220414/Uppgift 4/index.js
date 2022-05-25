'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');
  addClickListenersToButtons();
});

const addClickListenersToButtons = () => {

  let button = document.querySelectorAll('button');

  button.forEach(knapp => {

    knapp.addEventListener('click', (event) => {

      event.preventDefault();

      let value = event.target.getAttribute('data-add');
      let valueNode = document.createTextNode(value);
      let list = document.querySelector('.list');
      let p = document.createElement('p');

      p.appendChild(valueNode);
      list.appendChild(p);

      p.addEventListener('click', (event) => {

        event.target.remove();
      });

      p.addEventListener('mouseover', (event) => {

        //event.target.style.fontWeight = 'bold';
        event.target.classList.add('font-weight-bold');
      });

      p.addEventListener('mouseout', (event) => {

        //event.target.style.fontWeight = 'normal';
        event.target.classList.remove('font-weight-bold');
      });
    });
  });
}
