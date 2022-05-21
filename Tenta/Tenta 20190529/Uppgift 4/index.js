'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');
  fixCollection();
});

const fixCollection = () => {

  let h1 = document.querySelector('h1');
  let nyh1Node = document.createTextNode('Min skivsamling');

  h1.replaceChild(nyh1Node, h1.firstChild);

  let title = document.querySelectorAll('li');
  title.forEach(titleWithAttribute => {

    titleWithAttribute.removeAttribute('title');
  })

  let nyLi = document.createElement('li');
  let nyLiNode = document.createTextNode('Peaches - Rosa helikopter');
  nyLi.appendChild(nyLiNode);
  document.querySelector('ul').appendChild(nyLi);
}
