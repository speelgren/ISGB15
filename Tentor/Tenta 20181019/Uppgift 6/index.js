'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');
  init();
});

const createOption = (value, text) => {

  let optionNode = document.createElement('option');
  optionValues(optionNode, value, text);

  return optionNode;
}

const optionValues = (optionNode, value, text) => {

  optionNode.innerHTML = text;
  optionNode.setAttribute('value', value);

  if(value % 2 === 0) {

    optionNode.style.color = 'pink';
  } else {

    optionNode.style.backgroundColor = 'lightblue';
  }
}

const init = () => {

  let selectNode = document.createElement('select');
  document.querySelector('#container').appendChild(selectNode);

  for(let i = 1; i <= 4; i++) {

    let newOption = createOption(i, i * i);
    selectNode.appendChild(newOption);
  }
}
