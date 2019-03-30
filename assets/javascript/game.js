//Set up all the needed variables

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var currentGuesses = "";

//Write an algorithm that generates a random letter

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = alphabet[Math.floor(Math.random() * (alphabet.length -1))];


document.onkeyup = function (event) {
    var userGuess = event.key;
    

    if (userGuess === randomLetter) {
        wins++;
        guessesLeft = 5;
        currentGuesses = "";
        alert("you win!");
    }
    else if (guessesLeft === 1){
        losses++;
        alert("you lose!");
        currentGuesses = "";
        guessesLeft = 5;
    }
    else {
        guessesLeft--;
        currentGuesses += userGuess + ",";
    }

    //Update all the HTML parts to show the user
    var element = document.getElementById("wins");
    element.innerHTML = "Wins: " + wins;

    var element = document.getElementById("losses");
    element.innerHTML = "Losses: " + losses;

    var element = document.getElementById("guesses-left");
    element.innerHTML = "Guesses left: " + guessesLeft;

    var element = document.getElementById("guesses-current");
    element.innerHTML = "Your Guesses So Far: " + currentGuesses;


//    debuggin purposes, 
    console.log("CPU letter: " + randomLetter);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses Left: " + guessesLeft);
    console.log("Guesses so far: " + currentGuesses);
}