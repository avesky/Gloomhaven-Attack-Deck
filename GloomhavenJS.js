const gloomDeck = [];

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
});
plus2.addEventListener('click', function() {
	gloomDeck.push('-1');
});
plus3.addEventListener('click', function() {
	gloomDeck.push('0');
});
plus4.addEventListener('click', function() {
	gloomDeck.push('1');
});
plus5.addEventListener('click', function() {
	gloomDeck.push('2');
});
plus6.addEventListener('click', function() {
	gloomDeck.push('Miss');
});
plus7.addEventListener('click', function() {
	gloomDeck.push('x2');
});
plus8.addEventListener('click', function() {
	gloomDeck.push('Curse');
});
plus9.addEventListener('click', function() {
	gloomDeck.push('Bless');
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
		if (card === 'Curse' || card === 'Bless') {
			this.removedDeck.push(card);
		} else this.discardDeck.push(card);
	},
	combineAndShuffle() {
		this.deck = this.deck.concat(this.discardDeck);
		return this.shuffle(this.deck);
	},
	shuffle(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
		}
	}
};
const draw = document.getElementById('draw');
draw.addEventListener('click', myDeck.drawCard());
const shuffleAll = document.getElementById('shuffleall');
draw.addEventListener('click', function() {
	myDeck.combineAndShuffle();
});
