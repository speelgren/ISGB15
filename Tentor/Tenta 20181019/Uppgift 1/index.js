'use strict';

window.addEventListener('load', () => {

  prepareGUI();
});

const createContent = (nodeOne, nodeTwo) => {

  let abbr = nodeOne.querySelector('abbr');
  let text = abbr.firstChild.nodeValue;
  let url = nodeOne.getAttribute('data-url');
  let title = abbr.getAttribute('title');
  let tdNode = document.createElement('td');

  tdNode.appendChild(document.createTextNode(text));
  nodeTwo.appendChild(tdNode);

  tdNode = document.createElement('td');
  tdNode.appendChild(document.createTextNode(title));
  nodeTwo.appendChild(tdNode);

  tdNode = document.createElement('td');
  tdNode.appendChild(document.createTextNode(url));
  nodeTwo.appendChild(tdNode);
};

const prepareGUI = () => {

  let liNodes = document.querySelectorAll('li[data-url]');
  let tableNode = document.createElement('table');
  document.querySelector('#divTwo').appendChild(tableNode);

  for(let i = 0; i < liNodes.length; i++) {

    let liNode = liNodes.item(i);
    let trNode = document.createElement('tr');
    tableNode.appendChild(trNode);
    createContent(liNode, trNode);
  }
};
