var cardOne = "queen", cardTwo = "queen", cardThree = "king", cardFour = "king";

/*if (cardTwo === cardFour) {
	alert("Sorry, try again.");
} else if (cardOne === cardTwo || cardThree == cardFour) {
	alert("You found a match!");
}*/

var createBoard = function() {

	var board = document.getElementById('game-board');

	for (var i = 0; i < 4; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		board.appendChild(card);
	}

};

createBoard();