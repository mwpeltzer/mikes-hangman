
// answers array stores answers in an array
var computerChoices = ["Linkin Park", "Muse", "Sufjan Stevens"];

console.log(computerChoices);

console.log(computerChoices.length);

//  Creating variables to hold the values of variables involved in the game
var wins = 0;
var currentAnswer = [];
var guessesLeft = "";
var lettersGuessed = "";

// need to create a function that select one of the computerChoices randomnly

var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log('Computer: ', computerRandom);	






