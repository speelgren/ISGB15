'use strict';

//()={}, shortcode för function() {}
window.addEventListener('load', ()=> {
	renderPage();

});

function renderPage() {

	let table = document.querySelector('table');
	table.addEventListener('click', addColor);
	let counter = 1;

	for(let i = 1; i <= 10; i++) {

			let tr = document.createElement('tr');
				for(let j = 1; j <= 10; j++) {

					let td = document.createElement('td');
					td.classList.add('p-3');
					let text = document.createTextNode(counter);
					counter++;

					td.appendChild(text);
					tr.appenChild(td); //lägg till td i tr.
				}

			table.appendChild(tr); //lägg till tr i table.
			//inte lyssnare på td.
	}
}

function addColor(event) {

	/*
	target och currentTarget.
	currentTarget : referens till elementnoden som lyssnare ligger på.
	I detta exempel är currenTarget 'table'.
 	event.currentTarget = document.querySelector('table');

	target : returnerar elementet som klickas på (längst ner i strukturen). i det här exemplet ett td-element.
	*/

	event.target.style.backgroundColor='red';

}
