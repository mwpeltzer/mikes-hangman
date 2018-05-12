
// answers array stores answers in an array
var computerChoices = ["Linkin Park", "Muse", "Sufjan Stevens"];

console.log(computerChoices);
console.log(computerChoices.length);

//  Creating variables to hold the values of variables involved in the game
var wins = 0;
var currentAnswer = [];
var guessesLeft = "";
var lettersGuessed = "";

// function that select random band from the array
var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
console.log('Computer: ', computerRandom);	

// function for when user presses key

document.onkeyup = function(event) {

	console.log(onkeyup);

	// determine what key was pressed 
	var userGuess = event.key;
	console.log(userGuess);






// end of onkeyup
}










