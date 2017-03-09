$(document).ready(function() {

      //create word bank:
    var wordsToChooseFrom = ["bologna", "cheese", "sandwich", "pizza", "barbeque"];

    //randomly select a word from word bank:
    var randomNumber = 0;
    var chosenWord = '';
    var ourWord = [];
    var blankSpaces = [];
    //var indecesOfLetter = [];
    var theLetter = '';
    //var arrayHolder = [];
    var wrongGuesses = [];
    //var resetGame = function() {
    //    blankSpaces = [];
    //  }
    //create blanks for our word:
    var resetGame = function() {
          while(blankSpaces.length > 0) {
          blankSpaces.pop();
          $(".answer").text('please play again');
          }
        };
    $("#startGame").click(function() {
        //resetGame();
        randomNumber = Math.floor(Math.random()*wordsToChooseFrom.length);
        chosenWord = wordsToChooseFrom[randomNumber];
        console.log(ourWord);
        for(var i =0; i < chosenWord.length; i++) {
        ourWord.push(chosenWord[i]);
        //blankSpaces.push("_");
        blankSpaces[i] = "_";
        }
        $(".answer").append(blankSpaces);
        alert(chosenWord);
    })

        //when a letter is clicked
    $(".letter").click(function() {
        $(this).addClass("alreadyGuessed");
        theLetter = this.innerHTML;
        for(var i = 0;i < ourWord.length; i++) {
            if (theLetter === ourWord[i]) {
                blankSpaces[i] = theLetter;
                $('.answer').text(blankSpaces.join(''));
                if (blankSpaces.indexOf("_") === -1) {
                    alert('Congratulations! You Won!!!');
                    resetGame();
                }
              }
          }

        //location.reload();

        if (!(ourWord.indexOf(theLetter) > -1)) {
              wrongGuesses.push('wrong');
        }
          //else {
          //    alert('sweet!');
          //}
        console.log(wrongGuesses);

        if (wrongGuesses.length === 6) {
          alert("Sorry, you lost.");
          resetGame();
          }
          //location.reload();
          //console.log("");

  })
          //
//         $('#reset').click(function() {
//             while(blankSpaces.length > 0) {
//               blankSpaces.pop();
// }
//         })


});



