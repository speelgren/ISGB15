'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');

  let main = document.querySelector('main');

  for(let i = 0; i < data.length - 1; i++) {

    fixHeading(main, data[i].ras);
    fixParagraph(main, data[i + 1].namn);

    if(i === data.length) {

      addBtn(main);
    }
  }
});

  let data = [
    {ras: 'Schäfer', namn: 'Urban'},
    {ras: 'Pudel', namn: 'Ulla'},
    {ras: 'Chiwawa', namn: 'Åke'},
    {ras: 'Blandras', namn: 'Gunnel'}
  ];

  const fixHeading = (ref, content) => {

    let header = document.createElement('h1');
    ref.appendChild(header);
    header.textContent = content;
  }

  const fixParagraph = (ref, content) => {

    let paragraph = document.createElement('p');
    let text = document.createTextNode(content);
    ref.appendChild(paragraph);
    paragraph.appendChild(text);
  }

  const addBtn = (ref) => {

    let btn = document.createElement('button');
    btn.textContent = 'skicka';
    ref.appendChild(btn);
  }
