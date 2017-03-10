  $(document).ready(function() {

    var wordsToChooseFrom = ["bologna", "cheese", "sandwich", "pizza", "barbeque"];
    var randomNumber = 0;
    var chosenWord = '';
    var ourWord = [];
    var blankSpaces = [];
    var theLetter = '';
    var wrongGuesses = [];
    var gamesWon = 0;
    var addWonGame = function () {
        gamesWon++ ;
        $("#gamesWonCounter").html(gamesWon);
        }
    var gamesLost = 0;
    var addGameLost = function() {
        gamesLost++ ;
        $("#gamesLostCounter").html(gamesLost);
    }
    var guessesLeft = 6;
    var subtractGuess = function() {
        guessesLeft-- ;
        $("#guessesLeftCounter").html(guessesLeft);
    }

    var resetGame = function() {
          while(blankSpaces.length > 0) {
                blankSpaces = [];
                ourWord = [];
                theLetter = '';
                randomNumber = 0;
                chosenWord = '';
                wrongGuesses = [];
                guessesLeft = 6;
                $(".letter").removeClass('alreadyGuessed');
          }
          $(".answer").text(blankSpaces.join(''));
        };

//                  startGame
    $("#startGame").click(function() {
        //resetGame();
        randomNumber = Math.floor(Math.random()*wordsToChooseFrom.length);
        chosenWord = wordsToChooseFrom[randomNumber];
        for(var i =0; i < chosenWord.length; i++) {
        ourWord.push(chosenWord[i]);
        blankSpaces[i] = "_";
        }
        $(".answer").append(blankSpaces);
        alert(chosenWord);
    })

//              when a letter is clicked
    $(".letter").click(function() {
        $(this).addClass("alreadyGuessed");
        theLetter = this.innerHTML;
        for(var i = 0;i < ourWord.length; i++) {

//                    Correct Guess
            if  (theLetter === ourWord[i]) {
                  blankSpaces[i] = theLetter;
                  $('.answer').text(blankSpaces.join(''));

//                    Win Game
                  if (blankSpaces.indexOf("_") === -1) {
                      alert('Congratulations! You Won!!!');
                      resetGame();
                      addWonGame();
                      }
            }
        }
//                    Wrong Guess
            if (!(ourWord.indexOf(theLetter) > -1)) {
                  wrongGuesses.push('wrong');
                  console.log(wrongGuesses);
                  subtractGuess();

//                     Lose Game
                  if (wrongGuesses.length === 6) {
                      alert("Sorry, you lost.");
                      resetGame();
                      addGameLost();
                      }
            }
    });
});

