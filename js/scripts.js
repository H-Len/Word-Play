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
