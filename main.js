$(document).ready(function() {

      //create word bank:
    var wordsToChooseFrom = ["bologna", "cheese", "sandwich", "pizza", "barbeque"];

    //randomly select a word from word bank:
    var randomNumber = 0;
    var chosenWord = '';
    var ourWord = [];
    var blankSpaces = [];
    var indecesOfLetter = [];

    //create blanks for our word:
    $("#startGame").click(function() {
        randomNumber = Math.floor(Math.random()*wordsToChooseFrom.length);
        chosenWord = wordsToChooseFrom[randomNumber];
        console.log(ourWord);
        for(var i =0; i < chosenWord.length; i++) {
        ourWord.push(chosenWord[i]);
        blankSpaces.push("_");
        }
        $(".answer").append(blankSpaces);
        alert(ourWord);

    });

    //when a button is clicked
    $(".letter").click(function() {

        var theLetter = this.innerHTML;
        for(var i = 0;i < ourWord.length; i++) {
            if (theLetter === ourWord[i]) {
              //alert('yes!');
              indecesOfLetter.push(i);
          }

            //else (alert('nope!'));
    }
console.log(indecesOfLetter);

    //console.log([theLetter, indecesOfLetter]);
        });



        // alert(theLetter);
        // alert(ourWord);
        //alert(ourWord.indexof(theLetter));

});

