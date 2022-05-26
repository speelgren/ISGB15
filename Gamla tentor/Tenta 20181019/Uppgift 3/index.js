'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');
  prepareGUI();
});

  /* 3d */
const prepareGUI = () => {

  let body = document.querySelector('body');
  let p = document.querySelectorAll('p');
  let inputRange = document.querySelector('input[type=range]');
  let button = document.querySelector('input[type=button]');
  let sliderValue = document.querySelector('#sliderValue');

  p.forEach(pElement => {

    pElement.addEventListener('mouseover', event => {

      mouseOverP(event);
    });
  });

  inputRange.addEventListener('input', () => {

    rangeValueChanged(inputRange, sliderValue);
  });

  button.addEventListener('click', event => {

    createElements(body, inputRange);
  });
}

  /* 3a */
const mouseOverP = event => {

  console.log(event.target.firstChild.nodeValue);
}

  /* 3b */
const createElements = (body, inputRange) => {

    for(let i = 0; i < inputRange.value; i++) {

      let node = document.createTextNode(`${i + 1} `);
      body.appendChild(node);
    }
}

  /* 3c */
const rangeValueChanged = (inputRange, sliderValue) => {

  /* inte unobtrusive */
  sliderValue.innerHTML = inputRange.value;
}
