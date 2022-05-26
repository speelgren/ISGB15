'use strict';

window.addEventListener('load', () => {

  let pelle = 15;
  let myHeader = document.createElement('h1');
  let myTable = document.createElement('table');
  let main = document.querySelector('main');

  main.appendChild(myTable);

  for(let adam = 20; adam > pelle; adam--) {

    addRow(myTable, adam);
  }

});

const addRow = (parentRef, content) => {

  let tr = document.createElement('tr');
  let col = document.createElement('td');
  let txt = document.createTextNode(content);
  parentRef.appendChild(tr);

  col = document.createElement('td');
  col.setAttribute('style', 'background-color: blue');
  col.textContent = content;

  tr.appendChild(col);
}

const addHeader = (table) => {

  let tr = document.createElement('tr');
  let col_1 = document.createElement('td');
  let col_2 = document.createElement('td');

  col_1.textContent = 'Rubrik 1';
  col_2.textContent = 'Rubrik 2';

  table.appendChild(tr);
  tr.appendChild(col_1);
  tr.appendChild(col_2);
}
