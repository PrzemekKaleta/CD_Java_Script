$(function(){

    var textArea = $('#text_in');
    var outText = $('#text_out');

    textArea.attr('maxlength',100);

    outText.css("color","green");
    textArea.on('keyup', function () {

       var signsQuantity = textArea.val().length;

       if(signsQuantity < 34){
           outText.css("color","green");
       }else if(signsQuantity > 67){
           outText.css("color","red");
       }else {
           outText.css("color","yellow");
       }
       outText.text(signsQuantity + "/100");

    })

});