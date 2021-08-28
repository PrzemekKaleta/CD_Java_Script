document.addEventListener("DOMContentLoaded", function () {

    var inputCardNumber = document.getElementById("card");
    var cardType = document.getElementById("type");


    inputCardNumber.addEventListener("keyup", function () {

        var input = inputCardNumber.value;
        cardType.innerText = validation(input);
    });


    var validation = function(inp){

        var isOk;

        for(var i = 0; i < inp.length; i++){

            var tempAt = inp.charAt(i);

            if(isNaN(tempAt)){
               isOk = "";
               break;
            }

        }

        if((inp.charAt(0) == "4") && (inp.length > 12) && (inp.length < 17)){

            isOk = "Visa";

        }else if((inp.charAt(0) == "5") && (inp.length == 16)){

            isOk = "Mastercard";


        }else if((inp.charAt(0) == "3" ) && ((inp.charAt(1) == "4") || (inp.charAt(1) == "7")) && (inp.length == 15)){

            isOk = "American Express";

        }else{
            isOk = "";
        }

        return isOk;
    }




});