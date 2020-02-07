const gloomDeck = [];

const deckDisplay = document.getElementById('ulInsert');
const discardDeckDisplay = document.getElementById('ulInsert1');

const plus1 = document.getElementById('plus1');
const plus2 = document.getElementById('plus2');
const plus3 = document.getElementById('plus3');
const plus4 = document.getElementById('plus4');
const plus5 = document.getElementById('plus5');
const plus6 = document.getElementById('plus6');
const plus7 = document.getElementById('plus7');
const plus8 = document.getElementById('plus8');
const plus9 = document.getElementById('plus9');

const minus1 = document.getElementById('minus1');
const minus2 = document.getElementById('minus2');
const minus3 = document.getElementById('minus3');
const minus4 = document.getElementById('minus4');
const minus5 = document.getElementById('minus5');
const minus6 = document.getElementById('minus6');
const minus7 = document.getElementById('minus7');
const minus8 = document.getElementById('minus8');
const minus9 = document.getElementById('minus9');

minus1.addEventListener('click', function() {
	const delIndex = gloomDeck.indexOf('-2');
	if (delIndex !== -1) {
		gloomDeck.splice(delIndex, 1);
	} else alert('No -2 left in deck');
});
minus2.addEventListener('click', function() {
	const delIndex = gloomDeck.indexOf('-1');
	if (delIndex !== -1) {
		gloomDeck.splice(delIndex, 1);
	} else alert('No -1 left in deck');
});
minus3.addEventListener('click', function() {
	const delIndex = gloomDeck.indexOf('0');
	if (delIndex !== -1) {
		gloomDeck.splice(delIndex, 1);
	} else alert('No 0 left in deck');
});
minus4.addEventListener('click', function() {
	const delIndex = gloomDeck.indexOf('1');
	if (delIndex !== -1) {
		gloomDeck.splice(delIndex, 1);
	} else alert('No 1 left in deck');
});
minus5.addEventListener('click', function() {
	const delIndex = gloomDeck.indexOf('2');
	if (delIndex !== -1) {
		gloomDeck.splice(delIndex, 1);
	} else alert('No 2 left in deck');
});
minus6.addEventListener('click', function() {
	const delIndex = gloomDeck.indexOf('Miss');
	if (delIndex !== -1) {
		gloomDeck.splice(delIndex, 1);
	} else alert('No Miss left in deck');
});
minus7.addEventListener('click', function() {
	const delIndex = gloomDeck.indexOf('x2');
	if (delIndex !== -1) {
		gloomDeck.splice(delIndex, 1);
	} else alert('No x2 left in deck');
});
minus8.addEventListener('click', function() {
	const delIndex = gloomDeck.indexOf('Curse');
	if (delIndex !== -1) {
		gloomDeck.splice(delIndex, 1);
	} else alert('No Curse left in deck');
});
minus9.addEventListener('click', function() {
	const delIndex = gloomDeck.indexOf('Bless');
	if (delIndex !== -1) {
		gloomDeck.splice(delIndex, 1);
	} else alert('No Bless left in deck');
});

plus1.addEventListener('click', function() {
	gloomDeck.push('-2');
	let z = document.createElement('li');
	z.innerText = '-2';
	deckDisplay.appendChild(z);
});
plus2.addEventListener('click', function() {
	gloomDeck.push('-1');
	let z = document.createElement('li');
	z.innerText = '-1';
	deckDisplay.appendChild(z);
});
plus3.addEventListener('click', function() {
	gloomDeck.push('0');
	let z = document.createElement('li');
	z.innerText = '0';
	deckDisplay.appendChild(z);
});
plus4.addEventListener('click', function() {
	gloomDeck.push('1');
	let z = document.createElement('li');
	z.innerText = '1';
	deckDisplay.appendChild(z);
});
plus5.addEventListener('click', function() {
	gloomDeck.push('2');
	let z = document.createElement('li');
	z.innerText = '2';
	deckDisplay.appendChild(z);
});
plus6.addEventListener('click', function() {
	gloomDeck.push('Miss');
	let z = document.createElement('li');
	z.innerText = 'Miss';
	deckDisplay.appendChild(z);
});
plus7.addEventListener('click', function() {
	gloomDeck.push('x2');
	let z = document.createElement('li');
	z.innerText = 'x2';
	deckDisplay.appendChild(z);
});
plus8.addEventListener('click', function() {
	gloomDeck.push('Curse');
	let z = document.createElement('li');
	z.innerText = 'Curse';
	deckDisplay.appendChild(z);
});
plus9.addEventListener('click', function() {
	gloomDeck.push('Bless');
	let z = document.createElement('li');
	z.innerText = 'Bless';
	deckDisplay.appendChild(z);
});

const myDeck = {
	deck              : gloomDeck,
	discardDeck       : [],
	removedDeck       : [],
	addCards(arr) {
		this.deck = this.deck.concat(arr);
		myDeck.shuffle(this.deck);
	},
	drawCard() {
		const card = this.deck.pop();
		if (card === 'Curse' || card === 'Bless' || card === undefined) {
			this.removedDeck.push(card);
		} else this.discardDeck.push(card);
	},
	combineAndShuffle() {
		this.deck = this.deck.concat(this.discardDeck);
		this.discardDeck = [];
		return this.shuffle(this.deck);
	},
	shuffle(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
			console.log(arr);
		}
	}
};
const draw = document.getElementById('draw');
draw.addEventListener('click', function() {
	let element = document.getElementById('ulInsert1');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	let element2 = document.getElementById('ulInsert');
	while (element2.firstChild) {
		element2.removeChild(element2.firstChild);
	}
	myDeck.drawCard();
	for (let el of myDeck.discardDeck) {
		z = document.createElement('li');
		z.innerText = el;
		discardDeckDisplay.appendChild(z);
		console.log(myDeck.deck, myDeck.discardDeck);
	}
	for (let el of myDeck.deck) {
		z = document.createElement('li');
		z.innerText = el;
		deckDisplay.appendChild(z);
		console.log(myDeck.deck, myDeck.discardDeck);
	}
});
const shuffleAll = document.getElementById('shuffleall');
shuffleAll.addEventListener('click', function() {
	myDeck.combineAndShuffle();
});
