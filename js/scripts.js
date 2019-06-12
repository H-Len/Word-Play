//Business logic

var chars = string.split('');


//Interface logic

$(function() {
  var newSentence = [];
    $("#sentence").submit(function(event) {
      event.preventDefault();
      var sentenceInput = $("input#userSentence").val();
      console.log(sentenceInput);


    });
});


/* Filter Practice (solution)
var sentence = "My name is Daniel";
var newSentence = sentence.split(" ");
var result = newSentence.filter(word => word.length > 3);
