document.addEventListener("DOMContentLoaded", function(event) { 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userWins = 0;
var userLosses = 0;
var userGuessesLeft = 9;
var userGuess = event.key;


var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var gamesText = document.getElementById("games-left");
var guessesText = document.getElementById("guesses");
var userText = document.getElementById("letterchoice");


    document.onkeyup = function(event) {
        var userGuess = event.key;
debugger;
        var computerChoices = letters[Math.floor(Math.random()*letters.length)];
    
            if (userGuess === computerChoices) {
            userWins = userWins + 1;
            }

            else {
            userGuessesLeft = userGuessesLeft - 1;
            userLosses = userLosses + 1;
            }
    

            winsText.textContent = userWins;
            lossesText.textContent = userLosses;
            gamesText.textContent = userGuessesLeft;
            guessesText.textContent = userGuess;
            computerChoices++;
        
    };

            console.log(computerChoices);
            console.log(userGuess);
    
       /*
        document.onkeyup = function(event) {
        guessesText.textContent = event.key;

    /*document.onkeyup = function(event) {
        var toAnswer = event.key;
        if (toAnswer === computerChoices) {
            userWins = userWins + 1;
            
            
        }    
            
        else     {
            
        }
        
*/


      

  /*      console.log("currentQuestion " + currentQuestion);
           console.log(userScore);
            if (currentQuestion === questions.length) {
                alert(userScore)
            }
        
    
        document.onkeyup = function(event) {
            userText.textContent = event.key;
        }
    
        rewriteStats();


           else     
            userGuessesLeft = userGuessesLeft - 1;
            
            document.onkeyup = function(event) {
            
        

            userLosses = userLosses + 1;
            
            document.onkeyup = function(event) {
            
        }
    




        */
    });