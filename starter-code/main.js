var cardOne = "queen", cardTwo = "queen", cardThree = "king", cardFour = "king";

if (cardTwo === cardFour) {
	alert("Sorry, try again.");
} else if (cardOne === cardTwo || cardThree == cardFour) {
	alert("You found a match!");
}