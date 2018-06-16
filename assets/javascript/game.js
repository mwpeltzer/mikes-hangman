
// answers array stores answers in an array
var computerChoices = ["Linkin Park", "Muse", "Sufjan Stevens"];

computerChoices.split("");
console.log(choicesArray);


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


	// Displaying tallies in html

			 var html = //"<h1>The Psychic Game</h1>" + 
        "<p>Guess What Letter I'm Thinking Of?</p>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses So Far: " +
        guessesSofar +
        "</p>";
		
		console.log()


		// selects id from html
	document.querySelector('#game').innerHTML = html; 



// end of onkeyup
}










