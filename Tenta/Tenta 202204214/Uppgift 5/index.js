'use strict';

let data = [
  {namn: 'Volvo', modell: 'V70', typ: 'manuell', pris: 39999},
  {namn: 'Volvo', modell: '720', typ: 'manuell', pris: 59999},
  {namn: 'Volvo', modell: 'XC40', typ: 'automat', pris: 299999},
  {namn: 'Volvo', modell: 'S90', typ: 'automat', pris: 390999},
];

const generateCarInformation = () => {

  let list = document.querySelector('#list');
  let ul = document.createElement('ul');

  for(let i = 0; i < data.length; i++) {

    let li = createCarListItem(i + 1);
    createCarInformation(ul, li, data[i]);
  }

  list.appendChild(ul);
}

const createCarListItem = (id) => {

  let li = document.createElement('li');
  li.setAttribute('class', 'car car-container');
  li.setAttribute('data-id', 'car-' + id);

  return li;
}

const createCarInformation = (list, listItem, data) => {

  listItem.textContent = (
    'Namn: ' + data.namn + ' ' + data.modell + ' ' +
    'Typ: ' + data.typ + ' ' +
    'Pris: ' + data.pris
  );

  list.appendChild(listItem);
}


generateCarInformation();
