'use strict';

window.addEventListener('load', () => {

  console.log('DOM loaded');

  let aRefs = document.querySelectorAll('a');

  for(let i = 0; i < aRefs.length; i++) {

    aRefs.item(i).addEventListener('click', (e) => {

      e.preventDefault();
      console.log(e.target.textContent);
      console.log(e.currentTarget.innerHTML);
      console.log(this.lastChild.nodeValue);
    });
  }

  let divRef = document.querySelector('div');
  divRef.addEventListener('click', (e) => {

    console.log(e.target.outerHTML);
    console.log(e.currentTarget.textContent);
    console.log(this.textContent);
  });

  console.log(divRef.parentNode.childNodes.item(divRef.parentNode.childNodes.length - 2));
  console.log(divRef.childNodes);

});
