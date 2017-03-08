$(document).ready(function() {
      //check jquery
      // $(".letter").click(function() {
      //   alert("jquery working!")
      // });
      //create word bank
    var wordsToChooseFrom = ["bologna", "cheese", "sandwich"];

    //randomly select a word from word bank
    var randNumber = Math.floor(Math.random()*wordsToChooseFrom.length);
    var ourWord = wordsToChooseFrom[randNumber];
    //alert(randNumber);
    //alert(ourWord);
    //create blanks for our word
    //and append it to answer
    $("#startGame").click(function() {
        var blankSpaces = "";
        for(var i = 0; i < ourWord.length; i++) {
        blankSpaces +="_";
        }
      alert(blankSpaces)
      //var blanks = $('blankSpaces').html;
      $(".answer").append(blankSpaces);
    });


});
