const gloomDeck = [ '-2', '-1', '0', '1', '2', 'Curse', 'Miss', 'x2', 'Bless' ];

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
		return card;
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
