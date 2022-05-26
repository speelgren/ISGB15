'use strict';

window.addEventListener('load', () => {

  changeTable();
});

const changeTable = () => {

  let tr = document.querySelectorAll('tr');

  let url = tr.item(1).querySelectorAll('td').item(0);
  let abbr = tr.item(1).querySelectorAll('td').item(1);
  let title = tr.item(1).querySelectorAll('td').item(2);
  let node = document.createTextNode(title.firstChild.nodeValue);

  url.appendChild(node);

  let cssEl = document.createElement('td');
  let cssNode = document.createTextNode('CSS');

  cssEl.appendChild(cssNode);
  tr.item(2).appendChild(cssEl);

  let http = tr.item(3).querySelectorAll('td').item(1);
  let httpNode = document.createTextNode(http.firstChild.nodeValue);

  tr.item(3).querySelectorAll('td').item(2).appendChild(httpNode);
};
