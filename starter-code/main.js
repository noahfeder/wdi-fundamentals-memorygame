var cards = ['queen','queen','king','king'], cardsInPlay = [];

/*if (cardTwo === cardFour) {
	alert("Sorry, try again.");
} else if (cardOne === cardTwo || cardThree == cardFour) {
	alert("You found a match!");
}*/

var createBoard = function() {

	var board = document.getElementById('game-board');

	for (var i = 0, l = cards.length; i < l; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		card.setAttribute('data-card', cards[i]);
		card.addEventListener('click', isTwoCards);
		board.appendChild(card);
	}

};

var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("winner");
	} else {
		alert("loser");
	}
	var queens = document.querySelectorAll('[data-card=queen]');
	var kings = document.querySelectorAll('[data-card=king]');
	for (var i = 0; i < 2; i++) {
		queens[i].setAttribute('class', 'card');
		kings[i].setAttribute('class', 'card');
	}
};

var isTwoCards = function() {

  cardsInPlay.push(this.getAttribute('data-card'));
  this.className = 'card ' + this.getAttribute('data-card');
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

};


createBoard();